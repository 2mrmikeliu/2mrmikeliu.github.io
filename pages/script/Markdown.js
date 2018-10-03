var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
var strr=strPage.split(".");
$.get("/markdown/"+strr[0]+".md",function(data){
	
	 var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
 	document.getElementById("result").innerHTML=html;});
	