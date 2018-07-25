//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PersonDetailsControllerBase');
com.yyuap.demo.PersonDetailsControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PersonDetailsController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PersonDetailsControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PersonDetailsControllerBase.prototype = {
};
com.yyuap.demo.PersonDetailsControllerBase.registerClass('com.yyuap.demo.PersonDetailsControllerBase',UMP.UI.Mvc.ControllerBase);
