<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerLineChart" controller="ControllerLineChartController" namespace="com.yyuap.demo">
    <import ref="ControllerLineChart.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="折线图" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <umchartview id="chartview0" bindField="charViewData" appearanceName="chameleon" dockStyleName="bottom" onload="linechartloaddata()" paletteName="apex" type="UFChartSeriesViewLine"/> 
        </div> 
    </div> 
</window>
