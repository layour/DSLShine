//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.HomeController');
com.yyuap.demo.HomeController = function() {
    com.yyuap.demo.HomeController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$HomeController$initialize(){
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
    
function com$yyuap$demo$HomeController$evaljs(js){
    eval(js)
}
function openControllerView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.ControllerView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openServiceView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.ServiceView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openEgView(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.ExampleView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function com$yyuap$demo$HomeController$panel0_onload(sender, args){
	/*UMJS.addback服务只针对Android*/
	//$service.call("UMJS.addback", {}, false);
}
function com$yyuap$demo$HomeController$onload(sender, args){
	/*$alert("versionCode:"+$ctx.getApp("versionCode")+"\n versionName:"+$ctx.getApp("versionName")+"\n VersionName:"+$ctx.getApp("VersionName"))
	$view.openDialog({
		"message" : "是否需要更新版本？",
		"title" : "版本更新提示",
		"okaction":"download()",
		"cancelaction" : "cancel()",
		"okbuttontitle" : "确定",
		"cancelbuttontitle" : "取消",
		"style" : "ok-cancel" // | null | waitdialog | text-dialog
	});*/
}
function cancel(){
	
}/*
CurrentEnvironment={};
CurrentEnvironment.DeviceIOS="ios";
CurrentEnvironment.DeviceAndroid="android";
CurrentEnvironment.DeviceType="android";*/
function download(){
	//$js.showLoadingBar();
	/*$file.download({
		"url" : "http://mobile.yyuap.com/static/res/app/UAPMobileApp.apk",//下载文件的url
		"locate" : "uapdownload/web",//下载后文件存放的路径
		"filename" : "DSLShine.apk",//下载后重命名的文件名
		"override" : "true",//下载后是否覆盖同名文件
		"callback" : "downloadCB()"//下载后的回调方法,locate+filename可以访问文件(即download/image/newfile.png)
	});*/
	//if(CurrentEnvironment.DeviceType==CurrentEnvironment.DeviceIOS){
		/*$device.openWebView({
		    "url" : "http://mobile.yyuap.com/static/res/app/UAPMobileApp.ipa"
	    });*/
	/*}else{
		$device.openWebView({
		    "url" : "http://mobile.yyuap.com/static/res/app/UAPMobileApp.apk"
	    });
	}*/
}
function downloadCB(){
	//$js.hideLoadingBar();
	/*$alert("下载成功");
	$file.open({
		"filename" : "DSLShine.apk",
		"filetype" : "apk",
		"filepath" : "uapdownload/web/"
	});*/
}
com.yyuap.demo.HomeController.prototype = {
    onload : com$yyuap$demo$HomeController$onload,
    panel0_onload : com$yyuap$demo$HomeController$panel0_onload,
    initialize : com$yyuap$demo$HomeController$initialize,
    evaljs : com$yyuap$demo$HomeController$evaljs
};
com.yyuap.demo.HomeController.registerClass('com.yyuap.demo.HomeController',UMP.UI.Mvc.Controller);
