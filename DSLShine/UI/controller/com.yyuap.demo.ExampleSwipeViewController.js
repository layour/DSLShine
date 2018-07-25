//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.ExampleSwipeViewController');
com.yyuap.demo.ExampleSwipeViewController = function() {
    com.yyuap.demo.ExampleSwipeViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ExampleSwipeViewController$initialize(){
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
    
function com$yyuap$demo$ExampleSwipeViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ExampleSwipeViewController$button0_onclick(sender, args){
	$view.close();
}
var doubletapflag=0;

function com$yyuap$demo$ExampleSwipeViewController$doubletap(sender, args){
	var pwidth = parseInt($id("panel0").get("width"));
    var pheight = parseInt($id("panel0").get("height"));

	if(doubletapflag%2==0){
		$id("panel0").set("width",pwidth+20);
	    $id("panel0").set("height",pheight+20);
	    $id("panel0").set("background","#ff0000");
	    $id("label1").set("text", "双击变大");
	}else{
		$id("panel0").set("width",pwidth-20);
	    $id("panel0").set("height",pheight-20);
	    $id("panel0").set("background","#ff0000");
	    $id("label1").set("text", "双击变小");
	}
	doubletapflag++;
}
function com$yyuap$demo$ExampleSwipeViewController$down(sender, args){
	var py = parseInt($id("panel0").get("top")); 
	$id("panel0").set("top",py+20);
	$id("panel0").set("background","#00ff00");
	$id("label1").set("text", "下滑");
}
function com$yyuap$demo$ExampleSwipeViewController$left(sender, args){
	var px = parseInt($id("panel0").get("left"));
	$id("panel0").set("left",px-20);
	$id("panel0").set("background","#8080ff");
	$id("label1").set("text", "左滑");
}
function com$yyuap$demo$ExampleSwipeViewController$right(sender, args){
	var px = parseInt($id("panel0").get("left"));
	$id("panel0").set("left",px+20);
	$id("panel0").set("background","#0000ff");
	$id("label1").set("text", "右滑");
}
function com$yyuap$demo$ExampleSwipeViewController$up(sender, args){
    var py = parseInt($id("panel0").get("top")); 
	$id("panel0").set("top",py-20);
	$id("panel0").set("background","#ffff00");
	$id("label1").set("text", "上滑");
}
function com$yyuap$demo$ExampleSwipeViewController$click(sender, args){
	$alert("click");
}
function com$yyuap$demo$ExampleSwipeViewController$longclick(sender, args){
	$alert("longclick");
}
com.yyuap.demo.ExampleSwipeViewController.prototype = {
    longclick : com$yyuap$demo$ExampleSwipeViewController$longclick,
    click : com$yyuap$demo$ExampleSwipeViewController$click,
    up : com$yyuap$demo$ExampleSwipeViewController$up,
    right : com$yyuap$demo$ExampleSwipeViewController$right,
    left : com$yyuap$demo$ExampleSwipeViewController$left,
    down : com$yyuap$demo$ExampleSwipeViewController$down,
    doubletap : com$yyuap$demo$ExampleSwipeViewController$doubletap,
    button0_onclick : com$yyuap$demo$ExampleSwipeViewController$button0_onclick,
    initialize : com$yyuap$demo$ExampleSwipeViewController$initialize,
    evaljs : com$yyuap$demo$ExampleSwipeViewController$evaljs
};
com.yyuap.demo.ExampleSwipeViewController.registerClass('com.yyuap.demo.ExampleSwipeViewController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
