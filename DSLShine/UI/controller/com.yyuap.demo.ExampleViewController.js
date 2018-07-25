//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ExampleViewController');
com.yyuap.demo.ExampleViewController = function() {
    com.yyuap.demo.ExampleViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ExampleViewController$initialize(){
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
    
function com$yyuap$demo$ExampleViewController$evaljs(js){
    eval(js)
}
function openMapView(){
	$view.open({
		"viewid" : "com.yyuap.demo.EgMapView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openTouchView(){
	$view.open({
		"viewid" : "com.yyuap.demo.EgTouchView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openCalculatorView(){
	$view.open({
		"viewid" : "com.yyuap.demo.EgCalView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openGameView(){
	$view.open({
		"viewid" : "com.yyuap.demo.EgGameView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openEgTimerView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.EgTimerView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openHomeListView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.ExampleHomeList",//目标页面（首字母大写）全名，
		"isKeep" : "false"
	});
}
function openSlide(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.SlideView_EgMap",//目标页面（首字母大写）全名，
		"isKeep" : "false"
	});
}
function openAnimaView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.DongHua",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function back(sender, args){
	$view.close();
}
function com$yyuap$demo$ExampleViewController$back(sender, args){
$view.close();
}
function openSwipeView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.ExampleSwipeView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
com.yyuap.demo.ExampleViewController.prototype = {
    back : com$yyuap$demo$ExampleViewController$back,
    initialize : com$yyuap$demo$ExampleViewController$initialize,
    evaljs : com$yyuap$demo$ExampleViewController$evaljs
};
com.yyuap.demo.ExampleViewController.registerClass('com.yyuap.demo.ExampleViewController',UMP.UI.Mvc.Controller);
