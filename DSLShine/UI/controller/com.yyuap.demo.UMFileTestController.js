//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.UMFileTestController');
com.yyuap.demo.UMFileTestController = function() {
    com.yyuap.demo.UMFileTestController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$UMFileTestController$initialize(){
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
    
function com$yyuap$demo$UMFileTestController$evaljs(js){
    eval(js)
}
var flag = -1;
var filename = "image.jpg";

function upload(){
	$id("textbox0").set("value","172.20.8.184");
	$device.capturePhoto({
		"bindfield" : "uploadimage",//存放图片返回值的Context字段名
		"callback" : "selectImageCB()"//回调JS方法
	});
}
function selectImageCB(){
	
	var imagePath = $ctx.getString("uploadimage");
	var ip = $id("textbox0").get("value");
	var port = $id("textbox1").get("value");
	var url = "http://"+ip+":"+port+"/umserver/upload";
    $file.upload({
        "url" : url,//上传服务器端路径
        "filename" : imagePath,//上传文件的路径+文件名
        "bindfield" : "upload",//上传后的返回值，类型为JSONObject（其中从键值url可以获取上传后该文件的url）
        "callback" : "uploadImageCallback()"//上传后的回调方法
    });
}
function uploadImageCallback(){
	var upload = $ctx.getString("upload");
	upload = $stringToJSON(upload);
	$alert("服务器上文件存放的URL为:" + upload.url);
	flag = flag + 1;
	var badge = (upload.url).split(".");
	filename = "image" + flag + "." + badge[badge.length-1];
	//$alert("filename:" + filename);
	
	$file.download({
		"url" : upload.url,//下载文件的url
		"locate" : "downloadTest/image",//下载后文件存放的路径
		"filename" : filename,//下载后重命名的文件名
		"override" : "true",//下载后是否覆盖同名文件
		"callback" : "downloadfromserverCB()"//下载后的回调方法,locate+filename可以访问文件(即download/image/newfile.png)
	});
}
function downloadfromserverCB(){
	var value = "downloadTest/image/" + filename;
	//$alert("value = " + value);
	$id("image0").set("src",value);
}
function download(){
	var webpath = "http://e.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d838fe940230fa828ba61e4633.jpg";
	$id("textbox0").set("value",webpath);
	/*var params = {
		url:webpath,
		filename:"jd.png",
		locate:"downloadTest/image",
		override:"true",
		callback:"downloadImageCallback()"
	};
	$service.call("UMFile.download",params);*/
	$file.download({
		"url" : webpath,//下载文件的url
		"locate" : "downloadTest/image",//下载后文件存放的路径
		"filename" : "newfile.png",//下载后重命名的文件名
		"override" : "true",//下载后是否覆盖同名文件
		"callback" : "downloadImageCallback()"//下载后的回调方法,locate+filename可以访问文件(即download/image/newfile.png)
	});
}
function downloadImageCallback(){
	$id("image0").set("src","downloadTest/image/newfile.png");
}
function back(sender, args){
	$view.close();
}
function com$yyuap$demo$UMFileTestController$button0_onclick(sender, args){
$view.close();
}
com.yyuap.demo.UMFileTestController.prototype = {
    button0_onclick : com$yyuap$demo$UMFileTestController$button0_onclick,
    initialize : com$yyuap$demo$UMFileTestController$initialize,
    evaljs : com$yyuap$demo$UMFileTestController$evaljs
};
com.yyuap.demo.UMFileTestController.registerClass('com.yyuap.demo.UMFileTestController',UMP.UI.Mvc.Controller);
