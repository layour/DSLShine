<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerView" controller="ControllerViewController" namespace="com.yyuap.demo">
    <import ref="ControllerView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="UM-shine" class="navigatorbarclass">
            <div id="panel4" onclick="this.back()">
                <image id="image0" scaletype="fitcenter" src="btn_back.png"/> 
            </div>
            <label id="label0" onclick=""/> 
        </navigatorbar>
        <div id="panel1">
            <listView bindfield="controllerdetails" id="listviewdefine0" onload="this.listload()" onItemClick="this.rowclick()">
                <div id="panel0">
                    <div id="panel2">
                        <div id="panel6">
                            <div id="panel5">
                                <image id="image2" scaletype="fitcenter" src="tool_fav.png"/> 
                            </div>
                            <div id="panel7">
                                <label bindfield="name" id="label1">name</label>
                                <label bindfield="detail" id="label2">detail</label> 
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
