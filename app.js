// --------------------------WEBMVP TOGGLE FORM
const webMvp = document.querySelector('.web-mvp');
const smallBtn = document.querySelectorAll('.small-btn');
const largeBtn = document.querySelectorAll('.large-btn');
const closeWebMvp = document.querySelector('.close-btn')
console.log(smallBtn)
smallBtn[1].addEventListener('click', () => {
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
closeWebMvp.addEventListener('click', () => {
  webMvp.style.display = 'none'
  webMvp.style.position = 'relative'
  console.log('small btn')
})

for(let i = 0;i < largeBtn.length; i++){
  largeBtn[i].addEventListener('click', () => {
    for (let i = 0; i < largeBtn.length; i++) {
      largeBtn[i].style.position = 'static'
    }
    webMvp.style.position = 'sticky'
    webMvp.style.display = 'flex'
    console.log('large btn')
  })
}
// --------------------------WEBMVP TOGGLE FORM



// --------------------------FAQ DROP DOWN

// --------------------------FAQ DROP DOWN