<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="DivVBoxView" controller="DivVBoxViewController" namespace="com.yyuap.demo">
    <import ref="DivVBoxView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="VBOX布局" class="navigatorbarclass">
            <image id="btn_back" onclick="this.btn_back_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel3">
                <div id="panel2">
                    <label id="label1">默认排列</label>
                    <div id="panel1"/>
                    <input id="button0" value="按钮1" class="textbtnclass" type="button"/>
                    <input id="button2" value="按钮2" class="textbtnclass" type="button"/> 
                </div>
                <div id="panel4">
                    <label id="label2">设置权重</label>
                    <div id="panel5"/>
                    <input id="button3" value="权重=1" class="textbtnclass" type="button"/>
                    <input id="button4" value="未设置" class="textbtnclass" type="button"/> 
                </div> 
            </div>
            <div id="panel6">
                <div id="panel7">
                    <label id="label3">设置权重</label>
                    <div id="panel8"/>
                    <input id="button5" value="权重=1" class="textbtnclass" type="button"/>
                    <input id="button6" value="权重=1" class="textbtnclass" type="button"/>
                    <input id="button1" value="权重=1" class="textbtnclass" type="button"/> 
                </div>
                <div id="panel9">
                    <label id="label4">设置权重</label>
                    <div id="panel10"/>
                    <input id="button8" value="权重=2" class="textbtnclass" type="button"/>
                    <input id="button9" value="未设置" class="textbtnclass" type="button"/>
                    <input id="button7" value="未设置" class="textbtnclass" type="button"/> 
                </div> 
            </div>
            <div id="panel11"/> 
        </div> 
    </div> 
</window>
