//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ViewWithAnimationController');
com.yyuap.demo.ViewWithAnimationController = function() {
    com.yyuap.demo.ViewWithAnimationController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ViewWithAnimationController$initialize(){
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
    
function com$yyuap$demo$ViewWithAnimationController$evaljs(js){
    eval(js)
}
function back(){
	$view.close();
}
function com$yyuap$demo$ViewWithAnimationController$rowclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	if("id_fade" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"left",
			"animation-time":"1000",
			"animation-type":"Fade"
		});
	}else if("id_push_left" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"left",
			"animation-time":"1000",
			"animation-type":"Push"
		});
	}else if("id_push_right" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"right",
			"animation-time":"1000",
			"animation-type":"Push"
		});
	}else if("id_push_top" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"top",
			"animation-time":"1000",
			"animation-type":"Push"
		});
	}else if("id_push_bottom" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"bottom",
			"animation-time":"1000",
			"animation-type":"Push"
		});
	}else if("id_crosscover" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"bottom",
			"animation-time":"1000",
			"animation-type":"MoveIn"
		});
	}else if("id_shrink" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"top",
			"animation-time":"1000",
			"animation-type":"suckEffect"
		});
	}else if("id_rotate" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.UMNetworkTest",//目标页面（首字母大写）全名，
			"isKeep" : "true",
			"animation-direction":"left",
			"animation-time":"1000",
			"animation-type":"oglFlip"
		});
	}
}
function com$yyuap$demo$ViewWithAnimationController$dataload(sender, args){
	var json = {
		animationlist:[{
			"id":"id_fade",
			"name":"淡入淡出"
		},{
			"id":"id_push_left",
			"name":"由右往左滑屏"
		},{
			"id":"id_push_right",
			"name":"由左向右滑屏"
		},{
			"id":"id_push_top",
			"name":"由下往上滑屏"
		},{
			"id":"id_push_bottom",
			"name":"由上往下滑屏"
		},{
			"id":"id_crosscover",
			"name":"交叉覆盖"
		},{
			"id":"id_shrink",
			"name":"缩小"
		},{
			"id":"id_rotate",
			"name":"翻转"
		}]
	};
	$ctx.push(json);
}
function com$yyuap$demo$ViewWithAnimationController$image5_onclick(sender, args){
	$view.close();
}
com.yyuap.demo.ViewWithAnimationController.prototype = {
    image5_onclick : com$yyuap$demo$ViewWithAnimationController$image5_onclick,
    rowclick : com$yyuap$demo$ViewWithAnimationController$rowclick,
    dataload : com$yyuap$demo$ViewWithAnimationController$dataload,
    initialize : com$yyuap$demo$ViewWithAnimationController$initialize,
    evaljs : com$yyuap$demo$ViewWithAnimationController$evaljs
};
com.yyuap.demo.ViewWithAnimationController.registerClass('com.yyuap.demo.ViewWithAnimationController',UMP.UI.Mvc.Controller);
