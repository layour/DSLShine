//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerProgressViewControllerBase');
com.yyuap.demo.ControllerProgressViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerProgressViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerProgressViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerProgressViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerProgressViewControllerBase.registerClass('com.yyuap.demo.ControllerProgressViewControllerBase',UMP.UI.Mvc.ControllerBase);
