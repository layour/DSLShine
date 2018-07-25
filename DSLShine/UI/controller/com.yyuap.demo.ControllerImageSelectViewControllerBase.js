//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerImageSelectViewControllerBase');
com.yyuap.demo.ControllerImageSelectViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerImageSelectViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerImageSelectViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerImageSelectViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerImageSelectViewControllerBase.registerClass('com.yyuap.demo.ControllerImageSelectViewControllerBase',UMP.UI.Mvc.ControllerBase);
