<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutCameraView" onsensorchanged="this.shake()" controller="AboutCameraViewController" namespace="com.yyuap.demo">
    <import ref="AboutCameraView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="获取图片" class="navigatorbarclass">
            <image id="btn_back" onclick="this.back()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/>
            <div id="cameraimgpanel" onclick="openCameraMenu()">
                <image id="capturephotoimg" scaletype="fitcenter" src="icon_image_camera.png"/> 
            </div> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">点击</label>
                <image id="image0" onclick="openCameraMenu()" scaletype="fitcenter" src="icon_image_camera_yl.png"/>
                <label id="label2">获取图片</label> 
            </div>
            <div id="panel2">
                <image id="image_yl" zoom="true" scaletype="fitcenter" src="image_yl.png"/> 
            </div>
            <div id="panel3" onclick="this.shake()">
                <label id="label3">提示：摇一摇截图</label> 
            </div> 
        </div> 
    </div> 
</window>
