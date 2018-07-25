//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMServiceTestControllerBase');
com.yyuap.demo.UMServiceTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMServiceTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMServiceTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMServiceTestControllerBase.prototype = {
};
com.yyuap.demo.UMServiceTestControllerBase.registerClass('com.yyuap.demo.UMServiceTestControllerBase',UMP.UI.Mvc.ControllerBase);
