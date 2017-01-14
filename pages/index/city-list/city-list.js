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
    onLoad:function(){
        var that = this;
        this.setData({
            curCity:app.globalData.curCity
        });
        ajax.post(_url,_data,function (res) {  
            that.setData({
                hotCitys:res.data.data.hotCitys,
                allCitys:res.data.data.allCitys
            });
        })
    }
})