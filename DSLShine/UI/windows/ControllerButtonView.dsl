<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerButtonView" orientation="vertical" controller="ControllerButtonViewController" namespace="com.yyuap.demo">
    <import ref="ControllerButtonView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="按钮" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">普通按钮</label>
                <div id="panel2"/>
                <input id="button1" onlongclick="btnlongclick()" value="长按" class="textbtnclass" onclick="btnclick()" type="button"/> 
            </div>
            <div id="panel3">
                <label id="label2">图片按钮 - 图标+文字</label>
                <div id="panel4"/>
                <tabbar id="tabbar0" value="buttongroup">
                    <tabbaritem id="tabbaritem0" tabbarItemType="icontext" text="我的关注" class="tabitemclass" checked="true"/>
                    <tabbaritem id="tabbaritem1" tabbarItemType="icontext" text="联系人" class="tabitemclass"/>
                    <tabbaritem id="tabbaritem2" tabbarItemType="icontext" text="消息" class="tabitemclass"/>
                    <tabbaritem id="tabbaritem3" tabbarItemType="icontext" text="设置" class="tabitemclass"/>
                    <tabbaritem id="tabbaritem4" tabbarItemType="icontext" text="更多" class="tabitemclass"/> 
                </tabbar>
                <label id="label3">图片按钮 - 图标</label>
                <div id="panel5"/>
                <toolbar id="toolbar0">
                    <input imagebuttontype="icon" id="imagebutton0" istogglebutton="true" class="imagebuttonclass" type="imagebutton" checked="false"/>
                    <input imagebuttontype="icon" id="imagebutton1" istogglebutton="true" class="imagebuttonclass" type="imagebutton" checked="false"/>
                    <input imagebuttontype="icon" id="imagebutton2" istogglebutton="true" class="imagebuttonclass" type="imagebutton" checked="false"/>
                    <input imagebuttontype="icon" id="imagebutton3" istogglebutton="true" class="imagebuttonclass" type="imagebutton" checked="false"/>
                    <input imagebuttontype="icon" id="imagebutton4" istogglebutton="true" class="imagebuttonclass" type="imagebutton" checked="false"/> 
                </toolbar>
                <label id="label4">图片按钮 - 文字</label>
                <toolbar id="toolbar1">
                    <input id="button2" value="收藏" class="toolbartextitem" type="button"/>
                    <label id="label5"/>
                    <input id="button3" value="编辑" class="toolbartextitem" type="button"/>
                    <label id="label6"/>
                    <input id="button4" value="转发" class="toolbartextitem" type="button"/>
                    <label id="label7"/>
                    <input id="button5" value="记录" class="toolbartextitem" type="button"/>
                    <label id="label8"/>
                    <input id="button6" value="删除" class="toolbartextitem" type="button"/> 
                </toolbar> 
            </div> 
        </div> 
    </div> 
</window>
