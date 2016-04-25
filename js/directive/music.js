/**
 * Created by zhangxiaojun on 16/3/27.
 */

myApp.directive("muscicPlay", function (MusciData) {
    return {
        restrict: 'ACE',
        scope: {},
        template: '<a ng-click="musicCil()" ng-class="{on:isplay,stop:!isplay}" ><audio id="music"></audio></a>',
        controller: function ($scope, $sce, $element) {
            $scope.getUrl = $sce.trustAsResourceUrl;
            console.log($element)
        },
        link: function (scope) {
            var mm = document.getElementById("music");
            var mmm = angular.element(mm);
            MusicPlay();
            scope.musicCil = function () {

                if(scope.isplay) {
                    scope.isplay=false;
                    mmm[0].pause();
                }else {
                    scope.isplay=true;
                    mmm[0].play();
                }
            };
            scope.isplay=true;
            function MusicPlay() {
                var num = parseInt(Math.random() * MusciData.getList().length);
                mmm.attr("src", MusciData.get(num));
            }
            mmm.bind("ended", function (data) {
                MusicPlay();
            });
            mmm.bind("canplay", function (data) {
                // console.log(data)
                //MusicPlay();

                this.play()
            })
        }
    }
});
myApp.factory("MusciData", function () {
    var MusciList = [
        "http://7s1szb.com1.z0.glb.clouddn.com/LoveParadise.mp3"

    ];
    return {
        getList: function () {
            return MusciList;
        },
        get: function (i) {
            return MusciList[i];
        }
    }
});
