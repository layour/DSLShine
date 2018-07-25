//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgCalViewControllerBase');
com.yyuap.demo.EgCalViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "EgCalViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgCalViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgCalViewControllerBase.prototype = {
};
com.yyuap.demo.EgCalViewControllerBase.registerClass('com.yyuap.demo.EgCalViewControllerBase',UMP.UI.Mvc.ControllerBase);
