<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgMapView" controller="EgMapViewController" namespace="com.yyuap.demo">
    <import ref="EgMapView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="地图" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <mapView id="mapview0" address="" posY="" posX="" auto="true" city=""/>
            <toolbar id="toolbar0">
                <input id="button0" value="自动定位" class="toolbartextitem" onclick="autoclick()" type="button"/>
                <label id="label1"/>
                <input id="button1" value="设置位置" class="toolbartextitem" onclick="positionclick()" type="button"/>
                <label id="label2"/>
                <input id="button2" value="热点位置" class="toolbartextitem" onclick="aroundclick()" type="button"/> 
            </toolbar> 
        </div> 
    </div> 
</window>
