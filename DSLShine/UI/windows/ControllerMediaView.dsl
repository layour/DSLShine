<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerMediaView" controller="ControllerMediaViewController" namespace="com.yyuap.demo">
    <import ref="ControllerMediaView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="多媒体" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2" onclick="playaudioview()">
                    <image id="image0" scaletype="fitcenter" src="icon_audioimg.png"/>
                    <label id="label1">音频</label> 
                </div>
                <div id="panel3" onclick="playvideoview()">
                    <image id="image1" scaletype="fitcenter" src="icon_videoimg.png"/>
                    <label id="label2">视频</label> 
                </div> 
            </div>
            <div id="panel4">
                <div id="panel5" onclick="playrecoderview()">
                    <image id="image2" scaletype="fitcenter" src="icon_recoderimg.png"/>
                    <label id="label3">录音</label> 
                </div>
                <div id="panel6" onclick="openimageflipper()">
                    <image id="image3" scaletype="fitcenter" src="icon_imgflipper.png"/>
                    <label id="label4">画廊</label> 
                </div> 
            </div>
            <div id="panel7" onclick="openImageflipperDy()">
                <image id="image4" scaletype="fitcenter" src="icon_imgflipper.png"/>
                <label id="label5">画廊 - 动态加载</label> 
            </div> 
        </div> 
    </div> 
</window>
