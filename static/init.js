// global Y is necessary...
YUI({
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
}).use("*", function (Y) {
    window.Y = Y;
    var core = Y.PlatformCore;
    if (core.setLangModule("demo")) {
        core.registerAll(YUI.PlatformModules);
    } else {
        Y.use("lang/demo_" +  Y.config.lang, function () {
            core.setLangModule("demo");
            core.registerAll(YUI.PlatformModules);
        });
    }
});
