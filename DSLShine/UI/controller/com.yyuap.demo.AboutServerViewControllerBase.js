//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutServerViewControllerBase');
com.yyuap.demo.AboutServerViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutServerViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutServerViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutServerViewControllerBase.prototype = {
};
com.yyuap.demo.AboutServerViewControllerBase.registerClass('com.yyuap.demo.AboutServerViewControllerBase',UMP.UI.Mvc.ControllerBase);
