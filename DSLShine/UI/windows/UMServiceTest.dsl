<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMServiceTest" controller="UMServiceTestController" namespace="com.yyuap.demo">
    <import ref="UMServiceTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="服务器服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1" onclick="openHttpView()">
                <label id="label1">HTTP相关</label>
                <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel2"/>
            <div id="panel3" onclick="openServerView()">
                <label id="label2">服务器相关</label>
                <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel4"/>
            <div id="panel5" onclick="getResString()">
                <label id="label3">多语信息</label> 
            </div>
            <div id="panel6"/> 
        </div> 
    </div> 
</window>
