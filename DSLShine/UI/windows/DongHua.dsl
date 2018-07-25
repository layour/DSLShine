<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="DongHua" controller="DongHuaController" namespace="com.yyuap.demo">
    <import ref="DongHua.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <Scrollview id="Scrollview_viewPage0" height="fill" vScrollEnabled="always" width="fill" hScrollEnabled="disabled">
        <div id="viewPage0">
            <navigatorbar id="navigatorbar0" title="动画" class="navigatorbarclass">
                <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
                <label id="label0"/>
                <input id="button12" value="重置" class="navigatorbarclass" onclick="this.button12_onclick()" type="button"/> 
            </navigatorbar>
            <div id="panel0">
                <input id="button1" value="移动加速" class="textbtnclass" onclick="this.button1_onclick()" type="button"/>
                <input id="button3" value="渐隐加速" class="textbtnclass" onclick="this.button3_onclick()" type="button"/>
                <input id="button4" value="伸缩加速" class="textbtnclass" onclick="this.button4_onclick()" type="button"/>
                <input id="button16" value="旋转加速" class="textbtnclass" onclick="this.button16_onclick()" type="button"/> 
            </div>
            <div id="panel7">
                <input id="button5" value="移动反弹" class="textbtnclass" onclick="this.button5_onclick()" type="button"/>
                <input id="button10" value="渐隐反弹" class="textbtnclass" onclick="this.button10_onclick()" type="button"/>
                <input id="button14" value="伸缩反弹" class="textbtnclass" onclick="this.button14_onclick()" type="button"/>
                <input id="button17" value="旋转反弹" class="textbtnclass" onclick="this.button17_onclick()" type="button"/> 
            </div>
            <div id="panel8">
                <input id="button2" value="移动减速" class="textbtnclass" onclick="this.button2_onclick()" type="button"/>
                <input id="button13" value="渐隐减速" class="textbtnclass" onclick="this.button13_onclick()" type="button"/>
                <input id="button15" value="伸缩减速" class="textbtnclass" onclick="this.button15_onclick()" type="button"/>
                <input id="button18" value="旋转减速" class="textbtnclass" onclick="this.button18_onclick()" type="button"/> 
            </div>
            <div id="panel1">
                <input id="button6" value="滚雪球" class="textbtnclass" onclick="this.button6_onclick()" type="button"/>
                <input id="button7" value="弹球" class="textbtnclass" onclick="this.button7_onclick()" type="button"/>
                <input id="button8" value="弧线" class="textbtnclass" onclick="this.button8_onclick()" type="button"/>
                <input id="button9" value="一个抛下的小球" class="textbtnclass" onclick="this.button9_onclick()" type="button"/> 
            </div>
            <div id="panel2">
                <div id="panel3"/>
                <div id="panel4"/>
                <div id="panel5"/>
                <input id="button11" value="移动对象" class="textbtnclass" type="button"/>
                <div id="panel6"/> 
            </div> 
        </div>
    </Scrollview> 
</window>
