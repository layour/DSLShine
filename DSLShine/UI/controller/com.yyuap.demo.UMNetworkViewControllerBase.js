//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMNetworkViewControllerBase');
com.yyuap.demo.UMNetworkViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "HomePageWithFlipperController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMNetworkViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMNetworkViewControllerBase.prototype = {
};
com.yyuap.demo.UMNetworkViewControllerBase.registerClass('com.yyuap.demo.UMNetworkViewControllerBase',UMP.UI.Mvc.ControllerBase);
