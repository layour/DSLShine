<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PlayVideo" controller="PlayVideoController" namespace="com.yyuap.demo">
    <import ref="PlayVideo.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="视频" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <video id="video0" loop="loop" src="#{element.assetpath}/emusic.mp4" autoplay="autoplay"/> 
        </div> 
    </div> 
</window>
