
$.get("/markdown/main.md",function(data){
	var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
 	document.getElementById("main").innerHTML=html;}
);
	