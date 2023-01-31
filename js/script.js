

$(document).ready(function(){ //시작

$(".top_btn").click(function(){
  $("header").animate({
    top : "1460px"
  });
});
  
$(".close").click(function(){
  $("header").animate({
    top : "-1460px"
  });
});

// 모바일 탑 버튼 페이지 이동

$(function(){
  $("a").on("click", function(e){
    e.preventDefault(); // <a>링크 이벤트 차단
  });
}); // <a>링크 이벤트 차단 설정






var menu = $(".nav > li");
var content = $(".bodywrap > section");

menu.click(function(){
  event.preventDefault();
  var idx = $(this).index();
  var section = content.eq(idx);
  var sectH = section.offset().top;
  $("html , body").stop().animate({scrollTop : sectH});
});



$(window).scroll(function(){
  var location = $(window).scrollTop(); // 스크롤의 현재 위치

  // location값이 sect01 영역 안에 있을때 menu1 을 활성화
  // 영역1 <= location < 영역2  -- 우리가 원하는 조건
  // 영역1 <= location  and  location < 영역2 -- 실제 작성
  // and --->  &&
  // 0 번 부터 시작
  // 제이쿼리 플러그인을 사용해서 고난이도의 동작에 활용
  if(location >= $("#sect01").offset().top && location < $("#sect02").offset().top){
    menu.removeClass("on");
    menu.eq(0).addClass("on")
  }else if(location >= $("#sect02").offset().top && location < $("#sect03").offset().top){
    menu.removeClass("on");
    menu.eq(1).addClass("on")
  }else if(location >= $("#sect03").offset().top && location < $("#sect04").offset().top){
    menu.removeClass("on");
    menu.eq(2).addClass("on")
  }else if(location >= $("#sect04").offset().top){
    menu.removeClass("on");
    menu.eq(3).addClass("on")
  }else if(location >= $("#sect05").offset().top){
    menu.removeClass("on");
    menu.eq(4).addClass("on")
  }
  //구문이 반복되어 동작하는 경우 반복문 for , each  반복문의 통해

});`// 상단 nav animate 기능 구현`


$(".wb_1 a > img").click(function(){
  $("#modal1").addClass("active");
  });
  $(".x_btn1").click(function(){
  $("#modal1").removeClass("active");
  });  


  $(".wb_2 a > img").click(function(){
    $("#modal2").addClass("active");
    });
    $(".x_btn2").click(function(){
    $("#modal2").removeClass("active");
    });  
  
    $(".wb_3 a > img").click(function(){
      $("#modal3").addClass("active");
      });
      $(".x_btn3").click(function(){
      $("#modal3").removeClass("active");
      });  
    

      $(".wb_4 a > img").click(function(){
        $("#modal4").addClass("active");
        });
        $(".x_btn4").click(function(){
        $("#modal4").removeClass("active");
        });  
      

        $(".wb_5 a > img").click(function(){
          $("#modal5").addClass("active");
          });
          $(".x_btn5").click(function(){
          $("#modal5").removeClass("active");
          });  
           

          $(".wb_6 a > img").click(function(){
            $("#modal6").addClass("active");
            });
            $(".x_btn6").click(function(){
            $("#modal6").removeClass("active");
            });  
          

}); // 끝


