// const kill = document.getElementById('logo')
// kill.addEventListener('click', (event) => {
//     console.log('page is fully loaded');
//     let listthree = document.querySelector("#footer");
//     listthree.scrollIntoView({behavior:"smooth"});
//   });
// var objDiv = document.body;
// objDiv.scrollTop = objDiv.scrollHeight;
window.setInterval(function() {
  var elem = document.body;
  elem.scrollTop = elem.scrollHeight;
}, 5000);