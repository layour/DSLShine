<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerChartView" controller="ControllerChartViewController" namespace="com.yyuap.demo">
    <import ref="ControllerChartView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="图表" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1" onclick="openLineChartView()">
                <label id="label1">折线图</label>
                <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel2"/>
            <div id="panel3" onclick="openPieChartView()">
                <label id="label2">饼图</label>
                <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel4"/>
            <div id="panel5" onclick="openChartView()">
                <label id="label3">第三方图表</label>
                <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
            </div>
            <div id="panel6"/> 
        </div> 
    </div> 
</window>
