<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ChartTest" controller="ChartTestController" namespace="com.yyuap.demo">
    <import ref="ChartTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <Scrollview id="Scrollview_viewPage0" height="fill" width="fill" hScrollEnabled="disabled">
        <div id="viewPage0">
            <navigatorbar id="navigatorbar0" title="第三方图表" class="navigatorbarclass">
                <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
                <label id="label0"/> 
            </navigatorbar>
            <label id="label2">echart</label>
            <web:echarts id="webcontrol1" startpage="index.html"/> 
        </div>
    </Scrollview> 
</window>
