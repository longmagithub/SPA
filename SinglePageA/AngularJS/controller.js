/**
 * Created by MAL on 9/29/16.
 */
app.controller("mySPACtrl",function ($scope, newsService) {
    $scope.name = "Josh";

    var CurrentChannel="";
    var CurrentPage = 1;
    var NumPerPage = 10;
    var NumOfChannel = 14;

    var chList = [];
    var unList = [];
    $scope.shownChannel = [];
    $scope.newsList = [];
    $scope.hideChannel = [];
    $scope.detail={};

    newsService.loadChannels()
        .then(function (response) {
            $scope.channelList = response.data.showapi_res_body.channelList.slice(0,NumOfChannel);
            angular.forEach($scope.channelList,function (value,key) {
                chList.push(value.name);
            });
            $scope.shownChannel = chList;
            //chList= reponse.showapi_res_body.channelList.slice(0,16);
            //$scope.list = chList;
        }),function (response) {
            $scope.shownChannel = [];
        };

    function loadNews() {
        $scope.newsList = [];
        //$scope.name = "Ready to call service";
        newsService.loadNews(CurrentChannel,CurrentPage, NumPerPage)
            .then(function (response) {
                var content = response.data.showapi_res_body.pagebean.contentlist;
                //$scope.name = content[0].html;
                for(var i = 0; i < NumPerPage; i++){
                    var oneNew = new NewsDetail(content[i].title,
                                                content[i].pubDate,
                                                content[i].source,
                                                content[i].html);
                //$scope.name = oneNew;
                    $scope.newsList.push(oneNew);
                }
            }),function (response) {
                $scope.newsList = [];
        };
    };
    loadNews();

    $scope.nextPage = function () {
        CurrentPage ++;
        loadNews();
    };
    $scope.changeChannel = function (channelName) {
        CurrentChannel = channelName;
        CurrentPage = 1;
        loadNews();
    };
    $scope.dislikeChannel = function (channelName) {
        for(var i=0; i < chList.length;i ++){
            if(chList[i] == channelName){
                chList.splice(i,1);
                unList.push(channelName);
                $scope.shownChannel = chList;
                $scope.hideChannel = unList;
                break;
            }

        }
    };
    $scope.likeChannel = function (channelName) {
        for(var i = 0; i< unList.length;i ++){
            if(unList[i] == channelName){
                unList.splice(i,1);
                chList.push(channelName);
                $scope.shownChannel = chList;
                $scope.hideChannel = unList;
                break;
            }
        }
    };
    $scope.setDetail = function (title, content) {
        $scope.detail.title = title;
        $scope.detail.content = content;
    };
});
function NewsDetail(title, pubDate, source, html){
    this.title = title;
    this.pubDate = pubDate;
    this.source = source;
    this.html = html;
}