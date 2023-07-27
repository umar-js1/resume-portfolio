
const handbuger=document.querySelector('.span');
const nav=document.querySelector('.nav ');
handbuger.addEventListener('click',()=>{
nav.classList.toggle('slide');
});


window.addEventListener('scroll',reveal);
function reveal(){
    var reveals =document.querySelectorAll(".reveal");
    for( var i=0; i<reveals.length; i++){
        var windowhieght = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop < windowhieght - revealpoint){
            reveals[i].classList.add("active");

        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}














