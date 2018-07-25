<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMFileListView" controller="UMFileListViewController" namespace="com.yyuap.demo">
    <import ref="UMFileListView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="文件服务" class="navigatorbarclass">
            <input id="button0" onclick="this.button0_onclick()" class="ngbbuttonclass" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel2" onclick="openumfileview()">
                    <label id="label1">上传下载</label>
                    <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel3"/>
                <div id="panel4" onclick="openFileRelative()">
                    <label id="label2">打开文件 - 相对路径</label>
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel5"/>
                <div id="panel6" onclick="openFileAbslute()">
                    <label id="label3">打开文件 - 绝对路径</label>
                    <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                </div>
                <div id="panel7"/> 
            </div> 
        </div> 
    </div> 
</window>
