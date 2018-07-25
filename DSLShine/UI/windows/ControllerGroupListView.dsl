<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerGroupListView" controller="ControllerGroupListViewController" namespace="com.yyuap.demo">
    <import ref="ControllerGroupListView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="分组列表" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.back()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <listView id="listviewdefine0" bindfield="source,row" list-type="group" linedelshow="true" onload="this.listviewdefine0_onload()" onitemclick="this.rowclick()" isshrinklist="true">
                <div id="panel1">
                    <label id="label1" bindfield="title">label</label> 
                </div>
                <div id="panel2">
                    <label id="label2" bindfield="title">label</label> 
                </div> 
            </listView> 
        </div> 
    </div> 
</window>
