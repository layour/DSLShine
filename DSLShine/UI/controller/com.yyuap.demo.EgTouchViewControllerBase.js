//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgTouchViewControllerBase');
com.yyuap.demo.EgTouchViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgTouchViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgTouchViewControllerBase.prototype = {
};
com.yyuap.demo.EgTouchViewControllerBase.registerClass('com.yyuap.demo.EgTouchViewControllerBase',UMP.UI.Mvc.ControllerBase);
