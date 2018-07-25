//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerInputViewController');
com.yyuap.demo.ControllerInputViewController = function() {
    com.yyuap.demo.ControllerInputViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerInputViewController$initialize(){
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
    
function com$yyuap$demo$ControllerInputViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
function textchange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("文本输入框:" + $id(sender).get("value"));
}
function textfocus(sender, args){
	$alert("文本输入框获取焦点");
}
function textblur(sender, args){
	$alert("文本输入框焦点离开");
}
function digitchange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("数字输入框:" + $id(sender).get("value"));
}
function emailchange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("邮箱输入框:" + $id(sender).get("value"));
}
function datetimechange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("日期时间输入框:" + $id(sender).get("value"));
}
function datechange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("日期输入框:" + $id(sender).get("value"));
}
function timechange(sender, args){
	//$alert("oldvalue:" + args["oldvalue"]);
	//$alert("newvalue:" + args["newvalue"]);
	$alert("时间输入框:" + $id(sender).get("value"));
}
function textareachange(sender, args){
	$alert("多行文本输入框:" + $id(sender).get("text"));
}
function textareaload(sender, args){
	//$alert("多行文本输入框:" + $id(sender).set("text","这是一个多行文本输入控件，用户可以在此控件内输入多行文本。。。" + "\n" + "这是一个多行文本输入控件，用户可以在此控件内输入多行文本。。。" + "\n" + "这是一个多行文本输入控件，用户可以在此控件内输入多行文本。。。"));
}
function com$yyuap$demo$ControllerInputViewController$backbtn_onclick(sender, args){
	$view.close();
}
function com$yyuap$demo$ControllerInputViewController$oninput(sender, args){
	var v = $id("textbox0").get("value");
	$id("textarea0").set("text",v);
	//$id("textarea1").set("text",v);
}
function dateclick(sender, args){
$alert("date vallue:" + $id("dateinput0").get("value"));
}
com.yyuap.demo.ControllerInputViewController.prototype = {
    oninput : com$yyuap$demo$ControllerInputViewController$oninput,
    backbtn_onclick : com$yyuap$demo$ControllerInputViewController$backbtn_onclick,
    initialize : com$yyuap$demo$ControllerInputViewController$initialize,
    evaljs : com$yyuap$demo$ControllerInputViewController$evaljs
};
com.yyuap.demo.ControllerInputViewController.registerClass('com.yyuap.demo.ControllerInputViewController',UMP.UI.Mvc.Controller);
