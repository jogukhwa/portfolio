$("document").ready(function(){
    AOS.init();


    //기본 카드 구성

    let work_list = [
        design = {
            id : 1,
            img : "/images/card-wk-01.png",
            number : "1",
            title : "loewe solo"
        },
        {
            id : 2,
            img : "/images/card-wk-02-1.png",
            number : "2",
            title : "app-design"
        },
        {
            id : 3,
            img : "/images/card-wk-03-1.png",
            number : "3",
            title : "logo"
        },
        {
            id : 4,
            img : "/images/card-wk-04-1.png",
            number : "4",
            title : "package"
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
            img : "/images/card-wk-01.png",
            title: "loewe solo",
            desc: "product",
            highlight: " detail page ",
            color : "color : ",
            font : "font : Nanum Gothic",
            tools : "tools : PS, AI",
            period : "period : 2days (design - 2days)",
            contribution : "contribution : 100%",
            design: ""
        },
        {
            id: 2,
            img : "/images/card-wk-02.png",
            title: "만남의 극장",
            desc: "movie communication",
            highlight: " app-design ",
            color : "color : ",
            font : "font : S-core dream",
            tools : "tools : AI",
            period : "period : 7days (design - 7days)",
            contribution : "contribution : 100%",
            design: ""
        },
        {
            id: 3,
            img : "/images/card-wk-03.png",
            title: "another town",
            desc: "metaverse site",
            highlight: " logo design ",
            color : "color : ",
            font : "font : sui generis",
            tools : "tools : AI",
            period : "period : 3days (design - 3days)",
            contribution : "contribution : 100%",
            design: ""
        },
        {
            id: 4,
            img : "/images/card-wk-04.png",
            title: "Q-canseamer",
            desc: "can",
            highlight: " package-design ",
            color : "color : ",
            font : "font : handwriting",
            tools : "tools : AI",
            period : "period : 3days (design - 3days)",
            contribution : "contribution : 100%",
            design: ""
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
        detail += "<a href="+work_detail[i].design+">"+'view works'+"</a>"
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
        "#8e806a",
        "#9F9DE6",
        "#00B2BD",
        "#3D869C"
    ]

    let use_color_2= [
        "#2c3639",
        "#1C1C1B",
        "#4B277E",
        "#21307D"
    ]

    $(".detail-right .work-content p:nth-child(3) span:nth-child(1)").css("background-color", use_color_1[0])
    $(".detail-right .work-content p:nth-child(3) span:nth-child(2)").css("background-color", use_color_2[0])

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

    const work_view= [
        "/images/works_1.png",
        "/images/works_2.png",
        "/images/works_3.png",
        "/images/works_4.jpg"
    ] 
    

    const $work_btn = $(".tab-content .detail-right .work-content .btn-wrap ul li");
    const $x_mark = $(".modal i");

    $work_btn.click(function(e){
        e.preventDefault()
        let i = $work_btn.index(this)
        $(".window").show()
        $(".modal").fadeIn()
        $(".modal img").attr("src", work_view[i])
    })

    $x_mark.click(function(e){
        e.preventDefault()
        $(".window").hide()
        $(".modal").fadeOut()
    })

    $(".window").click(function(){
        $(".window").fadeOut()
        $(".modal").fadeOut()
    })


    



})