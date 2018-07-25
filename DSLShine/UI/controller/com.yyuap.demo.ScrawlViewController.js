//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yyuap.demo.ScrawlViewController');
	com.yyuap.demo.ScrawlViewController = function() {
		com.yyuap.demo.ScrawlViewController.initializeBase(this);
		this.initialize();
	}
	function com$yyuap$demo$ScrawlViewController$initialize() {
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

	function com$yyuap$demo$ScrawlViewController$evaljs(js) {
		eval(js)
	}

	function com$yyuap$demo$ScrawlViewController$button0_onclick(sender, args) {
		$view.close();
	}
	var i = 0;
	function com$yyuap$demo$ScrawlViewController$button2_onclick(sender, args) {
		if(i%3 == 0){
			$id("panel0").set("src", "bz1.png");
		}else if(i%3 == 1){
			$id("panel0").set("src", "bz2.png");
		}else if(i%3 == 2){
			$id("panel0").set("src", "bz3.png");
		}
		$id("panel0").set("out","scrawlimage/newpage"+flag+".png");
        flag++;
		i++;
	}

	function com$yyuap$demo$ScrawlViewController$button1_onclick(sender, args) {
		var out = $id("panel0").get("out");
		$alert("out:"+out);
		$id("image0").set("src", out);
	}

var flag = 0;
function com$yyuap$demo$ScrawlViewController$onload(sender, args){
$id("panel0").set("src", "bz3.png");
$id("panel0").set("out","scrawlimage/newpage"+flag+".png");
flag++;
}	com.yyuap.demo.ScrawlViewController.prototype = {
    onload : com$yyuap$demo$ScrawlViewController$onload,
    button1_onclick : com$yyuap$demo$ScrawlViewController$button1_onclick,
		button2_onclick : com$yyuap$demo$ScrawlViewController$button2_onclick,
		button0_onclick : com$yyuap$demo$ScrawlViewController$button0_onclick,
		initialize : com$yyuap$demo$ScrawlViewController$initialize,
		evaljs : com$yyuap$demo$ScrawlViewController$evaljs
	};
	com.yyuap.demo.ScrawlViewController.registerClass('com.yyuap.demo.ScrawlViewController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
