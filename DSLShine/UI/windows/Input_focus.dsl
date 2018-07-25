<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Input_focus" controller="Input_focusController" namespace="com.yyuap.demo">
    <import ref="Input_focus.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="输入焦点问题" class="navigatorbarclass">
            <input id="button3" value="返回" class="ngbbuttonclass" onclick="this.button3_onclick()" type="button"/>
            <label id="label2"/> 
        </navigatorbar>
        <input id="textbox0" maxlength="256" placeholder="文本输入框" value="77" type="text"/>
        <input id="number0" min="-9.99999999E8" autofocus="autofocus" precision="2" max="9.99999999E8" roundValue="5" placeholder="1,000.32" value="24.56" type="number" roundType="value"/>
        <input id="email0" placeholder="name@mail.com" value="duss@yonyou.com" type="email"/>
        <input id="textbox1" maxlength="256" placeholder="文本输入框" value="你好" type="text"/>
        <input id="button0" value="切换焦点" class="textbtnclass" onclick="this.button0_onclick()" type="button"/>
        <input id="button1" value="失去焦点" class="textbtnclass" onclick="this.button1_onclick()" type="button"/>
        <input id="button2" value="插入内容" class="textbtnclass" onclick="this.button2_onclick()" type="button"/> 
    </div> 
</window>
