<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerPickerView" controller="ControllerPickerViewController" namespace="com.yyuap.demo">
    <import ref="ControllerPickerView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="滚动选择器" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <Scrollview id="Scrollview_rounddiv0" height="fill" vScrollEnabled="always" width="fill" hScrollEnabled="disabled">
                <div id="rounddiv0" panelstyle="round-div">
                    <div id="panel1">
                        <label id="label1">三个选项</label>
                        <input id="button0" value="点击弹出" class="textbtnclass" onclick="openthreepicker()" type="button"/> 
                    </div>
                    <div id="panel2">
                        <label id="label2">两个选项</label>
                        <input id="button1" value="点击弹出" class="textbtnclass" onclick="opentwopicker()" type="button"/> 
                    </div>
                    <div id="panel3">
                        <label id="label3">一个选项</label>
                        <input id="button2" value="点击弹出" class="textbtnclass" onclick="openonepicker()" type="button"/> 
                    </div>
                    <label id="datelabel">选择的日期:</label>
                    <input id="datepicker0" month="1" year="2015" day="27" type="datepicker" onchange="datepickerchange()"/>
                    <label id="timelabel">选择的时间:</label>
                    <input id="timepicker0" minute="3" hour="17" type="timepicker" onchange="timepickerchange()"/> 
                </div>
            </Scrollview> 
        </div> 
    </div> 
</window>
