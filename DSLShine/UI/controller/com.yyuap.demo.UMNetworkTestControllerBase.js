//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMNetworkTestControllerBase');
com.yyuap.demo.UMNetworkTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMNetworkTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMNetworkTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMNetworkTestControllerBase.prototype = {
};
com.yyuap.demo.UMNetworkTestControllerBase.registerClass('com.yyuap.demo.UMNetworkTestControllerBase',UMP.UI.Mvc.ControllerBase);
