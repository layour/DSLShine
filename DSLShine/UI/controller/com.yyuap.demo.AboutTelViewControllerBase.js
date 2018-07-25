//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutTelViewControllerBase');
com.yyuap.demo.AboutTelViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutTelViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutTelViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutTelViewControllerBase.prototype = {
};
com.yyuap.demo.AboutTelViewControllerBase.registerClass('com.yyuap.demo.AboutTelViewControllerBase',UMP.UI.Mvc.ControllerBase);
