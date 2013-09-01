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
 
 function StopFlashMovie()
{
	var flashMovie=getFlashMovieObject("movie_player");
	flashMovie.StopPlay();
}

function PlayFlashMovie()
{
	var flashMovie=getFlashMovieObject("Myflash");
	flashMovie.Play();
	//embed.nativeProperty.anotherNativeMethod();
}

StopFlashMovie();alert("ok");

// function RewindFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	flashMovie.Rewind();
// }

// function NextFrameFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	// 4 is the index of the property for _currentFrame
// 	var currentFrame=flashMovie.TGetProperty("/", 4);
// 	var nextFrame=parseInt(currentFrame);
// 	if (nextFrame>=9)
// 		nextFrame=0;
// 	flashMovie.GotoFrame(nextFrame);		
// }


// function ZoominFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	flashMovie.Zoom(90);
// }

// function ZoomoutFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	flashMovie.Zoom(110);
// }


// function SendDataToFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	flashMovie.SetVariable("/:mytext", document.getElementById("data").value);
// }

// function ReceiveDataFromFlashMovie()
// {
// 	var flashMovie=getFlashMovieObject("Myflash");
// 	document.getElementById("data").value=flashMovie.GetVariable("/:mytext");
// 	//document.controller.Data.value=message;
// }




