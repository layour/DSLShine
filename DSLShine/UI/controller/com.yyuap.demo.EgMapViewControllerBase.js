//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgMapViewControllerBase');
com.yyuap.demo.EgMapViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "EgMapViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.EgMapViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.EgMapViewControllerBase.prototype = {
};
com.yyuap.demo.EgMapViewControllerBase.registerClass('com.yyuap.demo.EgMapViewControllerBase',UMP.UI.Mvc.ControllerBase);
