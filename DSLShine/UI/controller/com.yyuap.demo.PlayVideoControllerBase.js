//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PlayVideoControllerBase');
com.yyuap.demo.PlayVideoControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PlayVideoController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PlayVideoControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PlayVideoControllerBase.prototype = {
};
com.yyuap.demo.PlayVideoControllerBase.registerClass('com.yyuap.demo.PlayVideoControllerBase',UMP.UI.Mvc.ControllerBase);
