//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMCallbackViewControllerBase');
com.yyuap.demo.UMCallbackViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMCallbackViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMCallbackViewControllerBase.prototype = {
};
com.yyuap.demo.UMCallbackViewControllerBase.registerClass('com.yyuap.demo.UMCallbackViewControllerBase',UMP.UI.Mvc.ControllerBase);
