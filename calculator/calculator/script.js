

$(function(){

    // when a value is clicked
    $(".val").click(function(e){
      // prevent the link from acting like a link
      e.preventDefault();
      //grab this link's href value
        var a = $(this).attr("href");
      // append said value to the screen
          $(".screen").append(a);
      // append same value to a hidden input
          $(".outcome").val($(".outcome").val() + a);
          
      });
    // when equals is clicked
      $(".equal").click(function(){
      // solve equation and put in hidden field
          $(".outcome").val(eval($(".outcome").val()));
      // take hidden field's value & put it on screen
          $(".screen").html(eval($(".outcome").val()));
      });
    // clear field
      $(".clear").click(function(){
          $(".outcome").val("");
          $(".screen").html("");
      });
    // minimize (looks kinda cool?)
      $(".min").click(function(){
          $(".cal").stop().animate({
              width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"
          }, 500);
          setTimeout(function(){$(".cal").css("display", "none")}, 600);
      });
    //close window. refresh to get back
      $(".close").click(function(){
          $(".cal").css("display", "none");
      })
  })