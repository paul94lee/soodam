window.addEventListener('DOMContentLoaded', function () {

    var navi = document.querySelectorAll('.btn ul li a');
    var con = document.querySelectorAll('.rlaalstjd > div');

    for(var i=0;i<navi.length; i++){
        navi[i].addEventListener('click',funTab);
    }

    function funTab(){
        event.preventDefault();
        

        for(var i=0;i<4;i++){
            navi[i].classList.remove('on');
            con[i].classList.add('none');
        }
        this.classList.add('on');
        

        
        var idx=this.getAttribute('href');
        con[idx].classList.remove('none');
    }

});