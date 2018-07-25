//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMSQLiteTestControllerBase');
com.yyuap.demo.UMSQLiteTestControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "UMSQLiteTestController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.UMSQLiteTestControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.UMSQLiteTestControllerBase.prototype = {
};
com.yyuap.demo.UMSQLiteTestControllerBase.registerClass('com.yyuap.demo.UMSQLiteTestControllerBase',UMP.UI.Mvc.ControllerBase);
