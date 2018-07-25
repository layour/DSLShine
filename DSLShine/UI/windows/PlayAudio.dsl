<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PlayAudio" controller="PlayAudioController" namespace="com.yyuap.demo">
    <import ref="PlayAudio.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="音频" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <audio id="audio0" visible="false" loop="loop" src="#{element.assetpath}/audio/my_sunshine.mp3"/>
            <div id="panel1">
                <input id="button0" value="播放音乐" class="textbtnclass" onclick="playaudio()" type="button"/>
                <input id="button1" value="停止播放" class="textbtnclass" onclick="stopaudio()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
