var strUrl=document.getElementById("Text");
$.get("/markdown/"+strUrl+".md",function(data){
	var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
 	document.getElementById("Text").innerHTML=html;}
);
function putfile(text)
{
	
}