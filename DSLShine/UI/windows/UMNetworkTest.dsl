<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMNetworkTest" controller="UMNetworkTestController" namespace="com.yyuap.demo">
    <import ref="UMNetworkTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="网络服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1" onclick="isAvailable()">
                <label id="label1">当前网络状态</label>
                <image id="image0" scaletype="fitcenter" src="icon_isavailable.png"/> 
            </div>
            <div id="panel2" onclick="getNetworkInfor()">
                <label id="label2">网络信息</label>
                <image id="image1" scaletype="fitcenter" src="icon_netinfor.png"/> 
            </div> 
        </div> 
    </div> 
</window>
