<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ListTest" controller="ListTestController" namespace="com.yyuap.demo">  
    <import ref="ListTest.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="自定义左滑事件" class="navigatorbarclass"> 
            <input id="button0" value="返回" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>  
            <label id="label0"/> 
        </navigatorbar>  
        <Scrollview id="Scrollview_panel3" vScrollEnabled="always" weight="1" height="0" width="fill" hScrollEnabled="disabled"> 
            <div id="panel3"> 
                <listView id="listviewdefine0" bindfield="listdetails" linedelshow="true" onload="this.listviewdefine0_onload()" onItemClick="this.itemclick()" adaptiveheight="true"> 
                    <div id="panel0"> 
                        <div id="panel1"> 
                            <label id="label1" bindfield="name">label</label>  
                            <label id="label2" bindfield="num">label</label> 
                        </div>  
                        <div id="panel2"/> 
                    </div> 
                </listView> 
            </div> 
        </Scrollview> 
    </div> 
</window>
