window.addEventListener('DOMContentLoaded', function () {
    
    var tabCon = document.querySelector('.btn div span:nth-of-type(2)');
    var tabA = document.querySelectorAll('.con5 a');

    for(var i=0;i<tabA.length;i++){
        tabA[i].addEventListener('click',funTab);
    }

    function funTab(e){
        e.preventDefault();
        var a = this.children[0].children[1];
        console.log(a)

        tabCon.textContent = a.textContent;

    }
    

});
