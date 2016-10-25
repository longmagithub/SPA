/**
 * Created by MAL on 9/26/16.
 */
app.factory('newsService', ['$http',function($http){
    var newsService =  {};

    var appID = "24994";
    var appSign = "1ba0a09a6d6d4745b5d7593570bf3e43";

    var NeedContent = 0;
    var NeedHtml = 1;
    var NeedAllList = 0;
    //var channels = [];
    newsService.loadChannels = function () {

        var url = "http://route.showapi.com/109-34?"
            + "showapi_appid=" + appID + "&"
            + "showapi_sign=" + appSign + "&"
            + "showapi_timestamp=" + getTimeStamp();
        return $http.get(url);

    };
    
    newsService.channelTop3 = function (channel) {
        var url = "http://route.showapi.com/109-35?"
            + "showapi_appid=" + appID + "&"
            + "showapi_sign=" + appSign + "&"
            + "showapi_timestamp=" + getTimeStamp() + "&"
            + "channelName=" + channel +"&"
            + "maxResult=3"
        return $http.get(url);
    };
    newsService.loadNews = function (channelName, pageNum, resultNum) {
        var url = "http://route.showapi.com/109-35?"
            + "showapi_appid=" + appID + "&"
            + "showapi_sign=" + appSign + "&"
            + "showapi_timestamp=" + getTimeStamp() + "&"
            + "channelName=" + channelName +"&"
            + "maxResult=" + resultNum + "&"
            + "page=" + pageNum +"&"
            + "needContent=" + NeedContent + "&"
            + "needHtml=" + NeedHtml + "&"
            + "needAllList=" + NeedAllList;
        return $http.get(url);
    };
    return newsService;
}]);

function stampFormat(num){
    if(num < 10) return "0" + num;
    else return "" + num;
}
function getTimeStamp() {
    var date = new Date();
    var stamp = date.getUTCFullYear()
        + stampFormat(date.getMonth())
        + stampFormat(date.getDate())
        + stampFormat(date.getHours())
        + stampFormat(date.getMinutes())
        + stampFormat(date.getSeconds());
    return stamp;
}