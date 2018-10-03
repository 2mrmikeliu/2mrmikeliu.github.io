function read(data)
{

var strr="index.top"
$.get("/topic/"+strr[0],function(data){
	var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
 	document.write("<h1>"+html+"<h1>");
	document.title(html);
	}
	
);
}
