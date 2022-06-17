//---------------HAMBURGER FUNCTIONALITY
const hamClose = document.querySelector('.hamburger-close');
const hamOpen = document.querySelector('.hamburger-open');
const nav = document.querySelector('.nav')

hamOpen.addEventListener('click', () =>{
  nav.style.right = "0px"
  console.log('letnavwork')
})
hamClose.addEventListener('click', () =>{
  nav.style.right = "-100vw";
  console.log('letnavwork')
})



// --------------------------WEBMVP TOGGLE FORM
const webMvp = document.querySelector('.web-mvp');
const smallBtn = document.querySelectorAll('.small-btn');
const largeBtn = document.querySelectorAll('.large-btn');
const largeBtnWrapper = document.querySelector('.large-btn-wrapper');
const closeWebMvp = document.querySelector('.close-btn')
const alert = document.querySelector('.alert')
console.log(largeBtnWrapper)

//SMALL BUTTON
smallBtn[1].addEventListener('click', () => {
  for (let i = 0; i < largeBtn.length; i++) {
    largeBtn[i].style.position = 'static'
  }
  largeBtnWrapper.style.position = 'static';
  alert.style.display = "none";
  console.log("workkkkkkk")
  webMvp.style.top = '0'
  webMvp.style.position = 'absolute'
  webMvp.style.display = 'flex'
})
for (let i = 2; i < smallBtn.length; i++) {
  smallBtn[i].addEventListener('click', () => {
    webMvp.style.position = 'sticky'
    webMvp.style.display = 'flex'
  })
}

//CLOSE BTN
closeWebMvp.addEventListener('click', () => {
  alert.style.display = "block";
  largeBtnWrapper.style.position = 'relative';
  webMvp.style.display = 'none'
  webMvp.style.position = 'relative'
  console.log('small btn')
})


// LARGE BUTTON
for(let i = 0;i < largeBtn.length; i++){
  largeBtn[i].addEventListener('click', () => {
    for (let i = 0; i < largeBtn.length; i++) {
      largeBtn[i].style.zIndex = '-2'
    }
    alert.style.display = "none";
    largeBtnWrapper.style.position = 'static';
    webMvp.style.position = 'absolute'
    webMvp.style.display = 'flex'
    console.log('large btn')
  })
}
// --------------------------WEBMVP TOGGLE FORM



// --------------------------FAQ DROP DOWN
const faqs = document.querySelectorAll('.question')
console.log(faqs)

faqs.forEach(faq => {
faq.addEventListener("click", () => {
  console.log("ran")
  faq.classList.toggle("active")
})
})
// --------------------------FAQ DROP DOWN

//------------------ALERT POPUP
// const alertPopUp = document.querySelector('.alert-pop-up');

// alert.addEventListener('mouseover', () => {
// alertPopUp.classList.toggle("active");

// });
//------------------ALERT POPUP
