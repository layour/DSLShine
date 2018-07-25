//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutDeviceViewController');
com.yyuap.demo.AboutDeviceViewController = function() {
    com.yyuap.demo.AboutDeviceViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$AboutDeviceViewController$initialize(){
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
    
function com$yyuap$demo$AboutDeviceViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
function getTimeZoneInfor(){
	var id = $device.getTimeZoneID();
	var name = $device.getTimeZoneDisplayName();
	$alert("当前时区信息:" + "\n" + id + "\n" + name);
}
function getLocationInfor(){
	$device.getLocation({
		"bindfield" : "location", //位置信息回写的绑定字段
		"callback" : function (){
			$alert("当前位置信息:" + "\n" + $ctx.getString("location"));
        }, //回调执行的JS方法
		"single" : "true", //是否只获取1次
		"isgetaddress" : "true", //是否需要获取地址
		"network" : "true" //是否使用wifi定位
	});
}

function getDeviceInfor(){
	$alert("当前设备信息:" + "\n" + $device.getDeviceInfo());
}
function getInternalMemInfor(){
	$alert("当前内部存储信息:" + "\n" + $device.getInternalMemoryInfo());
}
function getExternalMemInfor(){
	$alert("当前外部存储信息:" + "\n" + $device.getExternalStorageInfo());
}
function com$yyuap$demo$AboutDeviceViewController$back(sender, args){
	$view.close();
}
com.yyuap.demo.AboutDeviceViewController.prototype = {
    back : com$yyuap$demo$AboutDeviceViewController$back,
    initialize : com$yyuap$demo$AboutDeviceViewController$initialize,
    evaljs : com$yyuap$demo$AboutDeviceViewController$evaljs
};
com.yyuap.demo.AboutDeviceViewController.registerClass('com.yyuap.demo.AboutDeviceViewController',UMP.UI.Mvc.Controller);
