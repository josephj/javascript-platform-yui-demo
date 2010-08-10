YUI.PlatformModules["lang-select"] = (function() {
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
        langChangeHandler = function (e) {
            api.setLang(this.get("value"), function () {
                api.broadcast("lang-change")
            });
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
            Y.log("init() is executed", "info", "#lang-select");
            api = sandbox;
        },
        /* 
         * Module content ready
         * @event onviewload 
         * @public
         * @return void
         */
        onviewload = function () {
            Y.log("onviewload() is executed", "info", "#lang-select");
            node = api.getViewNode();
            selectNode = node.one("select");
            selectNode.set("value", api.getLang());
            selectNode.on("change", langChangeHandler);
        },
        /* 
         * Module message receive
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() " + eventName, "info", "#lang-select");
        };

    return {
        init: init,
        onviewload: onviewload,
        onmessage: onmessage
    }
}());
