//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerPickerViewControllerBase');
com.yyuap.demo.ControllerPickerViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.ControllerPickerViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.ControllerPickerViewControllerBase.prototype = {
};
com.yyuap.demo.ControllerPickerViewControllerBase.registerClass('com.yyuap.demo.ControllerPickerViewControllerBase',UMP.UI.Mvc.ControllerBase);
