<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerDivView" controller="ControllerDivViewController" namespace="com.yyuap.demo">
    <import ref="ControllerDivView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="布局介绍" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2" onclick="openVBox()">
                    <label id="label1">VBOX布局</label>
                    <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel3"/>
                <div id="panel4" onclick="openHBox()">
                    <label id="label2">HBOX布局</label>
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel5"/>
                <div id="panel6" onclick="openRelative()">
                    <label id="label3">RELATIVE布局</label>
                    <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel7"/>
                <div id="panel8" onclick="openComplex()">
                    <label id="label4">混合布局</label>
                    <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel9"/> 
            </div> 
        </div> 
    </div> 
</window>
