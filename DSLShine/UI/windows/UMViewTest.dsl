<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMViewTest" controller="UMViewTestController" namespace="com.yyuap.demo">
    <import ref="UMViewTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="页面服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.back()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1" onclick="openCallback()">
                <label id="label1">页面传值</label>
                <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel2"/>
            <div id="panel3" onclick="openCommonView()">
                <label id="label2">Pop 对话框</label>
                <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel4"/>
            <div id="panel5" onclick="openViewWithAnimation()">
                <label id="label3">窗口动画</label>
                <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel6"/> 
        </div> 
    </div> 
</window>
