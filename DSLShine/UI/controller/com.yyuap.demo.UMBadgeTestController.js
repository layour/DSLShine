//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMBadgeTestController');
com.yyuap.demo.UMBadgeTestController = function() {
    com.yyuap.demo.UMBadgeTestController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMBadgeTestController$initialize(){
    //you can programing by $ctx API
    //get the context data through $ctx.get()
    //set the context data through $ctx.push(json)
    //set the field of the context through $ctx.put(fieldName, fieldValue)
    //get the parameter of the context through $ctx.param(parameterName)
    //Demo Code:
    //    var str = $ctx.getString();      //获取当前Context对应的字符串
    //    alert($ctx.getString())          //alert当前Context对应的字符串
    //    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
    //    json["x"] = "a";        //为当前json增加字段
    //    json["y"] = [];           //为当前json增加数组
    //    $ctx.push(json);            //设置context，并自动调用数据绑定
    //    
    //    put方法需手动调用databind()
    //    var x = $ctx.get("x");    //获取x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.put("x", "b");     //设置x字段值
    //    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
    //    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
    //    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
    //    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组
    
    //your initialize code below...
    
}
    
function com$yyuap$demo$UMBadgeTestController$evaljs(js){
    eval(js)
}

function btn_topleftclick(){
	var value = $id("button1").get("value");
	if("左上" == value){
		$badge.showBadge({
			"target" : "image0",//要显示角标的目标控件的id
			"text" : "1",//角标显示的内容
			"position" : "topleft"//显示在target控件的位置 topright | topleft | bottomright | bottomleft
	    });
	    $id("button1").setAttribute("value", "隐藏");
	    $id("button2").set("disabled", "disabled");
	    $id("button3").set("disabled", "disabled");
	    $id("button4").set("disabled", "disabled");
	}else{
		$badge.hideBadge({
			"target" : "image0"//要显示角标的目标控件的id
		});
		$id("button1").setAttribute("value", "左上");
		$id("button2").set("disabled", "false");
	    $id("button3").set("disabled", "false");
	    $id("button4").set("disabled", "false");
	}
}
function btn_toprightclick(){
	var value = $id("button2").get("value");
	if("右上" == value){
		$badge.showBadge({
			"target" : "image0",//要显示角标的目标控件的id
			"text" : "2",//角标显示的内容
			"position" : "topright"//显示在target控件的位置 topright | topleft | bottomright | bottomleft
	    });
	    $id("button2").setAttribute("value", "隐藏");
	    $id("button1").set("disabled", "disabled");
	    $id("button3").set("disabled", "disabled");
	    $id("button4").set("disabled", "disabled");
	}else{
		$badge.hideBadge({
			"target" : "image0"//要显示角标的目标控件的id
		});
		$id("button2").setAttribute("value", "右上");
		$id("button1").set("disabled", "false");
	    $id("button3").set("disabled", "false");
	    $id("button4").set("disabled", "false");
	}
}
function btn_bottomleftclick(){
	var value = $id("button3").get("value");
	if("左下" == value){
		$badge.showBadge({
			"target" : "image0",//要显示角标的目标控件的id
			"text" : "3",//角标显示的内容
			"position" : "bottomleft"//显示在target控件的位置 topright | topleft | bottomright | bottomleft
	    });
	    $id("button3").setAttribute("value", "隐藏");
	    $id("button1").set("disabled", "disabled");
	    $id("button2").set("disabled", "disabled");
	    $id("button4").set("disabled", "disabled");
	}else{
		$badge.hideBadge({
			"target" : "image0"//要显示角标的目标控件的id
		});
		$id("button3").setAttribute("value", "左下");
		$id("button1").set("disabled", "false");
	    $id("button2").set("disabled", "false");
	    $id("button4").set("disabled", "false");
	}
}
function btn_bottomrightclick(){
	var value = $id("button4").get("value");
	if("右下" == value){
		$badge.showBadge({
			"target" : "image0",//要显示角标的目标控件的id
			"text" : "4",//角标显示的内容
			"position" : "bottomright"//显示在target控件的位置 topright | topleft | bottomright | bottomleft
	    });
	    $id("button4").setAttribute("value", "隐藏");
	    $id("button1").set("disabled", "disabled");
	    $id("button2").set("disabled", "disabled");
	    $id("button3").set("disabled", "disabled");
	}else{
		$badge.hideBadge({
			"target" : "image0"//要显示角标的目标控件的id
		});
		$id("button4").setAttribute("value", "右下");
		$id("button1").set("disabled", "false");
	    $id("button2").set("disabled", "false");
	    $id("button3").set("disabled", "false");
	}
}
function back(){
	$view.close();
}
function com$yyuap$demo$UMBadgeTestController$button0_onclick(sender, args){
$view.close();
}
com.yyuap.demo.UMBadgeTestController.prototype = {
    button0_onclick : com$yyuap$demo$UMBadgeTestController$button0_onclick,
    initialize : com$yyuap$demo$UMBadgeTestController$initialize,
    evaljs : com$yyuap$demo$UMBadgeTestController$evaljs
};
com.yyuap.demo.UMBadgeTestController.registerClass('com.yyuap.demo.UMBadgeTestController',UMP.UI.Mvc.Controller);
