/*global Y, window */
YUI.PlatformModules["photo-filter"] = (function () { 
    var api,
        node,
        //=================================
        // Constants
        //=================================
        API_ENTRYPOINT = "http://api.flickr.com/services/rest/",
        API_METHOD = "flickr.photos.search",
        API_KEY = "d498ec869768ecea276a7cb3906241d9",
        API_RESPONSE_FORMAT = "json",
        //=================================
        // Private methods
        //=================================
        /* 
         * Data response callback
         * @method getData
         * @private
         * @return void
         */
        getData = function (o) {
            api.broadcast("photo-filter:response", o);
        },
        /* 
         * Make request to get data 
         * @method makeRequest
         * @return void
         */
        makeRequest = function () {
            var tokens    = {},
                callback = "",
                url      = API_ENTRYPOINT + "?method=" + API_METHOD + "&api_key=" + API_KEY + "&tags={tags}&per_page=100&sort=interestingness-desc&format=" + API_RESPONSE_FORMAT + "&jsoncallback={callback}";  // Flickr API 网址

            callback = "_getData_" + parseInt(new Date().getTime(), 10);
            tokens = {
                "tags": encodeURIComponent(node.one("form .keyword").get("value")),
                "callback": callback
            };
            url = Y.substitute(url, tokens);
            window[callback] = getData;
            Y.Get.script(url, {
                onSuccess : function () {
                    window[callback] = null;
                }
            });
        },
        /* 
         * Form submit event handler
         * @event formSubmitHandler
         * @param e {Y.Event} Event Object
         * @private
         * @return void
         */
        formSubmitHandler = function (e) {
            e.preventDefault();
            api.broadcast("photo-filter:submit");
            makeRequest();    
        },
        //=================================
        // Public methods
        //=================================
        /* 
         * Module initialization
         * @method init
         * @param sandbox {Y.Sandbox}
         */
        init = function (sandbox) {
            Y.log("init() is executed.", "info", "#photo-filter");
            api = sandbox;
        },
        /* 
         * Module content ready event
         * @method onviewload
         * @return void
         */
        onviewload = function () {
            node = api.getViewNode();
            node.one("form").on("submit", formSubmitHandler, this);
            if (node.one("form .keyword").get("value")) {
                makeRequest();    
            }
        };
    return {
        init: init,
        onviewload: onviewload
    };
}());
