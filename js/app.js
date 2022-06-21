
//---------------HAMBURGER FUNCTIONALITY
const hamClose = document.querySelector('.hamburger-close');
const hamOpen = document.querySelector('.hamburger-open');
const nav = document.querySelector('.nav')

hamOpen.addEventListener('click', () =>{
  nav.style.display = 'flex'
  setTimeout(
    () => {
      nav.style.right = "0px"

    }
  , 50)
  console.log('letnavwork')
})
hamClose.addEventListener('click', () =>{
  nav.style.right = "-100vw";
  setTimeout(
    () => {
      nav.style.display = 'none'
    }
  , 1000)
  console.log('letnavwork')
})


// --------------------------PROBLEM CAHNGE TEXT
const problemText = document.querySelector('.problem-ani')

const problemTexts = [
  {
    word: 'highly-tasking'
  },
  {
    word: 'complex-work'
  },
  {
    word: 'time-consuming'
  },
]

Sequence(0);
function Sequence(i) {
  
  if (problemTexts.length > i) {
        setTimeout(function() {
          problemText.innerHTML = problemTexts[i].word
            Sequence(++i);
           
          }, 2600); // 1 second (in milliseconds)
          
        } else if (problemTexts.length == i) { // Loop
          Sequence(0);

    }

}


// --------------------------PROBLEM CAHNGE TEXT

// --------------------------FAQ DROP DOWN
const faqs = document.querySelectorAll('.question')
console.log("faqs", faqs)

faqs.forEach(faq => {
faq.addEventListener("click", () => {
  // setTimeout(
  //   () => {
  //     faq.classList.remove("active") 
  //   }
  //   , 20000)
  faq.classList.toggle("active")
  console.log("ran")
})
})
// --------------------------FAQ DROP DOWN




// --------WEBMVP TOGGLE FORM
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
  // largeBtnWrapper.style.position = 'static';
  // alert.style.display = "none";
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
  // alert.style.display = "block";
  // largeBtnWrapper.style.position = 'relative';
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









//----------------------HOW IT WORKS ANIMATION
const cardTemplate = document.querySelector('.card1')
const cardInput = document.querySelector('.card2')
const cardGenerate = document.querySelector('.card3')
const cardShare = document.querySelector('.card4')
const imgDiv = document.querySelector('.how-it-works-animation-img')
const text = document.querySelector('.how-it-works-animation-text')
const card = document.querySelectorAll('.how-it-works-card')

cardTemplate.addEventListener('click', () => {
  text.innerHTML =''
  text.innerHTML ='Your first step into getting your outstanding transactional document creted would  be to choose from our rich stock of high-quality professional templaets fit for your business and transactional needs.'
  imgDiv.src = "../img/templates-ani.svg"
  console.log('card 1 works')
})
cardInput.addEventListener('click', () => {
  text.innerHTML =''
  text.innerHTML ='Fill in only particular details of the transaction such as clients details, product(s) or service(s), price and so on, and Aisely helps with the rest.  '
  imgDiv.src = ""
  imgDiv.src = "../img/input-ani.svg"
  console.log('card 2 works')
})
cardGenerate.addEventListener('click', () => {
  text.innerHTML =''
  text.innerHTML ='Generate your document at just the click of a button and preview it. The drafting and design work will be Aiselys while yours will be to await and get an exceptional result within a couple of seconds.'
  imgDiv.src = ""
  imgDiv.src = "../img/generate-ani.svg"
  console.log('card 3 works')
})
cardShare.addEventListener('click', () => {
  text.innerHTML =''
  text.innerHTML ='Now, you have your document. Sign and share with your client(s), partner(s) or any other party involved in the transaction, and get their signatures too. Aisely lets you do these digitally and seamlessly.'
  imgDiv.src = ""
  imgDiv.src = "../img/share-ani.svg"
  console.log('card 4 works')
})

//how it works auto change


var imgData = [
  {
    text: " Your first step into getting your outstanding transactional document created would  be to choose from our rich stock of high-quality professional templates fit for your business and transactional needs.",
    imgSrc: "../img/templates-ani.svg"
  },
  {
    text: "Fill in only particular details of the transaction such as clients details, product(s) or service(s), price and so on, and Aisely helps with the rest.  '",
    imgSrc: "../img/input-ani.svg"
  },
  {
    text: "Generate your document at just the click of a button and preview it. The drafting and design work will be Aiselys while yours will be to await and get an exceptional result within a couple of seconds.",
    imgSrc: "../img/generate-ani.svg"
  },
  {
    text: "Now, you have your document. Sign and share with your client(s), partner(s) or any other party involved in the transaction, and get their signatures too. Aisely lets you do these digitally and seamlessly.",
    imgSrc: "../img/share-ani.svg"
  },
]

        textSequence(0);
        function textSequence(i) {
          
          if (imgData.length > i) {
                setTimeout(function() {
                    // card[i].style.color = 'var(--black)'
                    card[i].style.background = 'var(--main-green)'
                    card[i].style.transform = 'scale(1.1)'
                    console.log(i)
                    // card[i].classList.add('.active')
                    text.innerHTML = ""
                    text.innerHTML = imgData[i].text
                    console.log(imgData[i].text)
                    imgDiv.src = ""
                    imgDiv.src = imgData[i].imgSrc
                    textSequence(++i);
                    setTimeout(
                      () =>  {
                        card[i - 1].style.transform = 'scale(1)'
                        card[i - 1].style.color = 'var(--white)'
                        card[i - 1].style.background = 'var(--gray)'

                        console.log(i - 1)

                      }
                      ,4900)
                  }, 5000); // 1 second (in milliseconds)
                  // card[i].classList.toggle('.active')
                  
                  
                } else if (imgData.length == i) { // Loop
                  textSequence(0);

            }

        }


// const autoChange = () => {
//   setTimeout(() =>{
//     console.log('choose templae')
//     text.innerHTML =''
//     text.innerHTML ='Your first step into getting your outstanding transactional document creted would  be to choose from our rich stock of high-quality professional templaets fit for your business and transactional needs.'
//     imgDiv.src = ""
//     imgDiv.src = "../img/templates-ani.svg"
//   }, 4000)
//   setTimeout(() =>{
//     console.log('fill details')
//     text.innerHTML =''
//     text.innerHTML ='Fill in only particular details of the transaction such as clients details, product(s) or service(s), price and so on, and Aisely helps with the rest.  '
//     imgDiv.src = ""
//     imgDiv.src = "../img/input-ani.svg"
//   }, 8000)
//   setTimeout(() =>{
//     console.log('generate document')
//     text.innerHTML =''
//   text.innerHTML ='Generate your document at just the click of a button and preview it. The drafting and design work will be Aiselys while yours will be to await and get an exceptional result within a couple of seconds.'
//   imgDiv.src = ""
//   imgDiv.src = "../img/generate-ani.svg"
//   }, 12000)
//   setTimeout(() =>{
//     console.log('sign and share')
//     text.innerHTML =''
//     text.innerHTML ='Now, you have your document. Sign and share with your client(s), partner(s) or any other party involved in the transaction, and get their signatures too. Aisely lets you do these digitally and seamlessly.'
//     imgDiv.src = ""
//     imgDiv.src = "../img/share-ani.svg"
//   }, 16000)

// }

// setInterval(() => {
//   autoChange()
// }, 4000)

//----------------------HOW IT WORKS ANIMATION








//------------------ALERT POPUP
// const alertPopUp = document.querySelector('.alert-pop-up');

// alert.addEventListener('mouseover', () => {
// alertPopUp.classList.toggle("active");

// });
//------------------ALERT POPUP
