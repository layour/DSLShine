<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerSlideview" controller="ControllerSlideviewController" namespace="com.yyuap.demo">
    <import ref="ControllerSlideview.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.slidingnoscroll()">
        <navigatorbar id="navigatorbar0" title="抽屉" class="navigatorbarclass">
            <input id="backbtn" onclick="this.backbtn_onclick()" class="ngbbuttonclass" type="button"/>
            <label id="titlelabel"/>
            <image id="openrightimage" onclick="openrightview()" scaletype="fitcenter" src="icon_database.png"/> 
        </navigatorbar>
        <slidingView id="slidingviewdefine0" slidingleft-width="280" mainView="panel_main" slidingright-width="280" leftView="panel_left" rightView="panel_right">
            <div id="panel_main" title="标题1">
                <div id="panel18"/>
                <listView id="listviewdefine0" bindfield="listdetails" onload="dataload()" onitemclick="itemclick()">
                    <div id="panel0">
                        <div id="panel1">
                            <image id="image0" bindfield="icon" scaletype="fitcenter" src="btn_fav.png"/>
                            <div id="panel3">
                                <label id="label1" bindfield="name">label</label>
                                <label id="label2" bindfield="detail">label</label> 
                            </div>
                            <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                        </div>
                        <div id="panel2"/> 
                    </div> 
                </listView>
                <div id="panel19"/>
                <tabbar id="tabbar1">
                    <tabbaritem id="tabbaritem4" tabbarItemType="icontext" text="我的" class="tabitemclass" checked="true"/>
                    <tabbaritem id="tabbaritem5" tabbarItemType="icontext" text="财富" class="tabitemclass"/>
                    <tabbaritem id="tabbaritem6" tabbarItemType="icontext" text="生活" class="tabitemclass"/>
                    <tabbaritem id="tabbaritem7" tabbarItemType="icontext" text="助手" class="tabitemclass"/> 
                </tabbar> 
            </div>
            <div id="panel_right" title="标题2">
                <div id="panel4">
                    <div id="panel5"/>
                    <label id="label3">点击登录</label>
                    <div id="panel7"/>
                    <div id="panel8">
                        <image id="image3" scaletype="fitcenter" src="tab_contact.png"/>
                        <label id="label4">账户信息</label> 
                    </div>
                    <div id="panel9"/>
                    <div id="panel10">
                        <image id="image4" scaletype="fitcenter" src="tab_push.png"/>
                        <label id="label5">最新公告</label> 
                    </div>
                    <div id="panel11"/>
                    <div id="panel12">
                        <image id="image5" scaletype="fitcenter" src="tab_share.png"/>
                        <label id="label6">我要分享</label> 
                    </div>
                    <div id="panel13"/>
                    <div id="panel14">
                        <image id="image6" scaletype="fitcenter" src="tab_sign_post.png"/>
                        <label id="label7">关于</label> 
                    </div>
                    <div id="panel15"/>
                    <div id="panel16"/>
                    <div id="panel17">
                        <image id="image7" onclick="setting()" scaletype="fitcenter" src="tool_setting.png"/>
                        <label id="label8" onclick="setting()">设置</label>
                        <label id="label9">© 南粤银行</label> 
                    </div> 
                </div> 
            </div>
            <div id="panel_left" title="标题3">
                <label id="label0">左视图</label> 
            </div> 
        </slidingView> 
    </div> 
</window>
