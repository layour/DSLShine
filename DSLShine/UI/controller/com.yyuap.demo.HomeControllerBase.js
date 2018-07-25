//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.HomeControllerBase');
com.yyuap.demo.HomeControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.HomeControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.HomeControllerBase.prototype = {
};
com.yyuap.demo.HomeControllerBase.registerClass('com.yyuap.demo.HomeControllerBase',UMP.UI.Mvc.ControllerBase);
