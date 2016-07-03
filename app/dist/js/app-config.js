window.configs = {
    baseUrl: "/app",
    paths: {
        base: ["cdn/app/dist/js/base", "/app/dist/js/base"],
        jquery: ["//cdn.bootcss.com/jquery/1.7.2/jquery.min", "/libs/dist/jquery/1.7.2/jquery.min"],
        underscore: ["cdn/dist/underscore/1.0.0/underscore.min", "/libs/dist/underscore/1.0.0/underscore.min"],
        backbone: ["//cdn.bootcss.com/backbone.js/1.1.2/backbone-min", "/libs/dist/backbone/backbone-min"],
        photoswipe: ["//cdn.bootcss.com/photoswipe/3.0.5/code.photoswipe.jquery.min", "/libs/dist/photoswipe/3.0.5/code.photoswipe.jquery-3.0.5"],
        wqjphotoswipe: ["cdn/dist/photoswipe/3.0.5/wqj.photoswipe.jquery-1.0", "/libs/dist/photoswipe/3.0.5/wqj.photoswipe.jquery-1.0"],
        klass: ["//cdn.bootcss.com/photoswipe/3.0.5/klass.min", "/libs/dist/photoswipe/3.0.5/klass.min"],
        floatnotify: ["cdn/dist/notification/notification", "/libs/dist/notification/notification"],
        template: ["cdn/dist/artTemplate/3.0/template", "/libs/dist/artTemplate/3.0/template"],
        iscroll: ["cdn/dist/iscroll/5.0/iscroll", "/libs/dist/iscroll/5.0/iscroll"],
        swiper: ["cdn/dist/wqj-swiper/2.0/idangerous.swiper", "/libs/dist/wqj-swiper/2.0/idangerous.swiper"],
        scrollbar: ["cdn/dist/wqj-swiper/2.0/idangerous.swiper.scrollbar", "/libs/dist/wqj-swiper/2.0/idangerous.swiper.scrollbar"],
        base64: ["cdn/dist/base64/base64", "/libs/dist/base64/base64"],
        youku: ["cdn/dist/youku/jsapi", "/libs/dist/youku/jsapi"],
        zepto: ["cdn/dist/zepto/zepto", "/libs/dist/zepto/zepto"],
        jQMD5: ["cdn/dist/jquery/jquery.md5", "/libs/dist/jquery/jquery.md5"],
        lazyload: ["cdn/dist/lazyload/lazyload", "/libs/dist/lazyload/lazyload"],
        wookmark: ["cdn/dist/lazyload/jquery.wookmark", "/libs/dist/lazyload/jquery.wookmark"],
        wx: "http://res.wx.qq.com/open/js/jweixin-1.0.0",
        wxShare: ["//cdn.wqingjian.com/app/dist/js/wx_share", "/app/dist/js/wx_share"]
    },
    shim: {
        base: {exports: "base"},
        jquery: {exports: "jQuery"},
        underscore: {exports: "_"},
        backbone: {deps: ["underscore", "jquery"], exports: "Backbone"},
        floatnotify: {exports: "floatNotify"},
        photoswipe: {deps: ["klass", "jquery"]},
        wqjphotoswipe: {deps: ["klass", "jquery"]},
        iscroll: {deps: ["jquery"], exports: "iScroll"},
        swiper: {deps: ["jquery"]},
        scrollbar: {deps: ["jquery", "swiper"]},
        base64: {exports: "Base64"},
        zepto: {exports: "Zepto"},
        lazyload: {deps: ["jquery"]},
        wookmark: {deps: ["jquery"]},
        jQMD5: {deps: ["jquery"], exports: "md5"},
        wxShare: {deps: ["jquery", "wx"]}
    },
    urlArgs: "7.3"
};