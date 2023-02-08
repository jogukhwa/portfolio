

$("document").ready(function(){


    $(".fullpage").fullpage({
        navigation: true,
        // navigationPosition: "left"
        navigationTooltips: ["intro","previous life", "like - travel", "hello future"],
        anchors: ["intro","pre", "travel", "future"],
        onLeave: function(origin, destination, direction){
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination-1).addClass("on")
            //해당 구역을 떠나고 새로운 구역으로 이동하는 도중에 실행
            //origin -  활성화된 구역
            //destination - 목적지 구역
            //direction -  마우스 휠 방향
            //index - 해당 구역의 번호
        },
        afterLoad:function(origin, destination){
            //새로운 구역으로 완전히 도착 이후 실행
            $(".nav ul li").removeClass("on").eq(destination-1).addClass("on")
            console.log(destination)
        },
        slidesNavigation: true
    })


    // let typed = new Typed("#typed1",{
    //     stringsElement: "#typed",
    //     typeSpeed: 100,
    // })

    //여행구간

    $travel = $(".section .country .container");
    $travel_name = $(".section .country .name");

    $travel.mouseover(function(){
        let i = $travel.index(this)
        $travel_name.eq(i).addClass("on")
        $travel.eq(i).addClass("active")
    }).mouseout(function(){
        let i = $(this).index()
        $travel_name.removeClass("on")
        $travel.removeClass("active")
    })


    $("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );


})
