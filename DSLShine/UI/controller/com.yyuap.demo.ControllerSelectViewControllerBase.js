//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerSelectViewControllerBase');
com.yyuap.demo.ControllerSelectViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerSelectViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerSelectViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerSelectViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerSelectViewControllerBase.registerClass('com.yyuap.demo.ControllerSelectViewControllerBase',UMP.UI.Mvc.ControllerBase);
