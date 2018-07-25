<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerMultiImagesView" controller="ControllerMultiImagesViewController" namespace="com.yyuap.demo">
    <import ref="ControllerMultiImagesView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="viewload()">
        <navigatorbar id="navigatorbar0" title="图片选择器" class="navigatorbarclass">
            <input id="button0" onclick="this.button0_onclick()" class="ngbbuttonclass" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="panel5">
                    <image id="image1" onclick="addPic()" scaletype="fitcenter" src="addimg_normal.png"/> 
                </div>
                <div id="panel6">
                    <image id="image2" visible="false" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div>
                <div id="panel7">
                    <image id="image3" visible="false" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div> 
            </div>
            <div id="panel3">
                <div id="panel8">
                    <image id="image4" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div>
                <div id="panel9">
                    <image id="image5" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div>
                <div id="panel10">
                    <image id="image6" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div> 
            </div>
            <div id="panel4">
                <div id="panel11">
                    <image id="image7" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div>
                <div id="panel12">
                    <image id="image8" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div>
                <div id="panel13">
                    <image id="image9" onclick="addPic()" scaletype="fitcenter" src=""/> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
