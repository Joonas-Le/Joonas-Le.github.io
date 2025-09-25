
function openMainTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.onload = function () {
  document.getElementById("defaultOpen").click();
}



function openSubTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("sub_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sub_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}





let slideIndex = [1, 1, 1];
let slideId = ["mySlides0", "mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function currentDiv(n, groupIndex) {
  showDivs(slideIndex[groupIndex] = n, groupIndex);
}

function showDivs(n, groupIndex) {
  let slides = document.getElementsByClassName(slideId[groupIndex]);

  if (n > slides.length) {
    slideIndex[groupIndex] = 1;
  }
  if (n < 1) {
    slideIndex[groupIndex] = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[groupIndex] - 1].style.display = "block";
}



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
