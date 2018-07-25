//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMPushTestControllerBase');
com.yyuap.demo.UMPushTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMPushTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMPushTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMPushTestControllerBase.prototype = {
};
com.yyuap.demo.UMPushTestControllerBase.registerClass('com.yyuap.demo.UMPushTestControllerBase',UMP.UI.Mvc.ControllerBase);
