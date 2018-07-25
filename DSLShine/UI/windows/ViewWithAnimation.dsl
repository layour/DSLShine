<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ViewWithAnimation" controller="ViewWithAnimationController" namespace="com.yyuap.demo">
    <import ref="ViewWithAnimation.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <action id="aa" method="UMView.open" iskeep="false" animation-type="Push"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="窗口动画" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <listView id="listviewdefine0" bindfield="animationlist" onload="this.dataload()" onItemClick="this.rowclick()" onpause="aa">
            <div id="panel0">
                <div id="panel1">
                    <label id="label1" bindfield="name">label</label> 
                </div>
                <div id="panel2"/> 
            </div> 
        </listView> 
    </div> 
</window>
