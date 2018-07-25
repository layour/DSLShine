//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.AboutCameraViewController');
com.yyuap.demo.AboutCameraViewController = function() {
    com.yyuap.demo.AboutCameraViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$AboutCameraViewController$initialize(){
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
    
function com$yyuap$demo$AboutCameraViewController$evaljs(js){
    eval(js)
}
function back(sender, args){
	$view.close();
}
function openCameraMenu(){
	$menu.openDropDownList({
		"controlid" : "cameraimgpanel",//目标控件的id
		"dropDownListWidth" : "100",//菜单项的宽度
		"background":"#f5f5f5",
		"panelstyle":"round-div",
		"border-color":"#d2d2d2",
		"showtype":"right",
		"dropItemsArray" : [{
			"name" : "相机",//菜单项名称
			"action" : "openCamera()"//点击该菜单项时执行的JS方法
		},{
			"name" : "相册",//菜单项名称
			"action" : "openPhoto()"//点击该菜单项时执行的JS方法 
		},{
			"name" : "扫一扫",//菜单项名称
			"action" : "sao()"//点击该菜单项时执行的JS方法
		},{
			"name" : "截屏",//菜单项名称
			"action" : "shake()"//点击该菜单项时执行的JS方法
		}]
	})
}
function shake(){
	/*var json = {
		bindfield : "outpath",
        callback : function(){
        	$id("image_yl").set("src", $ctx.getString("outpath"));
        }
	};
	$service.call("UMDevice.screenshot", json,true);*/
/*
	var json = {
        callback : function(sender, args){
        	$id("image_yl").set("src", args["outpath"]);
        }
	};
	$service.call("UMDevice.screenshot", json,true);*/
	/*$device.screenShot({
		"bindfield" : "outpath", //信息回写的绑定字段
		"callback" :  function(){
        	$id("image_yl").set("src", $ctx.getString("outpath"));
        }
	});*/
	
	$device.screenShot({
		"callback" : function(sender, args){
        	$id("image_yl").set("src", args["outpath"]);
        }
	});
	
	var today=new Date();
    var time=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+(today.getSeconds()+10);
	/*var params = {
			"sendTime" : time,
			"sendBody" : "已经获取截图",
			"icon": "app.png"
	};
	$service.call("UMService.localNotification", params);
   */
    $device.notify({
        "sendTime" : time,
		"sendBody" : "已经获取截图",
		"icon": "app.png"
    });
    //$service.call("UMDevice.vibrator", {}, false);
    $vibrator.vibrate();
    //$vibrator.vibrate(1500);
}
function openCamera(){
	$camera.open({
		bindfield : "image",
		compressionRatio:"1",
		callback : function (){
			//$alert("imagepath:" + $ctx.getString("image"));
	        $id("image_yl").set("src", $ctx.getString("image"));
        }
	});
}
function openPhoto(){
	$camera.openPhotoAlbum({
		bindfield : "image",
		compressionRatio:"1",
		callback : function (){
	        $id("image_yl").set("src", $ctx.getString("image"));
        }
	});
}
function sao(){
	$scanner.open({
		bindfield : "code",
		callback : "saoCallback()"
	});
}

function saoCallback(){
	var json = $ctx.getJSONObject("code");
	json = $jsonToString(json);
    $alert("二维码扫描结果:" + json);
}
function com$yyuap$demo$AboutCameraViewController$back(sender, args){
	$view.close();
}
function com$yyuap$demo$AboutCameraViewController$shake(sender, args){
	$device.screenShot({
		"bindfield" : "outpath", //信息回写的绑定字段
		"callback" :  function(){
        	$id("image_yl").set("src", $ctx.getString("outpath"));
        }
	});
	//$service.call("UMDevice.vibrator", {}, false);
	$vibrator.vibrate(3000);
}
com.yyuap.demo.AboutCameraViewController.prototype = {
    shake : com$yyuap$demo$AboutCameraViewController$shake,
    back : com$yyuap$demo$AboutCameraViewController$back,
    initialize : com$yyuap$demo$AboutCameraViewController$initialize,
    evaljs : com$yyuap$demo$AboutCameraViewController$evaljs
};
com.yyuap.demo.AboutCameraViewController.registerClass('com.yyuap.demo.AboutCameraViewController',UMP.UI.Mvc.Controller);
