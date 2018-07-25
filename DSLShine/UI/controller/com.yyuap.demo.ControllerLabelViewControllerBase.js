//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerLabelViewControllerBase');
com.yyuap.demo.ControllerLabelViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerLabelViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerLabelViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerLabelViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerLabelViewControllerBase.registerClass('com.yyuap.demo.ControllerLabelViewControllerBase',UMP.UI.Mvc.ControllerBase);
