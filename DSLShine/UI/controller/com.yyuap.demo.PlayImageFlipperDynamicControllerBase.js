//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PlayImageFlipperDynamicControllerBase');
com.yyuap.demo.PlayImageFlipperDynamicControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PlayImageFlipperDynamicController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PlayImageFlipperDynamicControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PlayImageFlipperDynamicControllerBase.prototype = {
};
com.yyuap.demo.PlayImageFlipperDynamicControllerBase.registerClass('com.yyuap.demo.PlayImageFlipperDynamicControllerBase',UMP.UI.Mvc.ControllerBase);
