//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.DivVBoxViewControllerBase');
com.yyuap.demo.DivVBoxViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "DivVBoxViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.DivVBoxViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.DivVBoxViewControllerBase.prototype = {
};
com.yyuap.demo.DivVBoxViewControllerBase.registerClass('com.yyuap.demo.DivVBoxViewControllerBase',UMP.UI.Mvc.ControllerBase);
