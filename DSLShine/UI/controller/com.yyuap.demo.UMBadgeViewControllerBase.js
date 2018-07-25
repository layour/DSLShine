//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMBadgeViewControllerBase');
com.yyuap.demo.UMBadgeViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMBadgeViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMBadgeViewControllerBase.prototype = {
};
com.yyuap.demo.UMBadgeViewControllerBase.registerClass('com.yyuap.demo.UMBadgeViewControllerBase',UMP.UI.Mvc.ControllerBase);
