//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMFileTestControllerBase');
com.yyuap.demo.UMFileTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMFileTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMFileTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMFileTestControllerBase.prototype = {
};
com.yyuap.demo.UMFileTestControllerBase.registerClass('com.yyuap.demo.UMFileTestControllerBase',UMP.UI.Mvc.ControllerBase);
