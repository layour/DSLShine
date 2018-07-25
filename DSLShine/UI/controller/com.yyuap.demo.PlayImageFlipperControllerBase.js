//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PlayImageFlipperControllerBase');
com.yyuap.demo.PlayImageFlipperControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PlayImageFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PlayImageFlipperControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PlayImageFlipperControllerBase.prototype = {
};
com.yyuap.demo.PlayImageFlipperControllerBase.registerClass('com.yyuap.demo.PlayImageFlipperControllerBase',UMP.UI.Mvc.ControllerBase);
