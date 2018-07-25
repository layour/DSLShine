//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerListViewControllerBase');
com.yyuap.demo.ControllerListViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerListViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerListViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerListViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerListViewControllerBase.registerClass('com.yyuap.demo.ControllerListViewControllerBase',UMP.UI.Mvc.ControllerBase);
