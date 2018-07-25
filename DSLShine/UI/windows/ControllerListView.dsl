<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerListView" controller="ControllerListViewController" namespace="com.yyuap.demo">
    <import ref="ControllerListView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="普通列表" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel5">
                <listView id="listviewdefine0" bindfield="persons" onuprefersh="uprefersh()" linedelshow="true" ondownrefersh="downrefersh()" onload="this.listload()" onItemClick="this.rowclick()" onitemdelete="itemdelete()">
                    <div id="panel1">
                        <div id="panel2">
                            <div id="panel3">
                                <image id="image0" bindfield="icon" scaletype="fitcenter" src="lss.png"/>
                                <label id="label1" bindfield="name">name</label> 
                            </div>
                            <div id="panel4"/> 
                        </div> 
                    </div> 
                </listView> 
            </div> 
        </div> 
    </div> 
</window>
