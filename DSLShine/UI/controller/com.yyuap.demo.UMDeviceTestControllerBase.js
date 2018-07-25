//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMDeviceTestControllerBase');
com.yyuap.demo.UMDeviceTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMDeviceTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMDeviceTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMDeviceTestControllerBase.prototype = {
};
com.yyuap.demo.UMDeviceTestControllerBase.registerClass('com.yyuap.demo.UMDeviceTestControllerBase',UMP.UI.Mvc.ControllerBase);
