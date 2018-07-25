//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerWebViewControllerBase');
com.yyuap.demo.ControllerWebViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerWebViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerWebViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerWebViewControllerBase.registerClass('com.yyuap.demo.ControllerWebViewControllerBase',UMP.UI.Mvc.ControllerBase);
