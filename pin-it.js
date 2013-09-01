// alert(window.document['myMovie']);
// alert(document.getElementById('myMovie'));
// alert(document.embeds);
// alert(document.embeds['myMovie']);
// document.embeds['flashvars'].StopPlay();
 
 // var mymovie = $("#Myflash");
// var flash = document.getElementById("Myflash");
// flash.Play();
// alert("ok");

function getFlashMovieObject(movieName)
{
if (window.document[movieName]) 
{
return window.document[movieName];
}
if (navigator.appName.indexOf("Microsoft Internet")==-1)
{
if (document.embeds && document.embeds[movieName])
return document.embeds[movieName]; 
}
else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
{
return document.getElementById(movieName);
}
}



var flash = getFlashMovieObject("myMovie");
alert(flash);
document.myMovie.StopPlay();
alert("ok");
