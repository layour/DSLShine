//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.WelcomePageControllerBase');
com.yyuap.demo.WelcomePageControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "WelcomePageController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.WelcomePageControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.WelcomePageControllerBase.prototype = {
};
com.yyuap.demo.WelcomePageControllerBase.registerClass('com.yyuap.demo.WelcomePageControllerBase',UMP.UI.Mvc.ControllerBase);
