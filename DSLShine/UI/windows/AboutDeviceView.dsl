<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutDeviceView" controller="AboutDeviceViewController" namespace="com.yyuap.demo">
    <import ref="AboutDeviceView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="设备相关" class="navigatorbarclass">
            <image id="image5" onclick="this.back()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel4" onclick="getTimeZoneInfor()">
                    <image id="image0" scaletype="fitcenter" src="icon_timezone.png"/>
                    <label id="label1">当前时区</label> 
                </div>
                <div id="panel5" onclick="getLocationInfor()">
                    <image id="image1" scaletype="fitcenter" src="icon_locationinfor.png"/>
                    <label id="label2">当前位置</label> 
                </div> 
            </div>
            <div id="panel2">
                <div id="panel6" onclick="getInternalMemInfor()">
                    <image id="image2" scaletype="fitcenter" src="icon_devicemem.png"/>
                    <label id="label3">内部存储信息</label> 
                </div>
                <div id="panel7" onclick="getExternalMemInfor()">
                    <image id="image3" scaletype="fitcenter" src="icon_deviceinfo.png"/>
                    <label id="label4">外部存储信息</label> 
                </div> 
            </div>
            <div id="panel3" onclick="getDeviceInfor()">
                <image id="image4" scaletype="fitcenter" src="icon_deviceparams.png"/>
                <label id="label5">设备参数</label> 
            </div> 
        </div> 
    </div> 
</window>
