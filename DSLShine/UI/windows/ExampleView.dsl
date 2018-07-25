<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ExampleView" controller="ExampleViewController" namespace="com.yyuap.demo">
    <import ref="ExampleView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="UM-shine" class="navigatorbarclass">
            <div id="listpanel" onclick="this.back()">
                <image id="image0" scaletype="fitcenter" src="btn_back.png"/> 
            </div>
            <label id="label0" onclick=""/> 
        </navigatorbar>
        <div id="panel1">
            <div id="panel0">
                <div id="mappanel" onclick="openMapView()">
                    <label id="label1">地图</label> 
                </div>
                <div id="touchpanel" onclick="openSwipeView()">
                    <label id="label2">滑动、双击</label> 
                </div> 
            </div>
            <div id="panel6">
                <div id="calpanel" onclick="openCalculatorView()">
                    <label id="label3">计算器</label> 
                </div>
                <div id="panel2">
                    <div id="gamepanel" onclick="openGameView()">
                        <label id="label4">塔防游戏</label> 
                    </div>
                    <div id="timerpanel" onclick="openEgTimerView()">
                        <label id="label5">计时器</label> 
                    </div> 
                </div> 
            </div>
            <div id="panel3">
                <div id="animationpanel" onclick="openAnimaView()">
                    <label id="label7">动画</label> 
                </div>
                <div id="panel4" onclick="openTouchView()">
                    <label id="label6">拖曳</label> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
