<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutServerView" controller="AboutServerViewController" namespace="com.yyuap.demo">
    <import ref="AboutServerView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="服务器相关" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">host:</label>
                <input id="host" maxlength="256" placeholder="请输入服务器IP" value="10.2.112.66" type="text"/> 
            </div>
            <div id="panel2">
                <label id="label2">port:</label>
                <input id="port" maxlength="256" placeholder="请输入服务器端口号" value="9090" type="text"/> 
            </div>
            <div id="panel3">
                <input id="button0" value="访问服务器" class="textbtnclass" onclick="this.button0_onclick()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
