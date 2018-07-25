//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMViewTestControllerBase');
com.yyuap.demo.UMViewTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMViewTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMViewTestControllerBase.prototype = {
};
com.yyuap.demo.UMViewTestControllerBase.registerClass('com.yyuap.demo.UMViewTestControllerBase',UMP.UI.Mvc.ControllerBase);
