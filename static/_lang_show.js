YUI.PlatformModules["lang-show"] = (function() {
    var api,
        node,
        //===========================
        // Private Functions & Events
        //===========================
        /* 
         * User change current language tag
         * @event langChangeHandler
         * @private
         */
        langChangeReceiveHandler = function (msgName, callerId, callerData) {
            node.one(".message").set("innerHTML", "<span class=\"x1\"></span>" + api.getTrans("message", "日本的朋友大家好，我是豆花妹！"));
        },
        //=========================
        // pubilc functions 
        //=========================
        /* 
         * Module initialization
         * @event init
         * @param api {Y.Sandbox} Module API 
         * @public
         * @return void
         */
        init = function (sandbox) {
            api = sandbox;
            api.listen("lang-change", langChangeReceiveHandler); 
        },
        onviewload = function () {
            node = api.getViewNode();
            node.one(".message").set("innerHTML", "<span class=\"x1\"></span>" + api.getTrans("message", "日本的朋友大家好，我是豆花妹！"));
            node.one(".message").removeClass("message-hidden");
        },
        /* 
         * Module message receive
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() " + eventName, "info", "#lang-show");
        };

    return {
        init: init,
        onviewload: onviewload
    }
}());
