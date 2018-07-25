<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerImageSelectView" controller="ControllerImageSelectViewController" namespace="com.yyuap.demo">
    <import ref="ControllerImageSelectView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="viewload()">
        <navigatorbar id="navigatorbar0" title="图片选择器" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/>
            <div id="panel2" onclick="openImageSelectView()">
                <label id="label2" onclick="selectcomplete()">完成</label> 
            </div> 
        </navigatorbar>
        <div id="panel0">
            <input id="button1" value="打开相机" class="textbtnclass" onclick="openCamera()" type="button"/>
            <imageselector id="imageselector0"/> 
        </div> 
    </div> 
</window>
