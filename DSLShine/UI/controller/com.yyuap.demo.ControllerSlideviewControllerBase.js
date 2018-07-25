//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerSlideviewControllerBase');
com.yyuap.demo.ControllerSlideviewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerSlideviewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerSlideviewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerSlideviewControllerBase.prototype = {
};
com.yyuap.demo.ControllerSlideviewControllerBase.registerClass('com.yyuap.demo.ControllerSlideviewControllerBase',UMP.UI.Mvc.ControllerBase);
