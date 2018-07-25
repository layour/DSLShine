//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerMultiImagesViewController');
com.yyuap.demo.ControllerMultiImagesViewController = function() {
    com.yyuap.demo.ControllerMultiImagesViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerMultiImagesViewController$initialize(){
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
    
function com$yyuap$demo$ControllerMultiImagesViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ControllerMultiImagesViewController$button0_onclick(sender, args){
	$view.close();
}
var filepath;
function viewload(sender, args){
	
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
	        //$alert("filepath:" + filepath);
	        $id("imageselector0").set("path",filepath);
		}
	});
}
function selectcomplete(sender, args){
	var str = $id("imageselector0").get("selectedimages");
    var pathlist = $stringToJSON(str);
    for(var i = 0, len = pathlist.length; i < len; i++){
        //alert(pathlist[i]);
    }
}

function addPic(sender, args){
	//$alert(sender);
	var addimage = $id(sender).get("src");
	
	if(addimage=="addimg_normal.png"){
		addAttachment();
	}
}

function addAttachment(){
	/*var att_length = 0;
	$ctx.put("att_length",att_length);
    $ctx.dataBind();*/
    $view.open({
		"viewid" : "com.yyuap.demo.ControllerImageSelectView",//目标页面（首字母大写）全名，
		"isKeep" : "true",
		"callback":"imagecallback()"
	});
	
}
var att_length = 0;
var json;
function imagecallback(){
    /*if($ctx.getString("attachments")!=""){
        attachments = $ctx.getJSONArray("attachments");
    }else{
        attachments = new Array();
    }*/
   if($ctx.getString("att_length")!=""){
   	    att_length = $ctx.getString("att_length");
   }
 	json = $param.getJSONObject("selectedimages");
 	/*
	 for(var f = 0;f<json.length;f++){
    	attachments.push(json[f]);
    }
	
    $ctx.put("attachments",attachments);
    $ctx.dataBind();*/
    //$alert("attachments:" + $jsonToString($ctx.getJSONArray("attachments")));
    
	var len = json.length;
	var total_length = len+ parseInt(att_length);
	//$alert("att_length = " + att_length + "\n" + "total_length = " + total_length);
	if(total_length>=3&&total_length<6){
		$id("panel3").set("display", "block");
	}else if(total_length>=6){
		$id("panel3").set("display", "block");
		$id("panel4").set("display", "block");
	}
    //$alert("total_length:" + total_length + "\n" + "att_length:" + att_length);
	var i,j;
	for(i = parseInt(att_length)+1,j=0;i<=total_length;i++,j++){
		$id("image"+i).set("visible", "true");
        $id("image"+i).setAttribute("src",json[j]);
	}
	if (total_length < 9) {
		$id("image"+i).set("visible", "true");
		$id("image" + i).set("src", "addimg_normal.png");
	}
    att_length = total_length;
    $ctx.put("att_length",att_length);
    $ctx.dataBind();
}
com.yyuap.demo.ControllerMultiImagesViewController.prototype = {
    button0_onclick : com$yyuap$demo$ControllerMultiImagesViewController$button0_onclick,
    initialize : com$yyuap$demo$ControllerMultiImagesViewController$initialize,
    evaljs : com$yyuap$demo$ControllerMultiImagesViewController$evaljs
};
com.yyuap.demo.ControllerMultiImagesViewController.registerClass('com.yyuap.demo.ControllerMultiImagesViewController',UMP.UI.Mvc.Controller);
