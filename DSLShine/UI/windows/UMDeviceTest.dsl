<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMDeviceTest" controller="UMDeviceTestController" namespace="com.yyuap.demo">
    <import ref="UMDeviceTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="设备服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2" onclick="openAboutCameraView()">
                    <label id="label1">获取图片</label>
                    <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel3"/>
                <div id="panel4" onclick="openAboutTelView()">
                    <label id="label2">联系人</label>
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel5"/>
                <div id="panel6" onclick="openAboutDeviceView()">
                    <label id="label3">设备信息</label>
                    <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel7"/> 
            </div> 
        </div> 
    </div> 
</window>
