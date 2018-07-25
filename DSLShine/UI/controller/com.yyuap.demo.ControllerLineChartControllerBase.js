//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerLineChartControllerBase');
com.yyuap.demo.ControllerLineChartControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "ControllerLineChartController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerLineChartControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerLineChartControllerBase.prototype = {
};
com.yyuap.demo.ControllerLineChartControllerBase.registerClass('com.yyuap.demo.ControllerLineChartControllerBase',UMP.UI.Mvc.ControllerBase);
