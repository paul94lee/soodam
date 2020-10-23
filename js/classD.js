window.addEventListener('DOMContentLoaded', function(){

    var navi = document.querySelectorAll('.side_menu ul li a');
    var num = document.querySelectorAll('.side_menu span');
    var con = document.querySelectorAll('.con1 > div');
    var conArr = [];

    setTimeout(function(){
    con.forEach(function(cn,idx){
        conArr.push(cn.offsetTop);
    });
},500); //이미지 로드시간이 길어질수있어서 시간을 좀 주고 값을받게해서 이미지로드 끝나고 값을 받을수있게한다.

    navi.forEach(function(nv,idx){
    
        nv.addEventListener('click',function(e){
            e.preventDefault();
    
            window.scrollTo(0,con[idx].offsetTop);
            
        });
    });

    var winH = window.innerHeight/2;
    window.addEventListener('scroll',function(){
        conArr.forEach(function(el,idx){
        if(window.scrollY >= conArr[idx] - winH){
            
            num.forEach(function(a){
                a.classList.remove('click');
            });
            num[idx].classList.add('click'); 
        }
    });
   
        
    });
    
    var seoul = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구',
        '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'
    ];
    var gyeong = ['수원', '성남', '의정부', '안양', '부천', '광명', '평택', '동두천 &#47; 연천', '안산', '고양', '의왕 &#47; 과천', '구리', '남양주', '오산', '시흥', '군포', '하남', '용인', '파주', '이천', '안성', '김포', '화성', '광주', '양주', '포천 &#47; 가평', '여주 &#47; 양평'];

});