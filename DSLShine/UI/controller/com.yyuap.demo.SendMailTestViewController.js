//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.SendMailTestViewController');
	com.yyuap.demo.SendMailTestViewController = function() {
		com.yyuap.demo.SendMailTestViewController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$SendMailTestViewController$initialize() {
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

	function com$yyuap$demo$SendMailTestViewController$evaljs(js) {
		eval(js)
	}

	function com$yyuap$demo$SendMailTestViewController$button0_onclick(sender, args) {
		$view.close();
	}

	function com$yyuap$demo$SendMailTestViewController$viewPage0_onload(sender, args) {
		var new_div1 = $document.createElement("div");
		new_div1.set("id", "panel0")
		new_div1.set("width", "fill")
		new_div1.set("height", "wrap")
		new_div1.set("heightWrap", "80")
		new_div1.set("margin-top", 20);
		new_div1.set("layout", "hbox");
		new_div1.set("valign", "center");
		new_div1.set("halign", "right");
		new_div1.set("background", "#ffffff");
		$id("viewPage0").appendChild(new_div1);

		var new_div2 = $document.createElement("div");
		new_div2.set("id", "panel4")
		new_div2.set("width", "0")
		new_div2.set("height", "wrap")
		new_div2.set("heightWrap", "60")
		new_div2.set("weight", "1")
		new_div2.set("layout", "vbox");
		new_div2.set("valign", "center");
		new_div2.set("halign", "center");
		$id("panel0").appendChild(new_div2);

		var new_div3 = $document.createElement("input");
		new_div3.set("id", "button2")
		new_div3.set("class", "textbtnclass")
		new_div3.set("type", "button")
		new_div3.set("onclick", "open()")
		new_div3.set("width", "44")
		new_div3.set("height", "44")
		new_div3.set("margin-right", 8)
		new_div3.set("background", "#0000ff");
		new_div3.set("value", "增加")
		//new_div3.set("pressed-image", "app.png");
		//new_div3.set("background-image", "app.png");
		$id("panel0").appendChild(new_div3);
		
		tempnum = $cache.read("tempnum");
		if(tempnum == "null" || tempnum == null){
			$cache.write("tempnum",0);
		}
		
		
		/*	var new_image1 = $document.createElement("image");
		 new_image1.set("id", "image3")
		 new_image1.set("width", "44")
		 new_image1.set("height", "44")
		 new_image1.set("scaletype", "#fitcenter")
		 new_image1.set("src", "app.png");
		 //new_image1.set("onclick", "button2_onclick()")
		 $id("panel0").appendChild(new_image1);

		 var new_div4 = $document.createElement("div");
		 new_div4.set("id", "divider1")
		 new_div4.set("width", "fill")
		 new_div4.set("height", "1")
		 new_div4.set("background", "#c0c0c0")
		 new_div4.set("margin-left", 54);
		 new_div4.set("layout", "hbox");
		 new_div4.set("valign", "center");
		 new_div4.set("halign", "left");
		 $id("viewPage0").appendChild(new_div4);

		 var new_div5 = $document.createElement("div");
		 new_div5.set("id", "panel1")
		 new_div5.set("width", "fill")
		 new_div5.set("height", "80")
		 new_div5.set("layout", "hbox");
		 new_div5.set("valign", "center");
		 new_div5.set("halign", "right");
		 new_div5.set("background", "#cc1234");
		 $id("viewPage0").appendChild(new_div5);

		 var new_div6 = $document.createElement("div");
		 new_div6.set("id", "panel44")
		 new_div6.set("width", "100")
		 new_div6.set("height", "60")
		 //new_div6.set("heightWrap", "60")
		 //new_div6.set("weight", "1")
		 new_div6.set("layout", "vbox");
		 new_div6.set("valign", "center");
		 new_div6.set("halign", "center");
		 new_div6.set("background", "#fff6f8");
		 $id("panel1").appendChild(new_div6);

		 var new_div7 = $document.createElement("input");
		 new_div7.set("id", "button22")
		 new_div7.set("class", "textbtnclass")
		 new_div7.set("type", "button")
		 new_div7.set("onclick", "button2_onclick()")
		 new_div7.set("width", "44")
		 new_div7.set("height", "44")
		 new_div7.set("margin-right", 8);
		 new_div7.set("background", "#00ff00");
		 new_div7.set("value", "增加")
		 $id("panel1").appendChild(new_div7);

		 var new_image8 = $document.createElement("image");
		 new_image8.set("id", "image33")
		 new_image8.set("width", "44")
		 new_image8.set("height", "44")
		 new_image8.set("scaletype", "#fitcenter")
		 new_image8.set("src", "app.png");
		 new_image8.set("onclick", "button2_onclick()")
		 $id("panel1").appendChild(new_image8);

		 var new_div11 = $document.createElement("div");
		 new_div11.set("id", "divider2")
		 new_div11.set("width", "fill")
		 new_div11.set("height", "1")
		 new_div11.set("background", "#c0c0c0")
		 new_div11.set("margin-left", 54);
		 new_div11.set("layout", "hbox");
		 new_div11.set("valign", "center");
		 new_div11.set("halign", "left");
		 $id("viewPage0").appendChild(new_div11);*/
	}

	var i = 0;
	var j = 0;
	function button2_onclick(sender, args) {
		//$alert("xxx");
		var new_label1 = $document.createElement("label");
		new_label1.set("id", "label100" + i)
		new_label1.set("width", "100")
		//new_label1.set("weight", "1")
		new_label1.set("height", "20")
		new_label1.set("halign", "left")
		new_label1.set("color", "#000000")
		//new_label1.set("heightWrap", "14.0")
		new_label1.set("font-size", "14")
		new_label1.set("font-family", "default")
		new_label1.set("valign", "center")
		new_label1.set("text", "飞行模式")
		new_label1.set("margin-left", "10")
		new_label1.set("background", "#00ff00")
		$id("panel44").appendChild(new_label1);
		i++;
	}

	function open() {
		$view.open({
			"viewid" : "com.yyuap.demo.AddUser", //目标页面（首字母大写）全名，
			"isKeep" : "true", //保留当前页面不关闭
			"callback" : "mycallback()"//回调的JS方法
		});
	}

	var listtemp;
	var list =[];
	var tempnum;
	function mycallback() {
		list = [];
		listtemp = $param.getJSONArray("newdata");
		tempnum = $cache.read("tempnum");
		for (var i = 0, tempnum = 0; i < listtemp.length; i++) {
			if (listtemp[i].select == true || listtemp[i].select == "true") {
				//$alert("tempnum:"+tempnum);
				list[tempnum] = listtemp[i];
				tempnum++;
				$cache.write("tempnum", tempnum);
			}
		}
		add();
	}

	var index = 1;
	function getSeq() {
		index++;
		return index;
	}

	var div_index = 1;
	function getDivSeq() {
		div_index++;
		return div_index;
	}

	//var count = 0;
	var container;
	var userMap;
	function add() {
		var count = 0;
		$id("panel4").removeAllChild();
		userMap = {};
		
		container = "userlistdiv" + getDivSeq();
		addContainer(container);

		for (var i = 0; i < list.length; i++) {

			if (count > 2) {
				container = "userlistdiv" + getDivSeq();
				addContainer(container);
				count = 0;
			}
			var ctlid = "userlabel" + getSeq();
			userMap[ctlid] = {
				"name" : list[i].name,
				"index" : i
			}
			addItem(container, ctlid, list[i].name, count != 0);
			count++;

		}
	}

	function addItem(cc, ctlid, text, isPadding) {
		if (isPadding) {
			var new_label1 = $document.createElement("label");
			new_label1.set("id", "xx" + ctlid)
			new_label1.set("width", "10")
			new_label1.set("height", "40")
			new_label1.set("background", "#ffffff")
			$id(cc).appendChild(new_label1);
		}
		var new_label1 = $document.createElement("label");
		new_label1.set("id", ctlid)
		new_label1.set("width", "90")
		new_label1.set("height", "40")
		new_label1.set("halign", "left")
		new_label1.set("color", "#000000")
		new_label1.set("valign", "center")
		new_label1.set("text", text)
		new_label1.set("background", "#C9E1ED")
		new_label1.set("onclick", "removeItem()")
		$id(cc).appendChild(new_label1);
	}

	function removeItem(sender, args) {
		var user = userMap[sender];
		$alert("user.index:" + user.index);
		if (confirm("确定删除用户 '" + user.name + "' 吗？")) {
			list.splice(user.index, 1);
			add();
		}

	}

	function addContainer(name) {
		var new_div11 = $document.createElement("div");
		new_div11.set("id", name)
		new_div11.set("width", "fill")
		new_div11.set("height", "44")
		new_div11.set("background", "#ffffff")
		new_div11.set("layout", "hbox");
		new_div11.set("valign", "center");
		new_div11.set("halign", "left");
		$id("panel4").appendChild(new_div11);
	}

	function button22_onclick(sender, args) {
		//$alert("yyy");
		var new_label1 = $document.createElement("label");
		new_label1.set("id", "label200" + j)
		new_label1.set("width", "100")
		//new_label1.set("weight", "1")
		new_label1.set("height", "20")
		new_label1.set("halign", "left")
		new_label1.set("color", "#000000")
		//new_label1.set("heightWrap", "14.0")
		new_label1.set("font-size", "14")
		new_label1.set("font-family", "default")
		new_label1.set("valign", "center")
		new_label1.set("text", "飞行模式")
		new_label1.set("margin-left", "10")
		new_label1.set("background", "#00ff00")
		$id("panel4").appendChild(new_label1);
		j++;
	}


	com.yyuap.demo.SendMailTestViewController.prototype = {
		viewPage0_onload : com$yyuap$demo$SendMailTestViewController$viewPage0_onload,
		button0_onclick : com$yyuap$demo$SendMailTestViewController$button0_onclick,
		initialize : com$yyuap$demo$SendMailTestViewController$initialize,
		evaljs : com$yyuap$demo$SendMailTestViewController$evaljs
	};
	com.yyuap.demo.SendMailTestViewController.registerClass('com.yyuap.demo.SendMailTestViewController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
