// city-list.js
var app = getApp();
var ajax = require('../../../utils/util.ajax.js');
var _url = app.globalData.url;
var _data = 'lanKey=zh-cn&method=citySwitch&';
Page({
    data:{
        curCity:'',
        hotCitys:null,
        allCitys:null,
        toView:'A'
    },
    onLoad:function(query){
        var that = this;
        this.setData({
            curCity:query.city
        });
        ajax.post(_url,_data,function (res) {  
            var all = res.data.data.allCitys;
            var obj = {};
            for(var i in all){
                if(!obj[all[i].lyPrefixLetter]){
                    obj[all[i].lyPrefixLetter]=[];
                }
                obj[all[i].lyPrefixLetter].push(all[i]);
            }
            var arr = [];
            for(var j in obj){
                var tmp = {id:j,citys:obj[j]};
                arr.push(tmp);
            }
            // 将对象数组进行排序
            arr.sort(function (a,b) {  
                if(a.id>b.id){
                    return 1;
                }else if(a.id<b.id){
                    return -1;
                }else{
                    return 0;
                }
            });
            // console.log(arr);
            that.setData({
                hotCitys:res.data.data.hotCitys,
                allCitys:arr
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