<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ListWithItemcreate" controller="ListWithItemcreateController" namespace="com.yyuap.demo">
    <import ref="ListWithItemcreate.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="列表onitemcreate" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <listView id="listviewdefine0" bindfield="list" onload="this.listviewdefine0_onload()" onitemcreate="itemcreate()">
            <div id="panel0">
                <div id="panel1">
                    <label id="label1" bindfield="name">label</label> 
                </div>
                <div id="panel2"/> 
            </div> 
        </listView> 
    </div> 
</window>
