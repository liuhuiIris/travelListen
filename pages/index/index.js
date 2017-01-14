//index.js
//获取应用实例
var app = getApp();

//获取封装好的ajax
var ajax = require('../../utils/util.ajax.js');

Page({
    data:{
        hotList:null,
        navList:[
            {
                name:"名优特产",
                icon:"btn_specialty.png",
                page:"local-product/index"
            },
            {
                name:"名店小吃",
                icon:"btn_shop.png",
                page:"local-snack/local-snack"
            },
            {
                name:"行程管理",
                icon:"btn_journey.png",
                page:""
            },
            {
                name:"景点门票",
                icon:"btn_ticket.png",
                page:""
            }
        ]
    },
    onLoad:function(){
        var that = this;
        ajax.post('https://www.yuanweilh.com.cn/vtg/v3/api.do',
                'cityName=%E5%8C%97%E4%BA%AC&lanKey=zh-cn&provinceName=&method=scenicsOfCityNew&',
                function(res){
                    that.setData({
                        hotList:res.data.data.scenics
                    });
                })
    },
    myLocation:function(){
        var that = this;
        wx.getLocation({
            // 返回可以用于wx.openLocation的经纬度
            type:'gcj02',
            success:function(res){
                var latitude = res.latitude;
                var longitude = res.longitude;
                wx.openLocation({
                    latitude:latitude,
                    longitude:longitude,
                    scale:1
                })
            }
        });
    }
})
