<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerProgressView" controller="ControllerProgressViewController" namespace="com.yyuap.demo">
    <import ref="ControllerProgressView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="进度控件" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <label id="label1">进度条：</label>
            <progressbar progress="80" id="progressbar0" max="100"/>
            <label id="label2">滑块：</label>
            <input id="range0" min="0" max="100" type="range" onchange="huakuaiChange()"/> 
        </div> 
    </div> 
</window>
