var _url = 'https://www.yuanweilh.com.cn/vtg/scenic/api.do';
var _data = 'LanguageId=2439&Mobile=15820097670&method=scenicDownload&';

var ajax = require('../../../utils/util.ajax.js');

Page({
    data:{
        icon:'',
        audioSrc:''
    },
    onLoad:function (query) {
        var that = this;
        // console.log(query.language);  
        ajax.post(_url,'LanguageId='+query.language+'&Mobile=15820097670&method=scenicDownload&',function (res) {  
            that.setData({
                icon:res.data.data.icon,
                audioSrc:res.data.data.voice
            });
        })
    }
})