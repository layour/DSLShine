//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerMediaViewControllerBase');
com.yyuap.demo.ControllerMediaViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerMediaViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerMediaViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerMediaViewControllerBase.registerClass('com.yyuap.demo.ControllerMediaViewControllerBase',UMP.UI.Mvc.ControllerBase);
