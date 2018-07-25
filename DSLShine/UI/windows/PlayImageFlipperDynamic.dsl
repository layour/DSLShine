<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PlayImageFlipperDynamic" controller="PlayImageFlipperDynamicController" namespace="com.yyuap.demo">
    <import ref="PlayImageFlipperDynamic.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="画廊 - 动态加载" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="back()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <imageflipper titleheight="20" id="imageflipper0" bindfield="imagedetails" descheight="40" interval="2000" onload="loadimage()" onnextflipper="next()" flipperbtnvisible="false" onpreviousflipper="pre()" onclick="imageclick()" isloop="false" autoflip="true">
            <imageflipperitem id="imageflipper0_0" title="标题" description="" src=""/>
            <imageflipperitem id="imageflipper0_1" title="标题" description="" src=""/>
            <imageflipperitem id="imageflipper0_2" title="标题" description="" src=""/> 
        </imageflipper> 
    </div> 
</window>
