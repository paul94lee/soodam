window.addEventListener('DOMContentLoaded', function(){

    var navi = document.querySelectorAll('.side_menu ul li a');
    var num = document.querySelectorAll('.side_menu span');
    var con = document.querySelectorAll('.con1 > div');
    var conArr = [];

    setTimeout(function(){
    con.forEach(function(cn,idx){
        conArr.push(cn.offsetTop);
    });
},500);

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

    var category = document.querySelector('.cate1 p:nth-of-type(1) input');
    var checkBox = document.querySelectorAll('.c-input input');
    var btn = document.querySelector('.btn a:nth-of-type(2)');

    var c_data = {};
    checkBox.forEach(function(ele,key){
        ele.addEventListener('click',function(e){
            if(this.checked){
                c_data[this.value] = this.dataset.name;
            }else{
                delete c_data[this.value];
            }

            var a='';
            for(var i in c_data){
                a += c_data[i]+',';
                category.value = a;
            }
            if(Object.keys(c_data) == 0){
                category.value = '';
            }
        });
    });

    btn.addEventListener('click',function(e){
        e.preventDefault();
        
        for(var idx in checkBox){
            checkBox[idx].checked = false;
            c_data={};
            category.value = '';
        }
    });

});