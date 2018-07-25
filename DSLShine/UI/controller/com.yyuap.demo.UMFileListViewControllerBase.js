//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMFileListViewControllerBase');
com.yyuap.demo.UMFileListViewControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMFileListViewController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMFileListViewControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMFileListViewControllerBase.prototype = {
};
com.yyuap.demo.UMFileListViewControllerBase.registerClass('com.yyuap.demo.UMFileListViewControllerBase',UMP.UI.Mvc.ControllerBase);
