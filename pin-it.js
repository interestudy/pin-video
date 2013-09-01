
if (navigator.appName.indexOf("Microsoft Internet")==-1) {
    if (document.embeds && document.embeds[id]){
    	if(navigator.userAgent.indexOf("Firefox")>0){
    		chartRef = document.embeds[id];
    	}else{
    		chartRef = window[id];
    	}
    }
	else{
		chartRef  = window.document[id];
	}
	     
  }
  else {                  
    chartRef = window[id];
  }
        
        alert("ok");
   
    
   


