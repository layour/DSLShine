//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerListViewTestControllerBase');
com.yyuap.demo.ControllerListViewTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerListViewTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerListViewTestControllerBase.prototype = {
};
com.yyuap.demo.ControllerListViewTestControllerBase.registerClass('com.yyuap.demo.ControllerListViewTestControllerBase',UMP.UI.Mvc.ControllerBase);
