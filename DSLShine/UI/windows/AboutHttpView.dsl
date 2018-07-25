<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutHttpView" controller="AboutHttpViewController" namespace="com.yyuap.demo">
    <import ref="AboutHttpView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="HTTP相关" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">URL:</label>
                <input id="textbox0" maxlength="256" placeholder="文本输入框" value="http://www.dnetzj.com/httpclient/nethomersssearch" type="text"/> 
            </div>
            <input id="getbtn" value="GET请求" class="textbtnclass" onclick="getbtn_onclick()" type="button"/>
            <input id="postbtn" value="POST请求" class="textbtnclass" onclick="postbtn_onclick()" type="button"/> 
        </div> 
    </div> 
</window>
