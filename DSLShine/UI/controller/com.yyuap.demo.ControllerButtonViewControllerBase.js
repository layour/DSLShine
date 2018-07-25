//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerButtonViewControllerBase');
com.yyuap.demo.ControllerButtonViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerButtonViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerButtonViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerButtonViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerButtonViewControllerBase.registerClass('com.yyuap.demo.ControllerButtonViewControllerBase',UMP.UI.Mvc.ControllerBase);
