//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutCameraViewControllerBase');
com.yyuap.demo.AboutCameraViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "AboutCameraViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.AboutCameraViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.AboutCameraViewControllerBase.prototype = {
};
com.yyuap.demo.AboutCameraViewControllerBase.registerClass('com.yyuap.demo.AboutCameraViewControllerBase',UMP.UI.Mvc.ControllerBase);
