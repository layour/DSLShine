<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ControllerLabelView" controller="ControllerLabelViewController" namespace="com.yyuap.demo">
    <import ref="ControllerLabelView.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="标签" class="navigatorbarclass">
            <input id="backbtn" class="ngbbuttonclass" onclick="this.backbtn_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <label id="label1">左对齐-内边距左10</label>
            <label id="label2">居中对齐-文本</label>
            <label id="label3">右对齐-内边距右10</label>
            <label id="label4" type="multiline">这是一个多行文本标签，可输入多行文本内容，如介绍、备注、说明、地址等内容；用户可以自定义该控件的尺寸。。。</label>
            <label id="label5" innerhtml="我已阅读并同意&lt;u&gt;&lt;font color=&quot;#ffffff&quot;&gt;用户协定&lt;/font&gt;&lt;/u&gt;" type="multiline">右对齐-内边距右10</label> 
        </div> 
    </div> 
</window>
