//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.New_fileControllerBase');
com.yyuap.demo.New_fileControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMMenuTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.New_fileControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.New_fileControllerBase.prototype = {
};
com.yyuap.demo.New_fileControllerBase.registerClass('com.yyuap.demo.New_fileControllerBase',UMP.UI.Mvc.ControllerBase);
