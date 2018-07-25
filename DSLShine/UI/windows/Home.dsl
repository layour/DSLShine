<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Home" controller="HomeController" namespace="com.yyuap.demo">
    <import ref="Home.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.onload()">
        <navigatorbar id="navigatorbar0" title="UM-shine" class="navigatorbarclass">
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0" onload="this.panel0_onload()">
            <div id="panel1">
                <div id="panel2" onclick="openControllerView()">
                    <image id="image0" scaletype="fitcenter" src="home_controller.png"/>
                    <label id="label1">控件类</label> 
                </div>
                <div id="panel3" onclick="openServiceView()">
                    <image id="image1" scaletype="fitcenter" src="home_service.png"/>
                    <label id="label2">服务类</label> 
                </div> 
            </div>
            <div id="panel4" onclick="openEgView()">
                <label id="label5"/>
                <image id="image2" scaletype="fitcenter" src="home_eg.png"/>
                <label id="label3">示例类</label>
                <label id="label4"/> 
            </div> 
        </div> 
    </div> 
</window>
