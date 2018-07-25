<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMPushTest" controller="UMPushTestController" namespace="com.yyuap.demo">
    <import ref="UMPushTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="推送服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <input id="button1" value="注册" class="textbtnclass" onclick="upushregister()" type="button"/>
                <input id="button2" value="注销" class="textbtnclass" onclick="upushunregister()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
