<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerInputView" orientation="vertical" controller="ControllerInputViewController" namespace="com.yyuap.demo">
    <import ref="ControllerInputView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="输入控件" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <Scrollview id="Scrollview_panel0" margin-right="22" height="fill" vScrollEnabled="always" width="fill" margin-left="22" hScrollEnabled="disabled" margin-top="8">
            <div id="panel0">
                <div id="panel1">
                    <label id="label1">文本：</label>
                    <input id="textbox0" maxlength="256" placeholder="文本输入框" onblur="textblur()" value="你好" onfocus="textfocus()" type="text" onchange="textchange()" oninput="this.oninput()"/> 
                </div>
                <div id="panel2">
                    <label id="label2">数字：</label>
                    <input id="number0" min="-9.99999999E8" precision="0" max="10000.0" roundValue="5" placeholder="1,000.32" value="100" type="number" roundType="value" onchange="digitchange()"/> 
                </div>
                <div id="panel3">
                    <label id="label3">邮箱：</label>
                    <input id="email0" placeholder="UAPMobile@yonyou.com" value="UAPMobile@yonyou.com" type="email" onchange="emailchange()"/> 
                </div>
                <div id="panel4">
                    <label id="label4" onclick="dateclick()">日期：</label>
                    <input id="dateinput0" placeholder="1935年5月29日" value="1935-05-29" format="yyyy年M月d日" type="date" onchange="datechange()"/> 
                </div>
                <div id="panel5">
                    <label id="label5">时间：</label>
                    <input id="timeinput0" placeholder="09:11:40" value="10:27:35" format="HH:mm" type="time" onchange="timechange()"/> 
                </div>
                <div id="panel6">
                    <label id="label6">日期时间：</label>
                    <input id="datetimeinput0" placeholder="2015-01-20 09:11:37" value="2015-01-20 09:11:37" format="yyyy-MM-dd HH:mm:ss" type="datetime" onchange="datetimechange()"/> 
                </div>
                <div id="panel7">
                    <textArea id="textarea0" placeholder="请输入文本内容" onchange="textareachange()">这是一个文本域，可输入多行文本...</textArea> 
                </div>
                <div id="panel8">
                    <textArea id="textarea1" placeholder="这是一个文本域，可输入多行文本..." onchange="textareachange()">为多行文本输入控件设置行间距为15，为多行文本输入控件设置行间距为15，为多行文本输入控件设置行间距为15</textArea> 
                </div> 
            </div>
        </Scrollview> 
    </div> 
</window>
