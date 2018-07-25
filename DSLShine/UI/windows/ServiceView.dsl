<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ServiceView" controller="ServiceViewController" namespace="com.yyuap.demo">
    <import ref="ServiceView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="UM-shine" class="navigatorbarclass">
            <div id="panel4" onclick="this.back()">
                <image id="image0" scaletype="fitcenter" src="btn_back.png"/> 
            </div>
            <label id="label0" onclick=""/> 
        </navigatorbar>
        <div id="panel1">
            <listView id="listviewdefine0" bindfield="servicedetails" onload="this.listload()" onItemClick="this.rowclick()">
                <div id="panel0">
                    <div id="panel2">
                        <div id="panel6">
                            <div id="panel5">
                                <image id="image2" scaletype="fitcenter" src="tool_fav.png"/> 
                            </div>
                            <div id="panel7">
                                <label id="label1" bindfield="name">name</label>
                                <label id="label2" bindfield="detail">detail</label> 
                            </div>
                            <div id="panel8">
                                <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                            </div> 
                        </div> 
                    </div>
                    <div id="panel3"/> 
                </div> 
            </listView> 
        </div> 
    </div> 
</window>
