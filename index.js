const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let counter = 0;

prevButton.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = 3;
  }
  carousel.style.transform = `translateX(-${counter * 25}%)`;
});

nextButton.addEventListener('click', () => {
  counter++;
  if (counter > 3) {
    counter = 0;
  }
  carousel.style.transform = `translateX(-${counter * 25}%)`;
});
// const carousel = document.querySelector('.carousel');
// let counter = 0;

setInterval(() => {
  counter++;
  if (counter > 3) {
    counter = 0;
  }
  carousel.style.transform = `translateX(-${counter * 25}%)`;
}, 5000);
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen1").click();
  

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-veritical");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();