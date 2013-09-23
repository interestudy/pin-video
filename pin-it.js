var html_b =  " <fieldset  style='font-size:30px;z-index:10000000000000000000; padding-left:0px; padding-right:0px;padding-top: 5px; padding-bottom:5px; color:#005CFF; border:none; position:fixed;margin-top:0; margin-left:0px;background:#65a9d7; text-align:center; width:100%;'><span style=' vertical-align:-3px; display:inline-block;'>时间:</span><input class='pin_time' type='input' style='width:10%; height:50px;'><span style=' vertical-align:-3px; display:inline-block;'>评价:</span><input class='pin_say' style='width:60%; height:50px; '><div class='pingoit' style=' background:#E419AB; border:none; padding-left:40px;padding-right:40px; padding-top:10px;padding-bottom:10px; font-size:30px; color:white; display:inline-block; vertical-align:-6px;cursor:pointer; margin-left:10px;'>分享</div><span style='margin-left:5px;'>x</span></fieldset> ";

alert(html_b);
$('body').prepend(html_b);

var num = Math.round(Math.random()*1000000000);

var my_url = "http://soulmorning.com/GoBackstage";
          // + "?url=" +　"sdasda";

$('.pingoit').live('click',function(){ 
           alert('ok');
           window.open(my_url);
           // $.get('http://soulmorning.com/GoBackstage',{pin_time:$('.pin_time'); pin_say:$('.pin_say');numb:num;},function(returnedData){

           // });
});


