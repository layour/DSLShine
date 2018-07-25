//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgGameViewControllerBase');
com.yyuap.demo.EgGameViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "EgGameViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgGameViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgGameViewControllerBase.prototype = {
};
com.yyuap.demo.EgGameViewControllerBase.registerClass('com.yyuap.demo.EgGameViewControllerBase',UMP.UI.Mvc.ControllerBase);
