//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgTimerViewControllerBase');
com.yyuap.demo.EgTimerViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "EgTimerViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgTimerViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgTimerViewControllerBase.prototype = {
};
com.yyuap.demo.EgTimerViewControllerBase.registerClass('com.yyuap.demo.EgTimerViewControllerBase',UMP.UI.Mvc.ControllerBase);
