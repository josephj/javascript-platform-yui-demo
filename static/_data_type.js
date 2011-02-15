/*global Y, window */
YUI.PlatformModules["data-type"] = (function () {
    var api, 
        node,
        //===========================
        // Private Functions & Events
        //===========================
        /* 
         * Private function sample
         * @event fooPrivateFunction
         * @private
         */
        /*
        fooPrivateFunction = function () {
            // do something
        },
        */
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
            Y.log("init() is executed", "info", "#data-type");
            api = sandbox;
            /*
            api.listen("#bar:eventName1");
            api.listen("#bar:eventName2");
            */
        },
        /* 
         * Module content ready
         * @event onviewload 
         * @public
         * @return void
         */
        onviewload = function () {
            Y.log("onviewload() is executed", "info", "#data-type");
            node = api.getViewNode();
            //api.broadcast("foo:rendered", data);
        },
        /* 
         * Module message receive
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() " + eventName, "info", "#data-type");
            /*
            switch (eventName) {
                case "bar:eventName1":
                    // ...
                break;
                case "bar:eventName2":
                    // ...
                break;
            }
            */
        };
    return {
        init: init,
        onviewload: onviewload,
        onmessage: onmessage
    };
}());
