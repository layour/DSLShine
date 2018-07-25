//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PlayRecoderControllerBase');
com.yyuap.demo.PlayRecoderControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PlayRecoderController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PlayRecoderControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PlayRecoderControllerBase.prototype = {
};
com.yyuap.demo.PlayRecoderControllerBase.registerClass('com.yyuap.demo.PlayRecoderControllerBase',UMP.UI.Mvc.ControllerBase);
