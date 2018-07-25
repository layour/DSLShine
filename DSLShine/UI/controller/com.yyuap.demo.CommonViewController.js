//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.CommonViewController');
com.yyuap.demo.CommonViewController = function() {
    com.yyuap.demo.CommonViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$CommonViewController$initialize(){
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
    
function com$yyuap$demo$CommonViewController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
var animationtype;
var flag = 0;
function openpopview(){
	if(flag%5 == 0){
		animationtype = "top";
	}else if(flag%5 == 1){
		animationtype = "bottom";
	}else if(flag%5 == 2){
		animationtype = "left";
	}else if(flag%5 == 3){
		animationtype = "right";
	}else if(flag%5 == 4){
		animationtype = "center";
	}
	flag++;
	var params = {
			"viewid" : "panel8",
			"isTouch" : "true",
			"single" : "true",
			"animation-direction":animationtype//top|bottom|left|right|center 
	};
	$view.openPop(params);
}
function openpopwithbtn(){
	var params = {
			"viewid" : "panel9",
			"isTouch" : "false",
			"single" : "true"
	};
	$view.openPop(params);
}
function closepopview(){
	var params = {
		viewid : "panel9"
	};
	$view.closePop(params);
}
function openDialog(){
	var params = {
		"title" : "我是对话框",
		"message" : "点击弹出单按钮的对话框",
		"okbuttontitle" : "当然了"
	};
	$view.openDialog(params);
}
function openTwoBtnDialog(){
	var params = {
		"title" : "我是对话框",
		"message" : "点击弹出双按钮的对话框",
		"okbuttontitle" : "当然了",
		"cancelbuttontitle" : "取消掉",
		"style" : "ok-cancel"
	};
	$view.openDialog(params);
}
function com$yyuap$demo$CommonViewController$image5_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.CommonViewController.prototype = {
    image5_onclick : com$yyuap$demo$CommonViewController$image5_onclick,
    initialize : com$yyuap$demo$CommonViewController$initialize,
    evaljs : com$yyuap$demo$CommonViewController$evaljs
};
com.yyuap.demo.CommonViewController.registerClass('com.yyuap.demo.CommonViewController',UMP.UI.Mvc.Controller);
