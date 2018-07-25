//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.ListWithItemcreateController');
	com.yyuap.demo.ListWithItemcreateController = function() {
		com.yyuap.demo.ListWithItemcreateController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$ListWithItemcreateController$initialize() {
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

	function com$yyuap$demo$ListWithItemcreateController$evaljs(js) {
		eval(js)
	}

	function com$yyuap$demo$ListWithItemcreateController$button0_onclick(sender, args) {
		$view.close();
	}

	function com$yyuap$demo$ListWithItemcreateController$itemcreate(sender, args) {
		var params = {};
		for (var i = 0; i < 20; i++) {
			if (args.event.childindex == i) {
				params = {

					id : "listviewdefine0",
					itemtype : "child",
					groupindex : "0", //第几组，普通列表可以没有这个参数
					childindex : i,
					row : [{
						controlid : "label1",
						value : 3 * i//未绑定字段则生效
					}]
				}
			}
			$id("listviewdefine0").set("itemsource", $jsonToString(params));
		}
		/*if (args.event.childindex == 0) {
		 params = {

		 id : "listviewdefine0",
		 itemtype : "child",
		 groupindex : "0", //第几组，普通列表可以没有这个参数
		 childindex : "0",
		 row : [{
		 controlid : "label1",
		 color : "#FF0000",
		 value : "红"//未绑定字段则生效
		 }]
		 }
		 }

		 if (args.event.childindex == 1) {
		 params = {

		 id : "listviewdefine0",
		 itemtype : "child",
		 groupindex : "3",
		 childindex : "1",

		 row : [{
		 controlid : "label1",
		 color : "#0000FF",
		 value : "绿"//未绑定字段则生效
		 }]
		 }

		 }

		 $id("listviewdefine0").set("itemsource", $jsonToString(params));
		 */
		for (var i = 0; i < 20; i++) {
			var news = $service.call("UMJS.getListProperty", {
				controlId : "listviewdefine0",
				rowindex : i,
				childcontrolId : "label1",
				propertyname : "value"
			}, true);
			if (parseInt(news) % 2 == 0)
				$service.call("UMJS.setListProperty", {
					controlId : "listviewdefine0",
					rowindex : i,
					childcontrolId : "label1",
					color : "#FF0000"
				});

		}

	}

	function itemcreate(sender, args) {
		var params = {};
		//$alert("args:" + args);
		//$alert("args.event:" + args.event);
		args.event = $stringToJSON(args.event);
		//$alert("args.event.childindex:" + args.event.childindex);
		//for (var i = 0; i < 20; i++) {
			//if (args.event.childindex == i) {
				params = {

					id : "listviewdefine0",
					itemtype : "child",
					groupindex : "0", //第几组，普通列表可以没有这个参数
					childindex : args.event.childindex,
					row : [{
						controlid : "label1",
						"color":"#ff0000"
					}]
				}
			//}

		//}
		$id("listviewdefine0").set("itemsource", $jsonToString(params));
		/*if (args.event.childindex == 0) {
		params = {

		id : "listviewdefine0",
		itemtype : "child",
		groupindex : "0", //第几组，普通列表可以没有这个参数
		childindex : "0",
		row : [{
		controlid : "label1",
		color : "#FF0000",
		value : "红"//未绑定字段则生效
		}]
		}
		}

		if (args.event.childindex == 1) {
		params = {

		id : "listviewdefine0",
		itemtype : "child",
		groupindex : "3",
		childindex : "1",

		row : [{
		controlid : "label1",
		color : "#0000FF",
		value : "绿"//未绑定字段则生效
		}]
		}

		}*/

		//$id("listviewdefine0").set("itemsource", params);
		/*for (var i = 0; i < 20; i++) {
		 var news = $service.call("UMJS.getListProperty", {
		 controlId : "listviewdefine0",
		 rowindex : i,
		 childcontrolId : "label1",
		 propertyname : "value"
		 }, true);
		 if (parseInt(news)%2==0)
		 $service.call("UMJS.setListProperty", {
		 controlId : "listviewdefine0",
		 rowindex : i,
		 childcontrolId : "label1",
		 color : "#FF0000"
		 });

		 }*/
	}

	function com$yyuap$demo$ListWithItemcreateController$listviewdefine0_onload(sender, args) {
		var json = {
			list : []
		};
		for (var i = 0; i < 20; i++) {
			var l = {};
			l.name = i * 3;
			json.list.push(l);
		}
		$ctx.push(json);
	}
	com.yyuap.demo.ListWithItemcreateController.prototype = {
		listviewdefine0_onload : com$yyuap$demo$ListWithItemcreateController$listviewdefine0_onload,
		itemcreate : com$yyuap$demo$ListWithItemcreateController$itemcreate,
		button0_onclick : com$yyuap$demo$ListWithItemcreateController$button0_onclick,
		initialize : com$yyuap$demo$ListWithItemcreateController$initialize,
		evaljs : com$yyuap$demo$ListWithItemcreateController$evaljs
	};
	com.yyuap.demo.ListWithItemcreateController.registerClass('com.yyuap.demo.ListWithItemcreateController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
