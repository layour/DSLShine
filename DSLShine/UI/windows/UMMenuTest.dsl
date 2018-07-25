<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMMenuTest" controller="UMMenuTestController" namespace="com.yyuap.demo">
    <import ref="UMMenuTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="菜单服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">Mobile App</label>
                <div id="panel2" onclick="opendropmenu()">
                    <image id="image0" scaletype="fitcenter" src="icon_menushow.png"/> 
                </div> 
            </div>
            <div id="panel3">
                <label id="label2">点击右上角的菜单按钮</label>
                <label id="label3">展开浮动菜单</label> 
            </div> 
        </div> 
    </div> 
</window>
