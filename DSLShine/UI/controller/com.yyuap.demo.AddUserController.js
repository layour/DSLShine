//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.AddUserController');
	com.yyuap.demo.AddUserController = function() {
		com.yyuap.demo.AddUserController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$AddUserController$initialize() {
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

	function com$yyuap$demo$AddUserController$evaljs(js) {
		eval(js)
	}

	function com$yyuap$demo$AddUserController$listviewdefine0_onload(sender, args) {
		var json = {
			listdetails : [{
				photo : "btn_fav.png",
				name : "mark",
				phone : "13717761898",
				group : "M",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "dd",
				phone : "13717761898",
				group : "D",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Hello",
				phone : "13717761898",
				group : "H",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "dss",
				phone : "13717761898",
				group : "D",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "wyt",
				phone : "13717761898",
				group : "W",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "yt",
				phone : "13717761898",
				group : "Y",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "lwh",
				phone : "13717761898",
				group : "L",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "cln",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "zzq",
				phone : "13717761898",
				group : "Z",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "wy",
				phone : "13717761898",
				group : "W",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "sm",
				phone : "13717761898",
				group : "S",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Hero",
				phone : "13717761898",
				group : "H",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "cris",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Lu",
				phone : "13717761898",
				group : "L",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Micky",
				phone : "13717761898",
				group : "M",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "灿烂",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "伯贤",
				phone : "13717761898",
				group : "B",
				select : "false"
			},{
				photo : "btn_fav.png",
				name : "mark1",
				phone : "13717761898",
				group : "M",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "dd1",
				phone : "13717761898",
				group : "D",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Hello1",
				phone : "13717761898",
				group : "H",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "dss1",
				phone : "13717761898",
				group : "D",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "wyt1",
				phone : "13717761898",
				group : "W",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "yt1",
				phone : "13717761898",
				group : "Y",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "lwh1",
				phone : "13717761898",
				group : "L",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "cln1",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "zzq1",
				phone : "13717761898",
				group : "Z",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "wy1",
				phone : "13717761898",
				group : "W",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "sm1",
				phone : "13717761898",
				group : "S",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Hero1",
				phone : "13717761898",
				group : "H",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "cris1",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Lu1",
				phone : "13717761898",
				group : "L",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "Micky1",
				phone : "13717761898",
				group : "M",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "灿烂1",
				phone : "13717761898",
				group : "C",
				select : "false"
			}, {
				photo : "btn_fav.png",
				name : "伯贤1",
				phone : "13717761898",
				group : "B",
				select : "false"
			}]
		};
		$ctx.push(json);
	}

	function com$yyuap$demo$AddUserController$button0_onclick(sender, args) {
		$view.close()
	}

	function selectUser() {
		var rowstr = $id("listviewdefine0").get("row");
		var row = $stringToJSON(rowstr);
		var index = parseInt($id("listviewdefine0").get("rowindex"));

		if ( typeof (row.select) == "undefined" || row.select == "false" || row.select == false) {
			row.select = "true";
			//$id("listviewdefine0").find(index, "panel1").set("background","#ff8080");
		} else {
			row.select = "false";
			//$id("listviewdefine0").find(index, "panel1").set("background","#ffffff");
		}
		$ctx.dataCollect();
		var json = $ctx.getJSONArray("listdetails");
		json[index] = row;
		$ctx.put("listdetails", json)
		$ctx.dataBind();
	}

	function com$yyuap$demo$AddUserController$rowclick(sender, args) {
		selectUser();
	}

	function com$yyuap$demo$AddUserController$onclick(sender, args) {
		$ctx.dataCollect();
		/*var rowstr = $id("listviewdefine0").get("row");
		var row = $stringToJSON(rowstr);
		var index = parseInt($id("listviewdefine0").get("rowindex"));

		if ( typeof (row.select) == "undefined" || row.select == "false" || row.select == false) {
			row.select = "true";
			//$id("listviewdefine0").find(index, "panel1").set("background","#ff8080");
		} else {
			row.select = "false";
			//$id("listviewdefine0").find(index, "panel1").set("background","#ffffff");
		}
		var json = $ctx.getJSONArray("listdetails");
		json[index] = row;
		$ctx.put("listdetails", json)
		$ctx.dataBind();*/
	}

	function com$yyuap$demo$AddUserController$button1_onclick(sender, args) {
		var json = $ctx.getJSONArray("listdetails");
		$view.closeWithCallBack({
			"newdata" : json
		})
	}

function com$yyuap$demo$AddUserController$label1_onclick(sender, args){

}	com.yyuap.demo.AddUserController.prototype = {
    label1_onclick : com$yyuap$demo$AddUserController$label1_onclick,
		button1_onclick : com$yyuap$demo$AddUserController$button1_onclick,
		onclick : com$yyuap$demo$AddUserController$onclick,
		rowclick : com$yyuap$demo$AddUserController$rowclick,
		button0_onclick : com$yyuap$demo$AddUserController$button0_onclick,
		listviewdefine0_onload : com$yyuap$demo$AddUserController$listviewdefine0_onload,
		initialize : com$yyuap$demo$AddUserController$initialize,
		evaljs : com$yyuap$demo$AddUserController$evaljs
	};
	com.yyuap.demo.AddUserController.registerClass('com.yyuap.demo.AddUserController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
