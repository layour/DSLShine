//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerGroupListViewControllerBase');
com.yyuap.demo.ControllerGroupListViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerGroupListViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerGroupListViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerGroupListViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerGroupListViewControllerBase.registerClass('com.yyuap.demo.ControllerGroupListViewControllerBase',UMP.UI.Mvc.ControllerBase);
