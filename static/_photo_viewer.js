/*global Y */
(function () {
    Y.PlatformCore.register("photo-viewer", function () {
        var api,
            node,
            //=================================
            // Public methods
            //=================================
            /* 
             * Module initialization
             * @method init
             * @param sandbox {Y.Sandbox}
             * @public
             * @return void
             */
            init = function (sandbox) {
                Y.log("init() is executed.", "info", "#photo-viewer");
                api = sandbox;
                api.listen("photo-list:rendered");
                api.listen("photo-list:click");
            },
            /* 
             * Module content ready event
             * @method onviewload
             * @public
             * @return void
             */
            onviewload = function () {
                node = api.getViewNode();
				node.on("click", function(e){
					api.broadcast("photo-viewer:click");
				});
            }, 
            /* 
             * Module message receive event
             * @event onmessage
             * @param msgName {String} Message Label Name
             * @param callerId {String} The caller module ID
             * @param callerData {Object} The caller module's sharing data
             * @public
             * @return void
             */
            onmessage = function (msgName, callerId, callerData) {
                node.one(".bd").set("innerHTML", "<img src='" + callerData.replace("_s", "") + "'>");
            };

        return {
            init: init,
            onviewload: onviewload,
            onmessage: onmessage
        };
    }());
}());
