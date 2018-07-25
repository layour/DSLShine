//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMFileListViewController');
com.yyuap.demo.UMFileListViewController = function() {
    com.yyuap.demo.UMFileListViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMFileListViewController$initialize(){
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
    
function com$yyuap$demo$UMFileListViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$UMFileListViewController$button0_onclick(sender, args){
	$view.close();
}

function openAboutCameraView(){
	$view.open({
		"viewid" : "com.yyuap.demo.AboutCameraView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openAboutTelView(){
	$view.open({
		"viewid" : "com.yyuap.demo.AboutTelView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openAboutDeviceView(){
	$view.open({
		"viewid" : "com.yyuap.demo.AboutDeviceView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
function openFileRelative(sender, args){
	var args = {
	    	"path":"filetest/test0.txt",
	    	"content":"11111天空中最微弱的星也有权利争取最美的灿烂"
	    };
        $service.call("UMFile.write", args,true);        
		$alert("写文件完成");
		
		var param = {
			filename:"test0.txt",
			filetype:"txt",
			filepath:"filetest/"
		}
		$service.call("UMDevice.openFile", param, true);
}
function openFileAbslute(sender, args){
	var args = {
	    	"path":"/storage/emulated/0/nd/test0.txt",
	    	"content":"天空中最微弱的星也有权利争取最美的灿烂"
	    };
        $service.call("UMFile.write", args,true);        
		$alert("写文件完成");
		
		var param = {
			filename:"test0.txt",
			filetype:"txt",
			filepath:"/storage/emulated/0/nd/"
		}
		$service.call("UMDevice.openFile", param, true);
}
function openumfileview(sender, args){
	$view.open({
		"viewid" : "com.yyuap.demo.UMFileTest",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
}
com.yyuap.demo.UMFileListViewController.prototype = {
    button0_onclick : com$yyuap$demo$UMFileListViewController$button0_onclick,
    initialize : com$yyuap$demo$UMFileListViewController$initialize,
    evaljs : com$yyuap$demo$UMFileListViewController$evaljs
};
com.yyuap.demo.UMFileListViewController.registerClass('com.yyuap.demo.UMFileListViewController',UMP.UI.Mvc.Controller);
