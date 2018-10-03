function read(data)
{
var strr="index.top"
$.get("/markdown/"+strr[0],function(data){
	var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
 	document.write("<h1>"+html+"<h1>");}
);
}
