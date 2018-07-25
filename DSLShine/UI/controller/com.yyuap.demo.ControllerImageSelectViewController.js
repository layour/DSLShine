//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerImageSelectViewController');
com.yyuap.demo.ControllerImageSelectViewController = function() {
    com.yyuap.demo.ControllerImageSelectViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerImageSelectViewController$initialize(){
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
    
function com$yyuap$demo$ControllerImageSelectViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ControllerImageSelectViewController$button0_onclick(sender, args){
	$view.close();
	
}
var filepath;
function viewload(sender, args){
	/*var path = $service.call("UMDevice.getAlbumPath", {}, true);
	$alert("path:" + path);
	$id("imageselector0").set("path",path+"/");*/
	
	//var path = $service.call("UMDevice.getAppAlbumPath", {}, true);
	var path = $device.getAppAlbumPath();
	//$alert("path:"+path);
	$id("imageselector0").set("path",path);
	
}
function openCamera(sender, args){
	$camera.open({
		bindfield : "images",
		callback : function (){
	        var badge = ($ctx.getString("images")).split("/");
	        filepath = "/";
	        for(var i=1;i<(badge.length-1);i++){
	        	filepath = filepath + badge[i] + "/";
	        }
	        $id("imageselector0").set("path",filepath);
		}
	});
}
function selectcomplete(sender, args){
	var str = $id("imageselector0").get("selectedimages");
	//$alert("str:" + str);
	if(str == ""){
		$view.close();
	}else{
		var pathlist = $stringToJSON(str);
	    $view.close({
		    "resultCode" : "15",
		    "selectedimages" : pathlist
	    });
	}
	
}

com.yyuap.demo.ControllerImageSelectViewController.prototype = {
    button0_onclick : com$yyuap$demo$ControllerImageSelectViewController$button0_onclick,
    initialize : com$yyuap$demo$ControllerImageSelectViewController$initialize,
    evaljs : com$yyuap$demo$ControllerImageSelectViewController$evaljs
};
com.yyuap.demo.ControllerImageSelectViewController.registerClass('com.yyuap.demo.ControllerImageSelectViewController',UMP.UI.Mvc.Controller);
