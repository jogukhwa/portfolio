$("document").ready(function(){
    AOS.init();


    //기본 카드 구성

    let work_list = [
        design = {
            id : 1,
            img : "/images/card-re-01-1.png",
            number : "1",
            title : "gentle monster"
        },
        {
            id : 2,
            img : "/images/card-re-02-1.png",
            number : "2",
            title : "carhatt"
        },
        {
            id : 3,
            img : "/images/card-re-03.jpg",
            number : "3",
            title : "staub"
        },
        {
            id : 4,
            img : "/images/card-re-04.png",
            number : "4",
            title : "subway"
        }
    ]
    for (let k = 0; k < work_list.length; k++){
        let html = ""; //+= 변수의 값을 여러개 합칠 때 사용
        html += "<div class='card-box hvr-pop' data-aos='zoom-in-right'>";
        html += "<div class='image'>"
        html += "<img src="+work_list[k].img+" alt="+work_list[k].title+">"
        html += "</div>";
        html += "<p>"+work_list[k].number+"</p>"
        html += "<h3>"+work_list[k].title+"</h3>"
        html += "</div>";
        $(".tab-content-wrap .tab-content .card-list").append(html)
    }

    //카드 디테일 페이지

    let work_detail = [
        design = {
            id: 1,
            img : "/images/card-re-01.png",
            title: "gentle monster",
            desc: "eyewear brand",
            highlight: " redesign ",
            color : "color : ",
            font : "font : Noto Sans KR",
            tools : "tools : PS, VS CODE",
            period : "period : 6days (design - 2days /  publishing - 4days)",
            contribution : "contribution : 100% (Responsive Web)",
            original: "https://www.gentlemonster.com/kr/",
            redesign: "https://jogukhwa.github.io/gentle-monster-re-design/",
            process:""
        },
        {
            id: 2,
            img : "/images/card-re-02.png",
            title: "carhatt",
            desc: "street fashion brand",
            highlight: " redesign ",
            color : "color : ",
            font : "font : Leferi Type",
            tools : "tools : PS, AI, VS CODE",
            period : "period : 4days (design - 1days /  publishing - 3days)",
            contribution : "contribution : 100%",
            original: "https://www.carhartt-wip.co.kr/",
            redesign: "https://jogukhwa.github.io/carhartt_re_design/",
            process:""
        },
        {
            id: 3,
            img : "/images/card-re-03.png",
            title: "staub",
            desc: "cookware brand",
            highlight: " redesign ",
            color : "color : ",
            font : "font : NanumSquare, S-Core Dream",
            tools : "tools : PS, VS CODE",
            period : "period : 4days (design - 1days /  publishing - 3days)",
            contribution : "contribution : 100%",
            original: "https://zwilling.kr/",
            redesign: " https://jogukhwa.github.io/staub-re-design/",
            process:""
        },
        {
            id: 4,
            img : "/images/card-re-04.png",
            title: "subway",
            desc: "sandwich brand",
            highlight: " redesign ",
            color : "color : ",
            font : "font : S-Core Dream",
            tools : "tools : PS, AI, VS CODE",
            period : "period : 5days (design - 2days /  publishing - 3days)",
            contribution : "contribution : 100% (Responsive Web)",
            original: "https://www.subway.co.kr/",
            redesign: "https://jogukhwa.github.io/subway_re_design/",
            process:""
        }
    ]


    for (let i = 0; i < work_detail.length; i++){
        let detail = "";
        detail += "<div class= 'detail-content-wrap' data-aos='fade-up' data-aos-duration='2000'>"
        detail += "<div class= 'detail-content'>"
        detail += "<div class= 'detail-left'>"
        detail += "<div class= 'image'>"
        detail += "<img src="+work_detail[i].img+" alt="+work_detail[i].title+">"
        detail += "</div>"
        detail += "</div>"
        detail += "<div class= 'detail-right'>"
        detail += "<div class= 'work-content'>"
        detail += "<div class='work-desc'>"
        detail += "<h3>"+work_detail[i].title+"</h3>"
        detail += "<p>"+work_detail[i].desc+"<span>"+work_detail[i].highlight+"</span>"+"</p>"
        detail += "<p>"+work_detail[i].color+"<span>"+"</span>"+"<span>"+"</span>"+"</p>"
        detail += "<p>"+work_detail[i].font+"</p>"
        detail += "<p>"+work_detail[i].tools+"</p>"
        detail += "<p>"+work_detail[i].period+"</p>"
        detail += "<p>"+work_detail[i].contribution+"</p>"
        detail += "<div class='btn-wrap'>"
        detail += "<ul>"
        detail += "<li>"
        detail += "<a href="+work_detail[i].original+" target='_blank'>"+'original'+"</a>"
        detail += "</li>"
        detail += "<li>"
        detail += "<a href="+work_detail[i].redesign+" target='_blank'>"+'redesign'+"</a>"
        detail += "</li>"
        detail += "<li>"
        detail += "<a href="+work_detail[i].process+">"+'process'+"</a>"
        detail += "</li>"
        detail += "</div>"
        detail += "</div>"
        detail += "</div>"
        detail += "</div>"
        detail += "</div>"
        detail += "</div>";
        $(".tab-content-wrap .tab-content .card-detail").append(detail)
    }

    
    $sel_card = $(".tab-content-wrap .tab-content .card-box");
    $card_detail = $(".tab-content-wrap .tab-content .card-detail .detail-content-wrap");
    
    let use_color_1= [
        "#fff",
        "#a64b2a",
        "#fff",
        "#ffcf3f"
    ]

    let use_color_2= [
        "#000",
        "#151515",
        "#e3001b",
        "#008939"
    ]

    $card_detail.eq(0).show()
    
    $sel_card.click(function(){
        let a = $(this).index()

        $card_detail.hide().eq(a).show()
        $sel_card.removeClass("on")
        $sel_card.not($(this)).addClass("on")
        $(".detail-right .work-content p:nth-child(3) span:nth-child(1)").css("background-color", use_color_1[a])
        $(".detail-right .work-content p:nth-child(3) span:nth-child(2)").css("background-color", use_color_2[a])
    }).mouseover(function(){
        a = $(this).index()
        $sel_card.eq(a).addClass("active")
    }).mouseout(function(){
        $sel_card.eq(a).removeClass("active")
    })




})