<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="CommonView" controller="CommonViewController" namespace="com.yyuap.demo">
    <import ref="CommonView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="Pop对话框" class="navigatorbarclass">
            <image id="image5" onclick="this.image5_onclick()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">POP弹窗</label>
                <div id="panel2">
                    <div id="panel3" onclick="openpopview()">
                        <label id="label2"/>
                        <label id="label3">点我出弹窗</label>
                        <label id="label4"/> 
                    </div>
                    <div id="panel4" onclick="openpopwithbtn()">
                        <label id="label5"/>
                        <label id="label7">关闭</label>
                        <label id="label8"/> 
                    </div> 
                </div>
                <label id="label6">点我出弹窗</label> 
            </div>
            <div id="panel5">
                <label id="label9">对话框</label>
                <div id="panel6">
                    <image id="image0" onclick="openDialog()" scaletype="fitcenter" src="view_dialog.png"/>
                    <image id="image1" onclick="openTwoBtnDialog()" scaletype="fitcenter" src="view_double_dialog.png"/> 
                </div> 
            </div>
            <div id="panel7"/>
            <div id="panel8">
                <input id="imagebutton0" imagebuttontype="icontext" value="音乐" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"/>
                <input id="imagebutton1" value="视频" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"/>
                <input id="imagebutton2" value="录音" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"/> 
            </div>
            <div id="panel9">
                <label id="label10">老人与海等1本书</label>
                <input id="button0" value="删除所选图书" class="textbtnclass" onclick="closepopview()" type="button"/>
                <input id="button1" value="取消" class="textbtnclass" onclick="closepopview()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
