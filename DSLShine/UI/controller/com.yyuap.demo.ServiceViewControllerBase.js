//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ServiceViewControllerBase');
com.yyuap.demo.ServiceViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ExampleViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ServiceViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ServiceViewControllerBase.prototype = {
};
com.yyuap.demo.ServiceViewControllerBase.registerClass('com.yyuap.demo.ServiceViewControllerBase',UMP.UI.Mvc.ControllerBase);
