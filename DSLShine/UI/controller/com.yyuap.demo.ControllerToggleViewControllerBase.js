//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerToggleViewControllerBase');
com.yyuap.demo.ControllerToggleViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerToggleViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerToggleViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerToggleViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerToggleViewControllerBase.registerClass('com.yyuap.demo.ControllerToggleViewControllerBase',UMP.UI.Mvc.ControllerBase);
