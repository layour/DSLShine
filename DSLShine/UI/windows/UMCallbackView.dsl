<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMCallbackView" controller="UMCallbackViewController" namespace="com.yyuap.demo">
    <import ref="UMCallbackView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="页面传值" class="navigatorbarclass">
            <image id="image5" onclick="this.back()" scaletype="fitcenter" src="btn_back.png"/>
            <label id="label0"/>
            <div id="panel10" onclick="save()">
                <label id="label6">保存</label> 
            </div> 
        </navigatorbar>
        <listView id="listviewdefine0" bindfield="persons" onload="this.dataload()" onItemClick="this.rowclick()">
            <div id="panel0">
                <div id="panel1">
                    <div id="panel3">
                        <image id="image0" scaletype="fitcenter" src="lss.png"/> 
                    </div>
                    <div id="panel4">
                        <div id="panel5">
                            <div id="panel8">
                                <label id="label1" bindfield="name">label</label> 
                            </div>
                            <div id="panel7">
                                <label id="label2" bindfield="phone">label</label> 
                            </div>
                            <div id="panel9">
                                <label id="label3" bindfield="sex">label</label>
                                <label id="label4" bindfield="age">label</label>
                                <label id="label5" bindfield="email" onclick="">label</label> 
                            </div> 
                        </div>
                        <div id="panel6">
                            <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div> 
                </div>
                <div id="panel2"/> 
            </div> 
        </listView> 
    </div> 
</window>
