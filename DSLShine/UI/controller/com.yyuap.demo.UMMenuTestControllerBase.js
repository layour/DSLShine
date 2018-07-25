//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMMenuTestControllerBase');
com.yyuap.demo.UMMenuTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMMenuTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMMenuTestControllerBase.prototype = {
};
com.yyuap.demo.UMMenuTestControllerBase.registerClass('com.yyuap.demo.UMMenuTestControllerBase',UMP.UI.Mvc.ControllerBase);
