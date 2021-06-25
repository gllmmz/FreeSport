function navOpen(){
    let hamburger=document.querySelector('#hamburger');
    let navElements=document.querySelector('#nav__elements');
    hamburger.onclick=function(){
    hamburger.classList.toggle('hamburger_active');
    navElements.classList.toggle('nav__elements_active');
    }  
}
navOpen();
new Swiper('.swiper-container',{
    autoplay:{
        delay:2500,
        stopOnLastSlide: false,
        disableOnInteration:false,
    },
    loop: true,
    speed:1500,
    effect:'cube', 
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        dynamicBullets:true,
    }
});