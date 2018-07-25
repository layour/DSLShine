<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerSelectView" controller="ControllerSelectViewController" namespace="com.yyuap.demo">  
    <import ref="ControllerSelectView.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="选择控件" class="navigatorbarclass"> 
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>  
            <label id="label0"/> 
        </navigatorbar>  
        <div id="panel0"> 
            <div id="panel7"> 
                <label id="label1">开关：</label>  
                <label id="label3">on</label>  
                <switch id="switch1" value="on" onchange="this.switch1_onchange()"/> 
            </div>  
            <div id="panel1"> 
                <label id="label2">开关：</label>  
                <label id="label4">off</label>  
                <switch id="switch0" value="off" onchange="this.switch0_onchange()"/> 
            </div>  
            <div id="panel2"> 
                <label id="label5">复选框：</label>  
                <div id="panel3"> 
                    <input id="checkbox2" type="checkbox" checked="checked" onchange="checkboxchange()"/>  
                    <label id="label6">选择1</label> 
                </div>  
                <div id="panel4"> 
                    <input id="checkbox0" type="checkbox" onchange="checkboxchange()"/>  
                    <label id="label7">选择2</label> 
                </div>  
                <div id="panel5"> 
                    <input id="checkbox1" type="checkbox" onchange="checkboxchange()"/>  
                    <label id="label8">选择3</label> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
