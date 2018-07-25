<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PlayImageFlipper" controller="PlayImageFlipperController" namespace="com.yyuap.demo">
    <import ref="PlayImageFlipper.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="画廊" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <imageflipper titleheight="20" id="imageflipper0" descheight="40" interval="2000" onnextflipper="next()" flipperbtnvisible="true" onpreviousflipper="pre()" isloop="true" autoflip="false">
                <imageflipperitem title="" description="" onclick="" src="bz1.png"/>
                <imageflipperitem title="" description="" onclick="" src="bz2.png"/>
                <imageflipperitem title="" description="" onclick="" src="bz3.png"/>
                <imageflipperitem title="" description="" onclick="" src="bz4.png"/>
                <imageflipperitem title="" description="" onclick="" src="bz5.png"/> 
            </imageflipper> 
        </div> 
    </div> 
</window>
