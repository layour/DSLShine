<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AddUser" controller="AddUserController" namespace="com.yyuap.demo">
    <import ref="AddUser.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="增加用户" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/>
            <input id="button1" value="确定" class="textbtnclass" onclick="this.button1_onclick()" type="button"/> 
        </navigatorbar>
        <listView id="listviewdefine0" bindfield="listdetails" onload="this.listviewdefine0_onload()" onitemclick="this.rowclick()">
            <div id="panel0">
                <div id="panel1">
                    <image id="image0" bindfield="photo" scaletype="fitcenter" src="picture"/>
                    <div id="panel2">
                        <label id="label1" bindfield="name" onclick="this.label1_onclick()">label</label>
                        <label id="label2" bindfield="phone">label</label>
                        <label id="label3" bindfield="group">label</label> 
                    </div>
                    <input id="checkbox0" bindfield="select" onclick="this.onclick()" type="checkbox"/> 
                </div> 
            </div> 
        </listView> 
    </div> 
</window>
