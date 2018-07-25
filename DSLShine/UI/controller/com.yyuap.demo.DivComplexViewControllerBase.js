//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.DivComplexViewControllerBase');
com.yyuap.demo.DivComplexViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "DivComplexViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.DivComplexViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.DivComplexViewControllerBase.prototype = {
};
com.yyuap.demo.DivComplexViewControllerBase.registerClass('com.yyuap.demo.DivComplexViewControllerBase',UMP.UI.Mvc.ControllerBase);
