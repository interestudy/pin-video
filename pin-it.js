var html_b =  " <fieldset class='my_fieldset' style='font-size:30px;z-index:9999999999999999999; padding-left:0px; padding-right:0px;padding-top: 5px; padding-bottom:5px; color:#005CFF; border:none; position:fixed;margin-top:0; margin-left:0px;background:#65a9d7; text-align:center; width:100%;'><span style=' vertical-align:-3px; display:inline-block;'>时间:</span><input class='pin_time' type='input' style='width:10%; height:50px;'><span style=' vertical-align:-3px; display:inline-block;'>评价:</span><input class='pin_say' style='width:60%; height:50px; '><div class='pingoit' style=' background:#E419AB; border:none; padding-left:40px;padding-right:40px; padding-top:10px;padding-bottom:10px; font-size:30px; color:white; display:inline-block; vertical-align:-6px;cursor:pointer; margin-left:10px;'>分享</div><span class='pin_no' style='margin-left:25px;cursor:pointer;font-size:20px;color:#865898;'>x</span></fieldset> ";


//检测视频来源
var url_now = window.location.href;
if(url_now.indexOf("youku") != -1){
          
          $('body').prepend(html_b);

}

$(".pin_no").live("click",function(){
  $(".my_fieldset").remove();
});
          
$('.pingoit').live('click',function(){ 
          var flashvars_value = $("param[name='flashvars']").attr('value');
          var nums = flashvars_value.indexOf('&');
          var video_id = flashvars_value.substring(0,nums);
          var video_time = $(".pin_time").val(); 
          var video_comment = $(".pin_say").val(); 
          var video_title = $("#subtitle").html();
          
          // var my_url = "http://soulmorning.com/GoBackstage"
          //           + "?" + video_id
          //           + "&video_time=" + video_time
          //           + "&video_comment=" + video_comment
          //           + "&video_title=" + video_title
          //           + "&urlencoding=utf-8";
          
                    
                              
          var my_url = "localhost:8080/v/GoBackstage"
                    + "?" + video_id
                    + "&video_time=" + video_time
                    + "&video_comment=" + video_comment
                    + "&video_title=" + video_title
                    + "&urlencoding=utf-8";
                    
          if($.trim(video_time).length <= 0 || $.trim(video_comment).length <= 0 ){
                    alert("输入你分享的那么时间点——————以及你想说些什么");
          }else{
                    window.open(my_url);
          }
          
 });

