// Preloader
let loader=document.querySelector("#preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})

// On top scroller
let toTop=document.querySelector(".toTop");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        toTop.style.opacity="1";
    }
    else{
        toTop.style.opacity="0";
    }
})

// slider animation
let nSlider=1;      //image number
let sliderImg=document.querySelector(".slider>img")
let sliderAnim=setInterval(()=>{
    if(nSlider<3){
        nSlider++;
    }
    else{
        nSlider=1;
    }
    sliderImg.src=`images/SLIDER/${nSlider}.png`
},3000);

// search Hamburger click event
let hamEvent=false;
let searchHam=document.querySelector("#searchHamburger");
let userImg=document.querySelector(".user img");
let logo=document.querySelector(".logo");
let searchBar=document.querySelector(".searchBar");
let user=document.querySelector(".user");
searchHam.addEventListener("click",()=>{
    if(hamEvent==false){
        logo.style.display="none";
        userImg.style.display="none";
        searchBar.style.display="flex";
        user.style.width="5%";
        hamEvent=true;
        searchHam.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    }
    else if(hamEvent==true){
        logo.style.display="flex";
        userImg.style.display="block";
        searchBar.style.display="none";
        user.style.width="20%";
        hamEvent=false;
        searchHam.innerHTML=`<i class="fa-solid fa-magnifying-glass"></i>`;   
    }
})