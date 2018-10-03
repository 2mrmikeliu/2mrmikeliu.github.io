function chk(data)
{
	var text =$("#"+data).val();
$.get("/markdown/"+text+".md",function(data){
 	document.getElementById("Text").innerHTML=data;}
);
}
function putfile(data)
{
	alert("请在github界面中提交Pull Requests并等待管理员审核！");
	window.location.href="https://github.com/2mrmikeliu/2mrmikeliu.github.io/blob/master/markdown/"+document.getElementById("Text").innerHTML;
}