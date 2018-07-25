//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerPickerViewController');
com.yyuap.demo.ControllerPickerViewController = function() {
    com.yyuap.demo.ControllerPickerViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerPickerViewController$initialize(){
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
    
function com$yyuap$demo$ControllerPickerViewController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
function datepickerchange(){
	var value = $id("datepicker0").get("value");
    $id("datelabel").set("text", "选择的日期: " + value);
}
function timepickerchange(){
	var value = $id("timepicker0").get("value");
    $id("timelabel").set("text", "选择的时间: " + value);

}
function openthreepicker(){
	$view.openPicker({
		"okaction" : "ok3()", //确定后执行的JS方法
		"title" : "Hello Picker",
		"pickercount" : "3",
		"datasource" : {
			picker : [
				{select : [{value : 1, content : 1}, {value : 2, content : 2}, {value : 3, content : 3}]},
				{select : [{value : 1, content : "张三"}, {value : 2, content : "李四"}, {value : 3, content : "王五"}]},
				{select : [{value : 1, content : 25}, {value : 2, content : 23}, {value : 3, content : 26}]}
			]
		},
		"picker1binder" : "no", //Context字段名，存放选中项的value
		"picker2binder" : "name", //Context字段名，存放选中项的value
		"picker3binder" : "age" //Context字段名，存放选中项的value
	});
}
function opentwopicker(){
	$view.openPicker({
		"okaction" : "ok2()", //确定后执行的JS方法
		"title" : "Hello Picker",
		"pickercount" : "2",
		"datasource" : {
			picker : [
				{select : [{value : 1, content : 1}, {value : 2, content : 2}, {value : 3, content : 3}]},
				{select : [{value : "张三", content : "张三"}, {value : "李四", content : "李四"}, {value : "王五", content : "王五"}]},
			]
		},
		"picker1binder" : "no", //Context字段名，存放选中项的value
		"picker2binder" : "name", //Context字段名，存放选中项的value
	})
}
function openonepicker(){
	$view.openPicker({
		"okaction" : "ok1()", //确定后执行的JS方法
		"title" : "Hello Picker",
		"pickercount" : "1",
		"datasource" : {
			picker : [
				{select : [{value : 1, content : 1}, {value : 2, content : 2}, {value : 3, content : 3}]},
				]
		},
		"picker1binder" : "no", //Context字段名，存放选中项的value
	})
}
function ok3(){
	var num = $ctx.getString("no");
	num = $stringToJSON(num);
	num = num.content;
	
	var name = $ctx.getString("name");
	name = $stringToJSON(name);
	name = name.content;
	
	var age = $ctx.getString("age");
	age = $stringToJSON(age);
	age = age.content;
	var v = num + "," + name + "," + age;
	$id("label1").set("text", v);
}
function ok2(){
	//var v = $ctx.getString("no")+","+$ctx.getString("name");
	var num = $ctx.getString("no");
	num = $stringToJSON(num);
	num = num.content;
	
	var name = $ctx.getString("name");
	name = $stringToJSON(name);
	name = name.content;
	var v = num + "," + name;
	$id("label2").set("text", v);
}
function ok1(){
	//var v = $ctx.getString("no");
	var num = $ctx.getString("no");
	num = $stringToJSON(num);
	num = num.content;
	
	var v = num;
	$id("label3").set("text", v);
}
function com$yyuap$demo$ControllerPickerViewController$image5_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.ControllerPickerViewController.prototype = {
    image5_onclick : com$yyuap$demo$ControllerPickerViewController$image5_onclick,
    initialize : com$yyuap$demo$ControllerPickerViewController$initialize,
    evaljs : com$yyuap$demo$ControllerPickerViewController$evaljs
};
com.yyuap.demo.ControllerPickerViewController.registerClass('com.yyuap.demo.ControllerPickerViewController',UMP.UI.Mvc.Controller);
