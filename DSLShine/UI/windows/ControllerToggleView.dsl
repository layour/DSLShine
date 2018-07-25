<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerToggleView" controller="ControllerToggleViewController" namespace="com.yyuap.demo">
    <import ref="ControllerToggleView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="多页切换" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <toggleButtonGroup id="togglebuttongroup1" value="buttongroup" onchange="togglebtnchange()">
                <toggleButton id="togglebutton3" value="0" textOff="页面1" textOn="页面1" type="button" checked="true"/>
                <toggleButton id="togglebutton4" value="1" textOff="页面2" textOn="页面2" type="button"/>
                <toggleButton id="togglebutton5" value="2" textOff="页面3" textOn="页面3" type="button"/> 
            </toggleButtonGroup>
            <flipper id="flipperdefine0" onnextflipper="next()" onpreviousflipper="previous()" viewindex="0">
                <div id="panel1" title="页面1">
                    <div id="panel3">
                        <label id="label1">1</label> 
                    </div> 
                </div>
                <div id="panel2" title="页面2">
                    <div id="panel5">
                        <label id="label2">2</label> 
                    </div> 
                </div>
                <div id="panel4" title="页面3">
                    <div id="panel6">
                        <label id="label3">3</label> 
                    </div> 
                </div> 
            </flipper> 
        </div> 
    </div> 
</window>
