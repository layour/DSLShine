//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerSelectViewController');
com.yyuap.demo.ControllerSelectViewController = function() {
    com.yyuap.demo.ControllerSelectViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerSelectViewController$initialize(){
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
    
function com$yyuap$demo$ControllerSelectViewController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
function com$yyuap$demo$ControllerSelectViewController$switch0_onchange(){
	var v = $id("switch0").get("value");
	$id("label4").set("text", v);
}
function com$yyuap$demo$ControllerSelectViewController$switch1_onchange(){
	var v = $id("switch1").get("value");
	$alert("v:" + v);
	$id("label3").set("text", v);
}
function togglebtnchange(){
    var value = $id("togglebuttongroup1").get("selectedvalue");
	alert("您选择的是第:" + value + "个togglebutton");
}
function com$yyuap$demo$ControllerSelectViewController$backbtn_onclick(sender, args){
$view.close();
}
function checkboxchange(sender, args){
	$alert("选择框_" + sender + ":" + $id(sender).get("checked"));
}
function com$yyuap$demo$ControllerSelectViewController$onclick(sender, args){
$alert("click switch:"+$id(sender).get("value"));
}
com.yyuap.demo.ControllerSelectViewController.prototype = {
    onclick : com$yyuap$demo$ControllerSelectViewController$onclick,
    backbtn_onclick : com$yyuap$demo$ControllerSelectViewController$backbtn_onclick,
    switch1_onchange : com$yyuap$demo$ControllerSelectViewController$switch1_onchange,
    switch0_onchange : com$yyuap$demo$ControllerSelectViewController$switch0_onchange,
    initialize : com$yyuap$demo$ControllerSelectViewController$initialize,
    evaljs : com$yyuap$demo$ControllerSelectViewController$evaljs
};
com.yyuap.demo.ControllerSelectViewController.registerClass('com.yyuap.demo.ControllerSelectViewController',UMP.UI.Mvc.Controller);
