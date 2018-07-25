<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UMFileTest" controller="UMFileTestController" namespace="com.yyuap.demo">
    <import ref="UMFileTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="文件服务" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <label id="label1">host:</label>
                <input id="textbox0" maxlength="256" placeholder="172.20.8.184" value="172.20.8.184" type="text"/> 
            </div>
            <div id="panel2">
                <label id="label2">port:</label>
                <input id="textbox1" maxlength="256" placeholder="请输入服务器IP" value="8080" type="text"/> 
            </div>
            <div id="panel3">
                <div id="panel4"/>
                <image id="image0" scaletype="fitcenter" src="image_yl.png"/>
                <div id="panel5"/> 
            </div>
            <div id="panel6">
                <input id="button1" value="上传" class="textbtnclass" onclick="upload()" type="button"/>
                <input id="button2" value="下载" class="textbtnclass" onclick="download()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
