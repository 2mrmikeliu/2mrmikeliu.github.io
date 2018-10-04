function topic()
{	var strUrl=window.location.href;
	var arrUrl=strUrl.split("/");
	var strPage=arrUrl[arrUrl.length-1];
	var strr=strPage.split(".");
	document.title=strr[0];
	$.get("/topic/"+strr[0]+".top",function(data){

	document.getElementById("topic").innerHTML=('<h1 style="text-align: center;">'+data+'</h1>');
	});
}