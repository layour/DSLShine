//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgAnimationViewControllerBase');
com.yyuap.demo.EgAnimationViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "EgAnimationViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgAnimationViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgAnimationViewControllerBase.prototype = {
};
com.yyuap.demo.EgAnimationViewControllerBase.registerClass('com.yyuap.demo.EgAnimationViewControllerBase',UMP.UI.Mvc.ControllerBase);
