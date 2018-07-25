//JavaScript Framework 2.0 Code
Type.registerNamespace('com.yyuap.demo.ControllerViewController');
com.yyuap.demo.ControllerViewController = function() {
    com.yyuap.demo.ControllerViewController.initializeBase(this);
    this.initialize();
}
function com$yyuap$demo$ControllerViewController$initialize(){
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
    
function com$yyuap$demo$ControllerViewController$evaljs(js){
    eval(js)
}
function com$yyuap$demo$ControllerViewController$rowclick(sender, args){
	var data = $id("listviewdefine0").get("row");
	data = $stringToJSON(data);
	if("id_div" == data.id){
		$view.open({
		"viewid" : "com.yyuap.demo.ControllerDivView",//目标页面（首字母大写）全名，
		"isKeep" : "true"
	});
	}else if("id_flipper" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerToggleView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_map" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.EgMapView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_select" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerSelectView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_progress" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerProgressView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_input" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerInputView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_label" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerLabelView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_button" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerButtonView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_imageselect" == data.id){
		$view.open({
		    "viewid" : "com.yyuap.demo.ControllerMultiImagesView",//目标页面（首字母大写）全名，
		    "isKeep" : "true"
	    });
	}else if("id_list" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerListViewTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_picker" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerPickerView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_media" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerMediaView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_chart" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerChartView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_webview" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerWebView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_slideview" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ControllerSlideview",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_gallery" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ImageScrollTest",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_input_jd" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.Input_focus",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_dycontrol" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.SendMailTestView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}else if("id_scrawl" == data.id){
		$view.open({
			"viewid" : "com.yyuap.demo.ScrawlView",//目标页面（首字母大写）全名，
			"isKeep" : "true"
		});
	}
}
function com$yyuap$demo$ControllerViewController$listload(sender, args){
	var json = {controllerdetails:[{
		"id":"id_div",
		"name":"布局",
		"detail":"box布局介绍"
	},{
		"id":"id_flipper",
		"name":"多页容器",
		"detail":"flipper"
	},{
		"id":"id_gallery",
		"name":"画廊",
		"detail":"gallery"
	},{
		"id":"id_scrawl",
		"name":"涂鸦控件",
		"detail":"drawdiv"
	},{
		"id":"id_slideview",
		"name":"抽屉",
		"detail":"slideview"
	},{
		"id":"id_progress",
		"name":"进度条、滑块",
		"detail":"progress range"
	},{
		"id":"id_select",
		"name":"选择框、开关",
		"detail":"checkbox switch"
	},{
		"id":"id_input",
		"name":"输入控件",
		"detail":"input"
	},{
		"id":"id_input_jd",
		"name":"输入控件焦点问题",
		"detail":"focus、blur、insert"
	},{
		"id":"id_label",
		"name":"标签",
		"detail":"label"
	},{
		"id":"id_button",
		"name":"按钮",
		"detail":"button"
	},{
		"id":"id_imageselect",
		"name":"图片选择器",
		"detail":"imageselect"
	},{
		"id":"id_list",
		"name":"列表",
		"detail":"listview"
	},{
		"id":"id_picker",
		"name":"滚动选择器",
		"detail":"picker"
	},{
		"id":"id_media",
		"name":"多媒体",
		"detail":"media"
	},{
		"id":"id_map",
		"name":"地图",
		"detail":"map控件"
	},{
		"id":"id_chart",
		"name":"图表",
		"detail":"chart"
	},{
		"id":"id_webview",
		"name":"网页容器",
		"detail":"webview"
	},{
		"id":"id_dycontrol",
		"name":"动态创建控件",
		"detail":"createElement"
	}
	]};
	$ctx.push(json);
}
function com$yyuap$demo$ControllerViewController$back(sender, args){
$view.close();
}
com.yyuap.demo.ControllerViewController.prototype = {
    back : com$yyuap$demo$ControllerViewController$back,
    rowclick : com$yyuap$demo$ControllerViewController$rowclick,
    listload : com$yyuap$demo$ControllerViewController$listload,
    initialize : com$yyuap$demo$ControllerViewController$initialize,
    evaljs : com$yyuap$demo$ControllerViewController$evaljs
};
com.yyuap.demo.ControllerViewController.registerClass('com.yyuap.demo.ControllerViewController',UMP.UI.Mvc.Controller);
