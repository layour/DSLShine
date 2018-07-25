//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.DivHBoxViewControllerBase');
com.yyuap.demo.DivHBoxViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "DivHBoxViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.DivHBoxViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.DivHBoxViewControllerBase.prototype = {
};
com.yyuap.demo.DivHBoxViewControllerBase.registerClass('com.yyuap.demo.DivHBoxViewControllerBase',UMP.UI.Mvc.ControllerBase);
