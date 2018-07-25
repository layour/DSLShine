<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AboutTelView" controller="AboutTelViewController" namespace="com.yyuap.demo">
    <import ref="AboutTelView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="联系人" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/>
            <label id="label1" onclick="this.edit()">编辑</label> 
        </navigatorbar>
        <div id="panel0">
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
                    <label id="phonenumlabel" bindfield="">10086</label> 
                </div>
                <div id="panel9" onclick="sendMessage()">
                    <image id="sendMsgBtn" scaletype="fitcenter" src="icon_message.png"/> 
                </div>
                <div id="panel10" onclick="callPhone()">
                    <image id="callphoneBtn" scaletype="fitcenter" src="icon_callphone.png"/> 
                </div> 
            </div>
            <div id="panel4">
                <div id="panel7">
                    <label id="label6">邮箱</label>
                    <label id="mailboxlabel" bindfield="">duss@yonyou.com</label> 
                </div>
                <div id="panel11" onclick="sendEmail()">
                    <image id="sendEmailBtn" scaletype="fitcenter" src="icon_sendemail.png"/> 
                </div> 
            </div>
            <div id="panel5">
                <div id="panel8">
                    <label id="label8">网址</label>
                    <label id="weburllabel" bindfield="">http://www.yyuap.com</label> 
                </div>
                <div id="panel12" onclick="openwebview()">
                    <image id="gotoWebBtn" scaletype="fitcenter" src="icon_brower.png"/> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
