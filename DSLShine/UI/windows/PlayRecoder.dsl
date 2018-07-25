<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PlayRecoder" controller="PlayRecoderController" namespace="com.yyuap.demo">  
    <import ref="PlayRecoder.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="录音" class="navigatorbarclass"> 
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>  
            <label id="label0"/> 
        </navigatorbar>  
        <div id="panel0"> 
            <recorder id="recorder0" out="test"/>  
            <audio id="audio0" play="play" autoplay="autoplay"/>  
            <div id="panel1"> 
                <input id="button0" value="播放录音" class="textbtnclass" onclick="playrecoder()" type="button"/>  
                <input id="button1" value="停止播放" class="textbtnclass" onclick="stoprecoder()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
