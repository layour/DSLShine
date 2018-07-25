<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgGameView" controller="EgGameViewController" namespace="com.yyuap.demo">
    <import ref="EgGameView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="塔防游戏" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="rounddiv0" panelstyle="round-div">
            <web:h5game id="webcontrol0" startpage="td.html" autoFit="true"/> 
        </div> 
    </div> 
</window>
