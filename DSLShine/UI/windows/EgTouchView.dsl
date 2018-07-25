<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgTouchView" controller="EgTouchViewController" namespace="com.yyuap.demo">
    <import ref="EgTouchView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="拖曳" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0" onintercepttouch="onintertouch()">
            <label id="label1">任意拖动以下控件</label>
            <div id="redpanel" ontouch="touch0()"/>
            <div id="greenpanel" ontouch="touch1()"/>
            <div id="bluepanel" ontouch="touch2()"/> 
        </div> 
    </div> 
</window>
