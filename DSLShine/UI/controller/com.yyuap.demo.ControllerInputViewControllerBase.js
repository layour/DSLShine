//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerInputViewControllerBase');
com.yyuap.demo.ControllerInputViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerInputViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerInputViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerInputViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerInputViewControllerBase.registerClass('com.yyuap.demo.ControllerInputViewControllerBase',UMP.UI.Mvc.ControllerBase);
