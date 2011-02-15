<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" >
<title><?php echo $data["title"]; ?></title>
<!-- YUI Grids -->
<link type="text/css" rel="stylesheet" href="static/yui/3.1.1/cssreset/reset.css" >
<link type="text/css" rel="stylesheet" href="static/yui/3.1.1/cssfonts/fonts.css" >
<link type="text/css" rel="stylesheet" href="static/yui/3.1.1/cssgrids/grids.css" >
<!-- Global Style such as font color -->
<link type="text/css" rel="stylesheet" href="static/core.css" >
<!-- Reusable Modular CSS -->
<link type="text/css" rel="stylesheet" href="static/mod.css" >
<!-- CSS for Individual Modules -->
<link type="text/css" rel="stylesheet" href="static/_masthead.css" >
<link type="text/css" rel="stylesheet" href="static/_photo_list.css" >
<link type="text/css" rel="stylesheet" href="static/_photo_filter.css" >
<link type="text/css" rel="stylesheet" href="static/_photo_viewer.css" >
<link type="text/css" rel="stylesheet" href="static/_introduction.css" >
<link type="text/css" rel="stylesheet" href="static/_lang_show.css" >
<link type="text/css" rel="stylesheet" href="static/_lang_select.css" >
<script type="text/javascript" src="http://yui.yahooapis.com/3.1.1/build/yui/yui-min.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/substitute/substitute.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/oop/oop.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/dom/dom-base.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/dom/selector-native.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/dom/selector-css2.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/event-custom/event-custom.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/event/event-base.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/node/node-base.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/event/event-delegate.js"></script>
<script src="http://yui.yahooapis.com/3.1.1/build/intl/intl.js"></script>
<script type="text/javascript" src="static/platform/core.js"></script>
<script type="text/javascript" src="static/platform/sandbox.js"></script>
<script type="text/javascript" src="static/platform/lang_service.js"></script>
<script type="text/javascript" src="static/_photo_viewer.js"></script>
<script type="text/javascript" src="static/_photo_filter.js"></script>
<script type="text/javascript" src="static/_photo_list.js"></script>
<script type="text/javascript" src="static/_lang_show.js"></script>
<script type="text/javascript" src="static/_lang_select.js"></script>
<script>
// global Y is necessary...
Y = YUI({
    filter: "raw",
    lang: "jp-JP",
    groups: {
        myapp: {
            filter: "raw",
            base: "static/",
            modules : {
                "demo" : {
                    lang: ["jp-JP", "zh-Hant", "zh-Hans"]
                }
            }
        }
    }
}).use("substitute", "platform-core", "lang-service", "event-delegate", "demo",  function (Y) {
    var core = Y.PlatformCore;
    core.registerAll(YUI.PlatformModules);
    core.setLangModule("demo");
});
</script>
</head>
<body class="yui3-skin-sam">
<h1><?php echo $data["title"]; ?></h1>
