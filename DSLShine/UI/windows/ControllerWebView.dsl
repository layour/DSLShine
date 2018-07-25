<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerWebView" controller="ControllerWebViewController" namespace="com.yyuap.demo">
    <import ref="ControllerWebView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="网页容器" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <webView id="webview0" autoFit="true" url="http://www.yyuap.com"/> 
        </div> 
    </div> 
</window>
