<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerListViewTest" controller="ControllerListViewTestController" namespace="com.yyuap.demo">
    <import ref="ControllerListViewTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="列表" class="navigatorbarclass">
            <image id="image5" onclick="this.back()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1" onclick="openListView()">
                <label id="label1">普通列表</label>
                <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel2"/>
            <div id="panel3" onclick="openGroupListView()">
                <label id="label2">分组列表</label>
                <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel4"/>
            <div id="panel5" onclick="openListtest()">
                <label id="label3">普通列表 - 自定义左滑事件</label>
                <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel6"/>
            <div id="panel7" onclick="openitemcreatelistview()">
                <label id="label4">普通列表 - onitemcreate</label>
                <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel8"/> 
        </div> 
    </div> 
</window>
