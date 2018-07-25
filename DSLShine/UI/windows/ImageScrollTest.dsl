<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ImageScrollTest" controller="ImageScrollTestController" namespace="com.yyuap.demo">
    <import ref="ImageScrollTest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <Scrollview id="Scrollview_viewPage0" height="fill" vScrollEnabled="always" width="fill" hScrollEnabled="disabled">
        <div id="viewPage0">
            <navigatorbar id="navigatorbar0" title="图片滚动" class="navigatorbarclass">
                <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
                <label id="label0"/> 
            </navigatorbar>
            <label id="label1">JS设置datasource</label>
            <gallery id="gallery0" navarrowdisplay="true" onload="this.gallery0_onload()" itemindex="0" onitemclick="imageclick()" scaletype="fitcenter" spacing="12" itemwidth="200" datasource="[{&quot;src&quot;:&quot;bz1.png&quot;}, {&quot;src&quot;:&quot;bz2.png&quot;}]"/>
            <label id="label2">属性设置datasource</label>
            <gallery id="gallery1" navarrowdisplay="true" itemindex="0" onitemclick="imageclick()" scaletype="fitcenter" spacing="12" datasource="[{&quot;src&quot;:&quot;bz1.png&quot;}, {&quot;src&quot;:&quot;bz2.png&quot;}, {&quot;src&quot;:&quot;bz3.png&quot;}, {&quot;src&quot;:&quot;bz4.png&quot;}, {&quot;src&quot;:&quot;bz5.png&quot;}, {&quot;src&quot;:&quot;bz1.png&quot;}, {&quot;src&quot;:&quot;bz2.png&quot;}, {&quot;src&quot;:&quot;bz3.png&quot;}, {&quot;src&quot;:&quot;bz4.png&quot;}, {&quot;src&quot;:&quot;bz5.png&quot;}]" itemwidth="200"/> 
        </div>
    </Scrollview> 
</window>
