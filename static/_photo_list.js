/*global Y, window */
Y.Core.register("photo-list", function () {
    var api, 
        node,
        lastImg,
        //===========================
        // Private Functions & Events
        //===========================
        /* 
         * User photo click event handler
         * @event photoClickHandler
         * @param event {Y.Event} Event object
         * @private
         * @return void
         */
        photoClickHandler = function (e) {
            Y.log("photoClickHandler()", "info", "#photo-list");
            e.preventDefault();
            if (lastImg) {
                lastImg.removeClass("selected");
            }
            lastImg = e.currentTarget;
            lastImg.addClass("selected");
            api.broadcast("photo-list:click", lastImg.get("src"));
            window.scrollTo(0, 0);
        },
        /* 
         * Update UI when photo data feed has received
         * @method updateUI
         * @param data {Object} Photo data feed 
         * @private
         * @return void
         */
        updateUI = function (data) {
            Y.log("updateUI() is initialized ", "info", "#photo-list");
            // the feed is empty
            if (!parseInt(data.photos.total, 10)) {
                node.one(".bd").removeClass("loading");
                Y.log("updateUI() data is empty.", "info", "#photo-list");
                return false;
            }
            var items    = data.photos.photo,
                item     = null,
                bodyNode = node.one(".bd"),
                html     = [],
                i        = null,
                img      = "",
                link     = "";

            html.push("<ul class=\"clearfix\">");
            for (i in items) {
                item = items[i];
                img  = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_s.jpg"; 
                link = "http://www.flickr.com/photos/" + item.owner + "/" + item.id;  
                html.push("<li><a href=\"" + link + "\" title=\"" + item.title + "\"><img src=\"" + img + "\"></a></li>");
            }
            html.push("</ul>");
            bodyNode.set("innerHTML", html.join(""));
            lastImg = node.one("img");
            lastImg.addClass("selected");
            api.broadcast("photo-list:rendered", lastImg.get("src"));
            Y.log("updateUI() has updated successfully.", "info", "#photo-list");
            return true;
        },
        submitReceiveHandler = function (msgName, callerId, callerData) {
            node.one(".bd").set("innerHTML", "");
            node.one(".bd").addClass("loading");
        },
        dataReceiveHandler = function (msgName, callerId, callerData) {
            updateUI(callerData);
            node.one(".bd").removeClass("loading");
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
            Y.log("init()", "info", "#photo-list");
            api = sandbox;
            api.listen("photo-filter:submit", submitReceiveHandler);
            api.listen("photo-filter:response", dataReceiveHandler);
        },
        /* 
         * Module content ready event
         * @event onviewload 
         * @public
         * @return void
         */
        onviewload = function () {
            Y.log("onviewload()", "info", "#photo-list");
            node = api.getViewNode();
            Y.delegate("click", photoClickHandler, node, "img", this);
            lastImg = node.one("img");
            lastImg.addClass("selected");
            api.broadcast("photo-list:rendered", lastImg.get("src"));
        },
        /* 
         * Module message receive event
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() : " + eventName, "info", "#photo-list"); 
        };
    return {
        init: init,
        onviewload: onviewload,
        onmessage: onmessage
    };
}());
