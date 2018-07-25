<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutTelUpdateView" controller="AboutTelUpdateViewController" namespace="com.yyuap.demo">
    <import ref="AboutTelUpdateView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="联系人" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/>
            <label id="label1" onclick="save()">保存</label> 
        </navigatorbar>
        <div id="panel0" onload="panel0_onload()">
            <div id="panel1">
                <image id="image0" scaletype="fitcenter" src="icon_badge.png"/>
                <div id="panel2">
                    <label id="label2">UAP Mobile</label>
                    <label id="label3">用友网络</label> 
                </div> 
            </div>
            <div id="panel3">
                <div id="panel6">
                    <label id="label4">手机</label>
                    <input id="teltextbox" bindfield="" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div> 
            </div>
            <div id="panel4">
                <div id="panel7">
                    <label id="label6">邮箱</label>
                    <input id="mailtextbox" bindfield="" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div> 
            </div>
            <div id="panel5">
                <div id="panel8">
                    <label id="label8">网址</label>
                    <input id="webtextbox" bindfield="" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
