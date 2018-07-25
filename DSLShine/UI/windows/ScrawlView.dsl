<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ScrawlView" controller="ScrawlViewController" namespace="com.yyuap.demo">
    <import ref="ScrawlView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.onload()">
        <navigatorbar id="navigatorbar0" title="涂鸦" class="navigatorbarclass">
            <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/>
            <input id="button2" value="切换" class="textbtnclass" onclick="this.button2_onclick()" type="button"/>
            <input id="button1" value="查看" class="textbtnclass" onclick="this.button1_onclick()" type="button"/> 
        </navigatorbar>
        <drawdiv id="panel0" scaletype="fitcenter" paint-color="#00ff00" out="scrawimage/newpage.png"/>
        <image id="image0" scaletype="fitcenter" src="picture"/> 
    </div> 
</window>
