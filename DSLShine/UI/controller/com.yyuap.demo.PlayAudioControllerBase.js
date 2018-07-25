//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.PlayAudioControllerBase');
com.yyuap.demo.PlayAudioControllerBase = function() {
    //Step 1：inherit the base class
    var args = {
        "context" : "",
        "controller" : "PlayAudioController",
        "namespace" : "com.yyuap.demo"
    };
    com.yyuap.demo.PlayAudioControllerBase.initializeBase(this,[args]);
}
com.yyuap.demo.PlayAudioControllerBase.prototype = {
};
com.yyuap.demo.PlayAudioControllerBase.registerClass('com.yyuap.demo.PlayAudioControllerBase',UMP.UI.Mvc.ControllerBase);
