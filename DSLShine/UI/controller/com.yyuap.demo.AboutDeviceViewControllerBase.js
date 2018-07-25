//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutDeviceViewControllerBase');
com.yyuap.demo.AboutDeviceViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutDeviceViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutDeviceViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutDeviceViewControllerBase.prototype = {
};
com.yyuap.demo.AboutDeviceViewControllerBase.registerClass('com.yyuap.demo.AboutDeviceViewControllerBase',UMP.UI.Mvc.ControllerBase);
