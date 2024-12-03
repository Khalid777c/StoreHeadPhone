

// selctor element//

let landingPage = document.querySelector('.landing-page')


// Get Arry OF img //

let imgsArry = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];


setInterval(()=>{
    // Get Random Number
    let randomnumber = Math.floor(Math.random() * imgsArry.length);
   // Chang Background Imges URL 
   landingPage.style.backgroundImage = 'url(iamages/' + imgsArry[randomnumber] + ')';
},1000)


// nav bar //

let navbar = document.querySelector('.navbar');
let bars = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-xmark');
let humburger = document.querySelector('.humburger');

humburger.addEventListener('click',()=>{
    bars.classList.toggle('active');
    xmark.classList.toggle('active');
    navbar.classList.toggle('active');
})