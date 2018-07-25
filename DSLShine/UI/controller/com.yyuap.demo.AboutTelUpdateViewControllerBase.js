//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutTelUpdateViewControllerBase');
com.yyuap.demo.AboutTelUpdateViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutTelUpdateViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutTelUpdateViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutTelUpdateViewControllerBase.prototype = {
};
com.yyuap.demo.AboutTelUpdateViewControllerBase.registerClass('com.yyuap.demo.AboutTelUpdateViewControllerBase',UMP.UI.Mvc.ControllerBase);
