<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgAnimationView" controller="EgAnimationViewController" namespace="com.yyuap.demo">
    <import ref="EgAnimationView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="动画" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <input id="button1" value="开始动画" class="textbtnclass" onclick="startAnimation()" type="button"/>
                <input id="button2" value="停止动画" class="textbtnclass" onclick="stopAnimation()" type="button"/> 
            </div>
            <div id="orange"/>
            <div id="blue"/> 
        </div> 
    </div> 
</window>
