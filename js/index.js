$(function () {
    var seoul = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구',
        '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'
    ];
    var gyeong = ['수원', '성남', '의정부', '안양', '부천', '광명', '평택', '동두천 &#47; 연천', '안산', '고양', '의왕 &#47; 과천', '구리', '남양주', '오산', '시흥', '군포', '하남', '용인', '파주', '이천', '안성', '김포', '화성', '광주', '양주', '포천 &#47; 가평', '여주 &#47; 양평'];
    var creative = ['미술', '공예', '음식&#47;요리', '라이프스타일'];
    var development = ['어학', 'IT', '재테크', '커뮤니케이션'];
    var each = ['20000', '40000', '60000', '80000'];
    var sendArr = [];
    $.ajax({
        url: 'json/data.json',
        type: 'GET',
        data: {},
        beforeSend: function () { },
        complete: function () { },
        success: function (data) {
            var link, imgSrc, tit, subtit, slideList, liIndex;
            var categ, subCateg, address, price, contentList1, contentList2;

            function funSlideList() {
                slideList = '';
                data.mainSlide.forEach(function (value, key) {

                    link = value.link;
                    imgSrc = value.imgSrc;
                    tit = value.tit;
                    subtit = value.subtit;

                    slideList += "<a href='" + link + "'><figure>";
                    slideList += "<img src='" + imgSrc + "'>";
                    slideList += " <p>" + subtit + "</p>";
                    slideList += "<p>" + tit + "</p>";
                    slideList += "</figure></a>";
                });
                $('.cont').html(slideList);
            };

            funSlideList();

            function funContent() {
                contentList1 = '';
                contentList2 = '';
                data.content.forEach(function (value, key) {

                    link = value.link;
                    imgSrc = value.imgSrc;
                    tit = value.tit;
                    categ = value.categ;
                    subCateg = value.subCateg;
                    address = value.address;
                    price = value.price;
                    if (key < 4) {
                        contentList1 += "<div class='card'><a href='" + link + "'><figure>";
                        contentList1 += "<img src='" + imgSrc + "' alt=''></figure>";
                        contentList1 += "<div class='mar10 texara'>";
                        contentList1 += "<div class='card-categ fsize12'><span>" + categ + "</span>&#183;<span>" + subCateg + "</span></div>";
                        contentList1 += "<div class='card-title fsize18'>" + tit + "</div>";
                        contentList1 += " <div class='card-location fsize12'>" + address + "</div>";
                        contentList1 += "<div class='card-price fsize20'>" + price + "</div>";
                        contentList1 += "</div> </a></div>"
                    } else {
                        contentList2 += "<div class='card'><a href='" + link + "'><figure>";
                        contentList2 += "<img src='" + imgSrc + "' alt=''></figure>";
                        contentList2 += "<div class='mar10 texara'>";
                        contentList2 += "<div class='card-categ fsize12'><span>" + categ + "</span>&#183;<span>" + subCateg + "</span></div>";
                        contentList2 += "<div class='card-title fsize18'>" + tit + "</div>";
                        contentList2 += " <div class='card-location fsize12'>" + address + "</div>";
                        contentList2 += "<div class='card-price fsize20'>" + price + "</div>";
                        contentList2 += "</div> </a></div>"
                    }
                });
                if ($('.card-wrap').hasClass('news')) {
                    $('.card-wrap.pops').html(contentList1);
                };
                if ($('.card-wrap').hasClass('pops')) {
                    $('.card-wrap.news').html(contentList2);
                };




            };
            funContent();
        }
    });

    function slide() { //슬라이드 기능
        let idx = 0;
        // transfrom기능
        function trans() {
            idx = $(this).index();
            // $('.cont').css('transition', '1s');
            slide(idx);
        };

        function slide(idx) {
            var a = idx * 100;
            $('.cont').stop().animate({
                left: -a + '%'
            }, 1000);
            $('.indi span').css('background', '#fff');
            $('.indi span').eq(idx).css('background', '#f16370');
        };
        // click기능
        $('.indi span').on('click', trans);
        // loop기능
        loop();

        function loop() {
            auto();
            return setInterval(auto, 3000);
        };
        //자동슬라이드
        function auto() {
            var len = $('.cont a').length;
            var a = idx * 100;
            $('.cont').stop().animate({
                left: -a + '%'
            }, 1000, callback);
            $('.indi span').css('background', '#fff');
            $('.indi span').eq(idx).css('background', '#f16370');
            idx++;
            if (idx > len - 1) {
                $('.indi span').eq(0).css('background', '#f16370');
            }

            function callback() {
                if (idx > len - 1) {
                    $('.indi span').eq(0).css('background', '#f16370');
                    warp();
                    idx = 1;
                };
            };

            function warp() {
                $('.cont').css('transition', 'none');
                $('.cont').css('left', 0 + '%');
            };
        };
    };

    function searchbar() {
        $('.white_list').on('click', function (e) {
            e.preventDefault();
            $('.white_list').removeClass('active');
            $(this).addClass('active');
            locaChange($(this));

        });
        $('.srch-detail > ul > li').on('click', function (e) {
            e.preventDefault();

            var par = this.closest('ul');
            $(par).children('li').removeClass('active');
            $(this).addClass('active');
        });

    };
    function locaChange(th) {
        liIndex = th.index();
        if (th.hasClass('loca-ls')) {
            $('.data-field ul li').remove();
            if ($('.loca-ls .srch-detail > ul > li.active').text() == '서울') {
                seoul.forEach(function (a, e) {
                    $('.data-field ul').append('<li>' + seoul[e] + '</li>');
                });
            };
            if ($('.loca-ls .srch-detail > ul > li.active').text() == '경기') {
                gyeong.forEach(function (a, e) {
                    $('.data-field ul').append('<li>' + gyeong[e] + '</li>');
                });
            };
        };
        if (th.hasClass('class-ls')) {
            $('.data-field ul li').remove();
            if ($('.class-ls .srch-detail > ul > li.active').text() == 'Creative') {
                creative.forEach(function (a, e) {
                    $('.data-field ul').append('<li>' + creative[e] + '</li>');
                });
            };
            if ($('.class-ls .srch-detail > ul > li.active').text() == 'Development') {
                development.forEach(function (a, e) {
                    $('.data-field ul').append('<li>' + development[e] + '</li>');
                });
            };
        };
        if (th.hasClass('cost-ls')) {
            $('.data-field ul li').remove();
            if ($('.cost-ls .srch-detail > ul > li.active').text() == '1회 단위') {
                each.forEach(function (a, e) {
                    $('.data-field ul').append('<li>~' + each[e] + '원</li>');
                });
            };
        };
        $('.data-field ul li').on('click', function (e) {
            e.stopPropagation();
            $('.data-field ul li').removeClass('active');
            $(this).addClass('active');
        });
    };
    $('.data-field').on('click', function (e) {
        e.stopPropagation();
    });

    $('.data-field button').on('click', function () {
        $(this).parents('.white_list').find('.list-a p').hide().eq(1).show();
        $('.white_list').removeClass('active');
        $(this).parents('.white_list').find('.list-a p span').eq(1).text($('.data-field ul li.active').text());
        sendArr[liIndex] = $('.data-field ul li.active').text();
        console.log(sendArr);
    });

    $('.list-a p svg').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parents('.list-a').find('p').hide().eq(0).show();
        $(this).parents('.white_list').removeClass('active');
        sendArr[$(this).parents('.white_list').index()] = '';
        console.log(sendArr);
    });
    $('.sendingBtn').on('click', function (e) {
        e.preventDefault();
        var myStorage = window.localStorage;
        localStorage.setItem('location', sendArr[0]);
        localStorage.setItem('class', sendArr[1]);
        localStorage.setItem('cost', sendArr[2]);
        location.href = "student-class.html";
    });


    slide();
    searchbar();

});