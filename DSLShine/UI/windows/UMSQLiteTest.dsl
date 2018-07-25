<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMSQLiteTest" controller="UMSQLiteTestController" namespace="com.yyuap.demo">
    <import ref="UMSQLiteTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="数据库服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <input id="imagebutton0" value="新增" istogglebutton="false" class="imagebuttonclass" onclick="insert()" type="imagebutton" checked="false"/>
                <input id="imagebutton1" value="清空" istogglebutton="false" class="imagebuttonclass" onclick="clear()" type="imagebutton" checked="false"/> 
            </div>
            <search id="search0" placeholder="搜索学校名称" localstorage="true" keyword="" onsearch="select()"/>
            <div id="panel3"/>
            <div id="panel2">
                <label id="label1">姓名</label>
                <label id="label2"/>
                <label id="label3">学校</label> 
            </div>
            <div id="panel4"/>
            <listView id="listviewdefine0" bindfield="list" onload="sqliteload()">
                <div id="panel5">
                    <div id="panel6"/>
                    <div id="panel7">
                        <div id="panel8">
                            <label id="label4" bindfield="name">张三</label>
                            <label id="label5" bindfield="xclass">北京大学 计算机科学与技术</label> 
                        </div>
                        <div id="panel9"/> 
                    </div> 
                </div> 
            </listView> 
        </div> 
    </div> 
</window>
