var html_b =  " <fieldset class='my_fieldset' style='font-size:30px;z-index:9999999999999999999; padding-left:0px; padding-right:0px;padding-top: 5px; padding-bottom:5px; color:#FFF; border:none; position:fixed;margin-top:0; margin-left:0px;background:#272A31; text-align:center; width:100%;'><span style=' vertical-align:-3px; display:inline-block;'>时间:</span><input class='pin_time' type='input' style='width:10%; font-size:25px;height:50px;'><span style=' vertical-align:-3px; display:inline-block;'>评价:</span><input class='pin_say' style='width:60%; height:50px; font-size:25px; '><div class='pingoit' style=' background:#B95A52; border:none; padding-left:40px;padding-right:40px; padding-top:15px;padding-bottom:15px; font-size:30px; color:white; display:inline-block; vertical-align:-3px;cursor:pointer; margin-left:10px;'>分享</div><span class='pin_no' style='margin-left:25px;cursor:pointer;font-size:30px;color:#FFF;'>x</span></fieldset> ";
// alert($("div##vpvideotitlev5_wrap .title").html());
// alert($("div#vpvideotitlev5 h1").html());
// alert($("#vpvideotitlev5_wrap h1").children('a').length  +　$("#vpvideotitlev5_wrap h1 a").html()); 
   
//检测视频来源
var url_now = window.location.href; 
if(url_now.indexOf("youku") != -1 && url_now.indexOf(".html") != -1){
          
          $('body').prepend(html_b);

}

$(".pin_no").live("click",function(){
  $(".my_fieldset").remove();
});
          
$('.pingoit').live('click',function(){ 
          var vid_f = url_now.indexOf('id_')+3;
          var vid_last = url_now.indexOf('.html');
          var video_id =  'VideoIDS=' + url_now.substring(vid_f,vid_last); 
          if(video_id === null){
                var flashvars_value = $("param[name='flashvars']").attr('value');
                var nums = flashvars_value.indexOf('&'); 
                video_id = flashvars_value.substring(0,nums);  
          }
 
          var video_time = $(".pin_time").val(); 
          var video_comment = $(".pin_say").val();
          var video_title = null; 
          
          
        
          
          //辨别优酷标题的三种写法
          
          var _h1_a = $("#vpofficialtitlev5_wrap h1 a"); 
          var _h1_span = $("#vpofficialtitlev5_wrap h1 span");
          if($("#vpofficialtitlev5_wrap").length == 1){
              if( _h1_a.length == 1 && _h1_span.length == 0 ){
                  video_title = $("#vpofficialtitlev5_wrap h1 a").html();
              }else
              if(_h1_a.length == 0 && _h1_span.length == 1){
                  video_title = $("#vpofficialtitlev5_wrap h1 span").html();
              }else
              if(_h1_a.length == 1 && _h1_span.length == 1){
                  video_title = $("#vpofficialtitlev5_wrap h1 a").html() + $("#vpofficialtitlev5_wrap h1 span").html();   
              }
          }else 
          if($("#vpvideotitlev5_wrap").length == 1){
             if($("#vpvideotitlev5_wrap h1 span").length == 0){
                
               video_title = $("#vpvideotitlev5_wrap h1").html(); 
             }else
             if(video_title = $("#vpvideotitlev5_wrap h1 span") == 1){
                
                video_title = $("#vpvideotitlev5_wrap h1 span").html(); 
             }
              
          }
          
          // alert(video_title);

          var my_url = "http://boosor.com/GoBackstage"
                   + "?" + video_id
                   + "&video_time=" + video_time
                   + "&video_comment=" + video_comment
                   + "&video_title=" + video_title
                   + "&urlencoding=utf-8";
          
                    
                              
         //  var my_url = "localhost:8080/v/GoBackstage"
         //             + "?" + video_id
         //             + "&video_time=" + video_time
         //             + "&video_comment=" + video_comment
         //             + "&video_title=" + video_title
         //             + "&urlencoding=utf-8";
                    
          if($.trim(video_time).length <= 0 || $.trim(video_comment).length <= 0 ){
                    alert("输入你分享的那么时间点———以及你想说些什么");
          }else{
                    window.open(my_url);
          }
          $('.my_fieldset').remove();
 });

