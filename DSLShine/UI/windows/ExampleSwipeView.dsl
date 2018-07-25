<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ExampleSwipeView" controller="ExampleSwipeViewController" namespace="com.yyuap.demo">
    <import ref="ExampleSwipeView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="滑动双击事件" class="navigatorbarclass">
            <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0" onswipeleft="this.left()" onlongclick="this.longclick()" ondoubletap="this.doubletap()" onswipeup="this.up()" onclick="this.click()" onswipedown="this.down()" onswiperight="this.right()">
            <label id="label1">label</label> 
        </div> 
    </div> 
</window>
