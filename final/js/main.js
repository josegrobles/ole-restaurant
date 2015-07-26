$(document).ready(function(){
       $('#LAboutUS p').animate({"margin-top":"55px"});
       $('.Services').css({"margin-left":"-250px"});
       $('.caption-services').css({"position":"relative"});
       $('.caption-services').css({"z-index":"-5000"});
       $('.caption-services').css({"top":"450px"});
       $('#foodselector').css({"bottom":"-100px"});
        $('#eventslist i').css({"top":"200px"});
       $('#maindishes').hide();
       $('#drinks').hide();
       $('#deserts').hide();
       $('.starters').addClass("foodborder");
        $('#feed').rssfeed('http://feeds.reuters.com/reuters/oddlyEnoughNews',{
    limit: 6,
    content: false,
    header: false,
    dateformat: 'dd/MM'
  });
//first you grab the click event for the button(s)
$(".foodselector-li").click(function(){

    //we remove all the borders from all the buttons
    $(".foodselector-li").removeClass("foodborder ");

    //Now we add the border to the button that's been clicked
    $(this).addClass("foodborder");

});
  $('.starters').click(function(){
       $('#maindishes').hide();
       $('#drinks').hide();
       $('#deserts').hide();       
       $('#starters').fadeIn();       
  });
    $('.maindishes').click(function(){
       $('#maindishes').fadeIn();
       $('#drinks').hide();
       $('#deserts').hide();       
       $('#starters').hide();       
  });
    $('.drinks').click(function(){
       $('#maindishes').hide();
       $('#drinks').fadeIn();
       $('#deserts').hide();       
       $('#starters').hide();       
  });
    $('.deserts').click(function(){
       $('#maindishes').hide();
       $('#drinks').hide();
       $('#deserts').fadeIn();       
       $('#starters').hide();       
  });
});
$(document).scroll(function(){
    if($(this).scrollTop() > 1304)
    {   
       $('#foodselector').animate({"bottom":"5px"});
    }
});
$(document).scroll(function(){
    if($(this).scrollTop() > 2204)
    {   
       $('#eventslist i').animate({"top":"-20px"});
    }
});
function scroll_style() {
   var window_top = $(window).scrollTop();
   var div_top = $('#LAboutUS').offset().top;

   if (window_top > div_top){
      $('#top').animate({backgroundColor:"rgba(246,246,247,0.5)"}, 500);

  $("#top").hover(function(){
      $('#top').animate({backgroundColor:"rgba(246,246,247,1.0)"}, 500);
      },function(){
      $('#top').animate({backgroundColor:"rgba(246,246,247,0.5)"}, 500);
      });
   }
   else{
      $('#top').css({"background":"rgba(246,246,247,1.0)"});
   }
}
$(function() {
  $(window).scroll(scroll_style);
  scroll_style();
 });
$(document).scroll(function(){
    if($(this).scrollTop() > 504)
    {   
     $('.Services').animate({"margin-left":"150px"});
     $('.caption-services').animate({"top":"-0px"});
     $('.caption-services').css({"z-index":"10"});
   }
});


