// Just please don't look at this code, thanks!

// CatGPT replies at the top cause there is some dumbass initializing error
const botReplies = [
  "Meow",
  "Meow meow",
  "Meow meow meow",
  "Meow? Meow meow!",
  "MEOW!",
  "meow meow meow meow, meow meow. Meow meow; meow! Meow meow?",
  "meow-meow-meow-meow-meow",
  "MEEEEOOOOW"
];


const meowReplies = [
  "Dude, you can't say that!",
  "Watch your mouth buddy!",
  "C'mon man... Don't be like that",
  "You shouldn't be saying those things around here!",
  "You just insulted all of feline kind",
  "HEY! Don't say that!"
];


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
  document.getElementById("CatGPT").style.display = "block";


  // Attach event listeners once the page loads
  document.getElementById("ChatSendBtn").addEventListener("click", sendMessage);

  document.getElementById("userInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
};



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





let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8",
  "mySlides9", "mySlides10", "mySlides11", "mySlides12"
]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5);
showDivs(1, 6);
showDivs(1, 7);
showDivs(1, 8);
showDivs(1, 9);
showDivs(1, 10);
showDivs(1, 11);
showDivs(1, 12);






function currentDiv(n, groupIndex) {
  showDivs(slideIndex[groupIndex] = n, groupIndex);
}

function showDivs(n, groupIndex) {
  const slides = document.getElementsByClassName(slideId[groupIndex]);

  if (n > slides.length) slideIndex[groupIndex] = 1;
  if (n < 1) slideIndex[groupIndex] = slides.length;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the selected slide
  slides[slideIndex[groupIndex] - 1].style.display = "block";

  // Find the matching slideshow container
  const currentSlideEl = slides[0]; // Any slide from the group
  const flexContainer = currentSlideEl.closest('.flex_container');

  if (flexContainer) {
    const thumbContainer = flexContainer.querySelector('.small_img_container');
    const thumbs = thumbContainer.querySelectorAll('.thumb');

    thumbs.forEach((thumb) => {
      thumb.classList.remove('active-thumb');
    });

    if (thumbs[slideIndex[groupIndex] - 1]) {
      thumbs[slideIndex[groupIndex] - 1].classList.add('active-thumb');
    }
  }
}



function plusSlides(n, no) {
  showDivs(slideIndex[no] += n, no);
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



// CatGPT functions (The replies are at the top for dumbass reasons)

function getRandomReply() {
  const index = Math.floor(Math.random() * botReplies.length);
  return botReplies[index];
}



function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");

  const userText = inputField.value.trim();
  if (userText === "") return;

  // Display user message
  const userMessage = `<div class="user"><b>You:</b> ${userText}</div>`;
  chatlog.innerHTML += userMessage;


  const catAvatar = document.getElementById("catAvatar");

  // Show the talking cat GIF
  catAvatar.src = "media/CatGPT/Cat_talking.gif";



  // Get and display bot reply after a short delay
  setTimeout(() => {
    let botReply;

    // Check if the user typed "meow" (case-insensitive)
    if (userText.toLowerCase().includes("meow")) {
      botReply = meowReplies[Math.floor(Math.random() * meowReplies.length)];
    } else {
      botReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    }

    const botMessage = `<div class="bot"><b>Cat:</b> ${botReply}</div>`;
    chatlog.innerHTML += botMessage;
    chatlog.scrollTop = chatlog.scrollHeight;

    catAvatar.src = "media/CatGPT/Cats_still.png";
  }, 2100);

  // Clear input
  inputField.value = "";

};