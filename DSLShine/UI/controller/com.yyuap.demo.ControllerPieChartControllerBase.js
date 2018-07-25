//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerPieChartControllerBase');
com.yyuap.demo.ControllerPieChartControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerPieChartController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerPieChartControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerPieChartControllerBase.prototype = {
};
com.yyuap.demo.ControllerPieChartControllerBase.registerClass('com.yyuap.demo.ControllerPieChartControllerBase',UMP.UI.Mvc.ControllerBase);
