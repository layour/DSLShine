//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutHttpViewControllerBase');
com.yyuap.demo.AboutHttpViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutHttpViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutHttpViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutHttpViewControllerBase.prototype = {
};
com.yyuap.demo.AboutHttpViewControllerBase.registerClass('com.yyuap.demo.AboutHttpViewControllerBase',UMP.UI.Mvc.ControllerBase);
