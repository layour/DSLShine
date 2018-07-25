//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ViewWithAnimationControllerBase');
com.yyuap.demo.ViewWithAnimationControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ViewWithAnimationControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ViewWithAnimationControllerBase.prototype = {
};
com.yyuap.demo.ViewWithAnimationControllerBase.registerClass('com.yyuap.demo.ViewWithAnimationControllerBase',UMP.UI.Mvc.ControllerBase);
