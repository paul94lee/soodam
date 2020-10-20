$(function () { // 전환
    var scrollLoca = $(document).scrollTop();
    var contents = $('.content-bind > div');

    $(window).scroll(function () {
        scrollLoca = $(window).scrollTop();
        // $('.content-header ul li').removeClass('active');
        for (var i = 0; i < contents.length; i++) {
            // var min = scrollLoca - contents[i].offsetTop;
            if (scrollLoca >= contents[i].offsetTop) {
                $('.content-header ul li').removeClass('active');
                $('.content-header ul li').eq(i).addClass('active');
            };

        };
    });
    $('.content-header ul li').each(function (i) {
        console.log(i);
        $('.content-header ul li').eq(i).on('click', function (e) {
            e.preventDefault();
            console.log(e);
            console.log($(this).children(0));
            window.scrollTo(0, contents[i].offsetTop);
        });
    });

});

$(function () { //더보기
    $('.community .btn').on('click', swift);

    function swift(e) {
        e.preventDefault();
        $('.community .review .review-wrap').toggleClass('active');
        $('.community .review').toggleClass('active');
        if ($("#review").hasClass("active") == true) {
            $('.community .btn').text('닫기');
        } else {
            $('.community .btn').text('더보기');
        }

    };



});
$(function () { //팝업이미지

    $('.img-area').find('img').on('click', pop);
    var idx;
    function pop() {

        $('.pop-bg').addClass('active');
        $('.popup figure img').attr('src', this.src);
        idx = $('.img-area').find('img').index($(this));
        
        $('.pop-bg .close').on('click', function () {
            $('.pop-bg').removeClass('active');
        });
    };
    $('.popup .leftBtn').on('click', prev);
    $('.popup .rightBtn').on('click', next);
    function next() {
        if (idx < $('.img-area').find('img').length - 1) {
            console.log($('.img-area').find('img'));
            idx++;
            var nexImg = $('.img-area').find('img').eq(idx);
            $('.popup figure img').attr('src', nexImg.attr('src'));
            console.log()
        };
    };
    function prev() {
        if (idx > 0) {
            idx--;
            var nexImg = $('.img-area').find('img').eq(idx);
            $('.popup figure img').attr('src', nexImg.attr('src'));
        }
    };


    mapApi();
    function mapApi() {
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(37.496965, 127.029787),

                level: 2
            };
        var map = new kakao.maps.Map(mapContainer, mapOption);
        var imageSrc = './img/teacher-detail-img/map_pin.svg', // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(48, 84), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(24, 84) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(37.496965, 127.029787); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
        setZoomable(false);
        function setZoomable(zoomable) {
            // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
            map.setZoomable(false);
        }

    }
});
