//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.EgCalViewController');
com.yyuap.demo.EgCalViewController = function() {
    com.yyuap.demo.EgCalViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$EgCalViewController$initialize(){
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
    
function com$yyuap$demo$EgCalViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
var flag_jia="+",flag_jian="-",flag_cheng="*",flag_chu="/";
var suanshi="";
function count(v){
	$id("imgResult").set("src", "a"+v+".png");
	$id("labelV").set("value", "");
	suanshi+=v;
}
function btn7_onclick(){
	count("7");
}
function btn8_onclick(){
	count("8");
}
function btn5_onclick(){
	count("5");
}
function btnjia_onclick(){
	suanshi+="+";
	$id("imgResult").set("src", "jia.png");
}
function btn4_onclick(){
	count("4");
}
function btn6_onclick(){
	count("6");
}
function btnjian_onclick(){
	suanshi+="-";
	$id("imgResult").set("src", "jian.png");
}
function btn1_onclick(){
	count("1");
}
function btn2_onclick(){
	count("2");
}
function btn3_onclick(){
	count("3");
}
function btn0_onclick(){
	count("0");
}
function btndian_onclick(){
	suanshi+=".";
	$id("imgResult").set("src", "dian.png");
}
function btndeng_onclick(){
	var v= eval(suanshi);	
	$id("labelV").set("value", suanshi+"="+v);
	suanshi = "";
}
function btn9_onclick(){
    count("9");
}
function btncheng_onclick(){
	suanshi+="*";
	$id("imgResult").set("src", "cheng.png");
}
function com$yyuap$demo$EgCalViewController$image5_onclick(sender, args){
$view.close();
}
com.yyuap.demo.EgCalViewController.prototype = {
    image5_onclick : com$yyuap$demo$EgCalViewController$image5_onclick,
    initialize : com$yyuap$demo$EgCalViewController$initialize,
    evaljs : com$yyuap$demo$EgCalViewController$evaljs
};
com.yyuap.demo.EgCalViewController.registerClass('com.yyuap.demo.EgCalViewController',UMP.UI.Mvc.Controller);
