//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerChartViewControllerBase');
com.yyuap.demo.ControllerChartViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerChartViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerChartViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerChartViewControllerBase.registerClass('com.yyuap.demo.ControllerChartViewControllerBase',UMP.UI.Mvc.ControllerBase);
