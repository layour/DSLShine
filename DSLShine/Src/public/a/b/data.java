package a.b;

import com.yonyou.um.webmvc.controller.UMController;

public class data extends UMController{
	public String getData(){
		//this.getClientData("key");   //all data
		
		Object dd = this.getParaFromClient("mydata");
		//return "{result:\"hello,uap mobile.data is:"+dd+"\"}";
		return "{result:"+dd+"}";
	}
}
