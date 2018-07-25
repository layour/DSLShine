//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerViewControllerBase');
com.yyuap.demo.ControllerViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ExampleViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerViewControllerBase.registerClass('com.yyuap.demo.ControllerViewControllerBase',UMP.UI.Mvc.ControllerBase);
