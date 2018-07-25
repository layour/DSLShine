<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="EgCalView" controller="EgCalViewController" namespace="com.yyuap.demo">
    <import ref="EgCalView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="计算器" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2">
                    <input id="btn0" value="0" class="textbtnclass" onclick="btn0_onclick()" type="button"/>
                    <input id="btn2" value="2" class="textbtnclass" onclick="btn2_onclick()" type="button"/>
                    <input id="btncheng" value="X" class="textbtnclass" onclick="btncheng_onclick()" type="button"/>
                    <input id="btndeng" class="textbtnclass" onclick="btndeng_onclick()" type="button"/>
                    <input id="btnjia" value="+" class="textbtnclass" onclick="btnjia_onclick()" type="button"/>
                    <input id="btnjian" value="-" class="textbtnclass" onclick="btnjian_onclick()" type="button"/>
                    <input id="btn9" value="9" class="textbtnclass" onclick="btn9_onclick()" type="button"/>
                    <div id="panel3">
                        <label id="labelV"/>
                        <image id="imgResult" scaletype="fitcenter" src="a0.png"/> 
                    </div>
                    <input id="btn4" value="4" class="textbtnclass" onclick="btn4_onclick()" type="button"/>
                    <input id="btn7" value="7" class="textbtnclass" onclick="btn7_onclick()" type="button"/>
                    <input id="btn8" value="8" class="textbtnclass" onclick="btn8_onclick()" type="button"/>
                    <input id="btn5" value="5" class="textbtnclass" onclick="btn5_onclick()" type="button"/>
                    <input id="btndian" value="." class="textbtnclass" onclick="btndian_onclick()" type="button"/>
                    <input id="btn6" value="6" class="textbtnclass" onclick="btn6_onclick()" type="button"/>
                    <input id="btn3" value="3" class="textbtnclass" onclick="btn3_onclick()" type="button"/>
                    <input id="btn1" value="1" class="textbtnclass" onclick="btn1_onclick()" type="button"/> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
