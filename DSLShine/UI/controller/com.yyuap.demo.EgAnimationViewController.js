//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgAnimationViewController');
com.yyuap.demo.EgAnimationViewController = function() {
    com.yyuap.demo.EgAnimationViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$EgAnimationViewController$initialize(){
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
    
function com$yyuap$demo$EgAnimationViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$EgAnimationViewController$button0_onclick(sender, args){
	$view.close();
}
var movingID;
var speed = 1;
function start(){
	var id_blue = $id("blue");
	var id_orange = $id("orange");
	
	var width_blue = parseInt(id_blue.get("width"));
	var height_blue = parseInt(id_blue.get("height"));
	
	if((width_blue>0 && width_blue<200) || (height_blue>0 && height_blue<200)){
		id_blue.set("width", width_blue+2);
	    id_blue.set("height",height_blue+2);
	}
	
	var y_orange = parseInt(id_orange.get("top"));
	var x_orange = parseInt(id_orange.get("left"));
	
	if((y_orange>0 && y_orange<200) || (x_orange>0 && x_orange<200)){
		id_orange.set("top", y_orange+2);
	    id_orange.set("left",x_orange+2);
	}
	movingID = setTimeout(start, 50);
}
function startAnimation(sender, args){
	start();
}
function stopAnimation(sender, args){
	clearTimeout(movingID);
}
com.yyuap.demo.EgAnimationViewController.prototype = {
    button0_onclick : com$yyuap$demo$EgAnimationViewController$button0_onclick,
    initialize : com$yyuap$demo$EgAnimationViewController$initialize,
    evaljs : com$yyuap$demo$EgAnimationViewController$evaljs
};
com.yyuap.demo.EgAnimationViewController.registerClass('com.yyuap.demo.EgAnimationViewController',UMP.UI.Mvc.Controller);
