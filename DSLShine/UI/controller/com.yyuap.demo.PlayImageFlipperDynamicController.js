//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yyuap.demo.PlayImageFlipperDynamicController');
com.yyuap.demo.PlayImageFlipperDynamicController = function() {
    com.yyuap.demo.PlayImageFlipperDynamicController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$PlayImageFlipperDynamicController$initialize(){
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
    
function com$yyuap$demo$PlayImageFlipperDynamicController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
function loadimage(sender, args){
	var context = {
		imagedetails : [{
			src : "bz1.png",
			title : "图片1",
			description : "1.天空中最亮的星也有权利争取最美的灿烂"
		}, {
			src : "bz2.png",
			title : "图片2",
			description : "2.天空中最亮的星也有权利争取最美的灿烂"
		}, {
			src : "bz3.png",
			title : "图片3",
			description : "3.天空中最亮的星也有权利争取最美的灿烂"
		}, {
			src : "bz4.png",
			title : "图片4",
			description : "4.天空中最亮的星也有权利争取最美的灿烂"
		}, {
			src : "bz5.png",
			title : "图片5",
			description : "5.天空中最亮的星也有权利争取最美的灿烂"
		}]
	};
	$ctx.push(context);
}
function imageclick(){
	var index = $id("imageflipper0").get("viewindex");
	//var index = $id(sender).get("viewindex");
	
	if (index == "2") {
		//用法1、基于控件编程
		var ds = $id("imageflipper0").get("datasource");
		//获取该控件的对应flipperitem的数组
        ds = $stringToJSON(ds);
        var src = ds[2]["src"];
		$alert("您将修改图片" + src);
		
		ds[2]["src"] = "bz5.png";
		//改变图片
		ds[2]["title"] = "新图片2";
		//改变标题
		ds[2]["description"] = "这是一张动态修改后的图片";
		//改变描述
		$id("imageflipper0").set("datasource", ds);
	} else if (index == 4) {
		//用法2、基于模型编程
		var array = $ctx.getJSONArray("imagedetails");
		//等价于var array = $id("imageflipper0").get("datasource");
		$alert("您将修改图片" + array[4]["src"]);
        array[4]["src"] = "bz2.png";
		//改变图片
		array[4]["title"] = "新图片5";
		//改变标题
		array[4]["description"] = "这是一张动态修改后的图片";
		//改变描述

		$ctx.put("imagedetails", array);
		$ctx.databind();
	}
}
function next(sender, args){
	var index = $id("imageflipper0").get("viewindex");
	//$alert("next : " + index);
}
function pre(sender, args){
	var index = $id("imageflipper0").get("viewindex");
	//$alert("pre : " + index);
}
com.yyuap.demo.PlayImageFlipperDynamicController.prototype = {
    initialize : com$yyuap$demo$PlayImageFlipperDynamicController$initialize,
    evaljs : com$yyuap$demo$PlayImageFlipperDynamicController$evaljs
};
com.yyuap.demo.PlayImageFlipperDynamicController.registerClass('com.yyuap.demo.PlayImageFlipperDynamicController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
