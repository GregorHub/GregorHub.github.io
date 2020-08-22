
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      return document.querySelector('.navbar').classList.add('hide')
  }
  return document.querySelector('.navbar').classList.remove('hide')

});

function clickStart(){
  var elmnt = document.getElementById("About");
  elmnt.scrollIntoView();

}

function clickProject(){

  var elmnt = document.getElementById("MyProject1");
  elmnt.scrollIntoView();
}


