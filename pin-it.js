var html_b =  " <fieldset class='my_fieldset' style='font-size:30px;z-index:9999999999999999999; padding-left:0px; padding-right:0px;padding-top: 5px; padding-bottom:5px; color:#FFF; border:none; position:fixed;margin-top:0; margin-left:0px;background:rgb(179, 20, 147); text-align:center; width:100%;'><span style=' vertical-align:-3px; display:inline-block;'>时间:</span><input class='pin_time' type='input' style='width:10%; font-size:25px;height:50px;'><span style=' vertical-align:-3px; display:inline-block;'>评价:</span><input class='pin_say' style='width:60%; height:50px; font-size:25px; '><div class='pingoit' style=' background:#555; border:none; padding-left:40px;padding-right:40px; padding-top:15px;padding-bottom:15px; font-size:30px; color:white; display:inline-block; vertical-align:-3px;cursor:pointer; margin-left:10px;'>分享</div><span class='pin_no' style='margin-left:25px;cursor:pointer;font-size:30px;color:#FFF;'>x</span></fieldset> ";
// alert($("div##vpvideotitlev5_wrap .title").html());
// alert($("div#vpvideotitlev5 h1").html());
// alert($("#vpvideotitlev5_wrap h1").children('a').length  +　$("#vpvideotitlev5_wrap h1 a").html()); 
    var _h1 =  $("#vpvideotitlev5_wrap h1").html();alert(_h1 + "_h1");
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
          var _h1_a =  $("div#vpvideotitlev5_wrap h1 a").length;alert(_h1_a + "_h1_a");
          var _h1_children = $("#vpvideotitlev5_wrap h1").children().length;alert( _h1_children + "_h1");
          var _h1_span = $("#vpvideotitlev5_wrap h1").children("span").length;alert(_h1_span + "_h1_span");
           var _h1 =  $("#vpvideotitlev5_wrap h1").length;alert(_h1 + "_h1");
           
          if(_h1_children > 0){
                  if(_h1_span > 0 && _h1_a > 0){
                            video_title = $("#vpvideotitlev5_wrap h1 a").html() + $("#vpvideotitlev5_wrap h1 span").html();
                  } else
                  if(_h1_span > 0 && _h1_a <= 0){
                            video_title = $("#vpvideotitlev5_wrap h1 span").html();
                  } else
                  if(_h1_span <= 0 && _h1_a > 0){
                            video_title = $("#vpvideotitlev5_wrap h1 a").html();
                  }
          }else 
          if( _h1_children == 0){alert('adad');
                    video_title = $("#vpvideotitlev5_wrap h1").html();
          }

          alert(video_title);

           

          var my_url = "http://boosor.com/GoBackstage"
                    + "?" + video_id
                    + "&video_time=" + video_time
                    + "&video_comment=" + video_comment
                    + "&video_title=" + video_title
                    + "&urlencoding=utf-8";
          
                    
                              
          // var my_url = "localhost:8080/v/GoBackstage"
          //           + "?" + video_id
          //           + "&video_time=" + video_time
          //           + "&video_comment=" + video_comment
          //           + "&video_title=" + video_title
          //           + "&urlencoding=utf-8";
                    
          if($.trim(video_time).length <= 0 || $.trim(video_comment).length <= 0 ){
                    alert("输入你分享的那么时间点———以及你想说些什么");
          }else{
                    window.open(my_url);
          }
          
 });

