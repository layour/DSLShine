//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMBadgeTestControllerBase');
com.yyuap.demo.UMBadgeTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMMenuTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMBadgeTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMBadgeTestControllerBase.prototype = {
};
com.yyuap.demo.UMBadgeTestControllerBase.registerClass('com.yyuap.demo.UMBadgeTestControllerBase',UMP.UI.Mvc.ControllerBase);
