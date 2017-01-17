// city-list.js
var app = getApp();
var ajax = require('../../../utils/util.ajax.js');
var _url = app.globalData.url;
var _data = 'lanKey=zh-cn&method=citySwitch&';
Page({
    data:{
        curCity:'',
        hotCitys:null,
        allCitys:null
    },
    onLoad:function(query){
        var that = this;
        this.setData({
            curCity:query.city
        });
        ajax.post(_url,_data,function (res) {  
            that.setData({
                hotCitys:res.data.data.hotCitys,
                allCitys:res.data.data.allCitys
            });
        })
    },
    chooseCity:function (event) {  
        // console.log(event.target.id);
        wx.switchTab({
            url:"/pages/index/index",
            success:function () {  
                app.globalData.curCity = event.target.id;
                // console.log(app.globalData.curCity);
            }
        })
    }
})