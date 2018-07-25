//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.CommonViewControllerBase');
com.yyuap.demo.CommonViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.CommonViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.CommonViewControllerBase.prototype = {
};
com.yyuap.demo.CommonViewControllerBase.registerClass('com.yyuap.demo.CommonViewControllerBase',UMP.UI.Mvc.ControllerBase);
