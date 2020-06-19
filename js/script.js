const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;//记录当前页标

firtNextBtn.addEventListener("click",function(){
    // 表单推进
    slidePage.style.marginLeft = "-25%";
    // 修改颜色和图标
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click",function(){
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current += 1;
    // 提交成功网页提示
    setTimeout(function(){
        alert("提交成功啦！\n附上我的个人邮箱1031906008@qq.com\n欢迎来撩");
    },800);
});

prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "0%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current -= 1;
});

