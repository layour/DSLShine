<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMBadgeTest" controller="UMBadgeTestController" namespace="com.yyuap.demo">
    <import ref="UMBadgeTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="标记服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <input id="button1" value="左上" class="textbtnclass" onclick="btn_topleftclick()" type="button"/>
                <label id="label1"/>
                <input id="button2" value="右上" class="textbtnclass" onclick="btn_toprightclick()" type="button"/> 
            </div>
            <div id="panel2">
                <label id="label2"/>
                <image id="image0" scaletype="fitcenter" src="icon_badge.png"/>
                <label id="label3"/> 
            </div>
            <div id="panel3">
                <input id="button3" value="左下" class="textbtnclass" onclick="btn_bottomleftclick()" type="button"/>
                <label id="label4"/>
                <input id="button4" value="右下" class="textbtnclass" onclick="btn_bottomrightclick()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
