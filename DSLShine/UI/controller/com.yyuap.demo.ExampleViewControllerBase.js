//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ExampleViewControllerBase');
com.yyuap.demo.ExampleViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ExampleViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ExampleViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ExampleViewControllerBase.prototype = {
};
com.yyuap.demo.ExampleViewControllerBase.registerClass('com.yyuap.demo.ExampleViewControllerBase',UMP.UI.Mvc.ControllerBase);
