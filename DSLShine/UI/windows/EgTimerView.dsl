<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgTimerView" controller="EgTimerViewController" namespace="com.yyuap.demo">
    <import ref="EgTimerView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="计时器" class="navigatorbarclass">
            <image id="image0" onclick="this.image0_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel3"/>
                <image id="image1" scaletype="fitcenter" src="a0.png"/>
                <image id="image2" scaletype="fitcenter" src="a0.png"/>
                <div id="panel4"/> 
            </div>
            <div id="panel5">
                <div id="panel2">
                    <label id="label1">通知内容:</label>
                    <input id="textbox0" maxlength="256" placeholder="文本输入框" type="text"/> 
                </div>
                <input id="timerbtn" value="发送" class="textbtnclass" onclick="this.timerbtn_onclick()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
