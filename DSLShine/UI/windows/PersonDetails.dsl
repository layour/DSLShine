<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PersonDetails" controller="PersonDetailsController" namespace="com.yyuap.demo">
    <import ref="PersonDetails.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="dataload()">
        <navigatorbar id="navigatorbar0" title="页面传值" class="navigatorbarclass">
            <image id="btn_back" onclick="this.back()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panelsys0">
                <div id="panel1">
                    <label id="label2">*</label>
                    <label id="label3">名称</label>
                    <input id="textbox0" bindfield="name" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div>
                <div id="panel2">
                    <label id="label4">*</label>
                    <label id="label5">电话</label>
                    <input id="textbox1" bindfield="phone" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div>
                <div id="panel3">
                    <label id="label6">*</label>
                    <label id="label7">性别</label>
                    <input id="textbox2" bindfield="sex" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div>
                <div id="panel4">
                    <label id="label8">*</label>
                    <label id="label9">年龄</label>
                    <input id="textbox3" bindfield="age" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div>
                <div id="panel5">
                    <label id="label10">*</label>
                    <label id="label11">邮箱</label>
                    <input id="textbox4" bindfield="email" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
