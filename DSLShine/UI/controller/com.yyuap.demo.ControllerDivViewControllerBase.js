//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerDivViewControllerBase');
com.yyuap.demo.ControllerDivViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerDivViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerDivViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerDivViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerDivViewControllerBase.registerClass('com.yyuap.demo.ControllerDivViewControllerBase',UMP.UI.Mvc.ControllerBase);
