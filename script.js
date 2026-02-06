let yesScale = 1;
let confettiInterval;

/* YES → PAGE 3 */
function sayYes() {
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");

  page2.style.display = "none";
  page3.style.display = "flex";

  startContinuousHearts();
}

/* NO → YES GROWS */
function noClicked() {
  const yesBtn = document.getElementById("yesBtn");
  yesScale += 10;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (yesScale >= 4) {
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "3rem";
  }
}
function openPage4() {
    // Hide current page
    document.getElementById('page2').style.display = 'none';
    
    // Show secret message page
    const page4 = document.getElementById('page4');
    if(page4) {
        page4.style.display = 'flex';
    }
}

/* HEART CONFETTI 
function startContinuousHearts() {
  if (confettiInterval) return;
  confettiInterval = setInterval(createHeart, 150);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "🌸";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}*/
function startConfetti() {
  const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffccd5', '#ffffff'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.innerText = '❤︎';
    
    // Randomize position and timing
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Between 2-5 seconds
    confetti.style.opacity = Math.random();
    confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';

    document.body.appendChild(confetti);

    // Remove the element after it finishes falling to keep the page fast
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}


function openPage4() {
  startConfetti(); // Also trigger it for the secret message!
  document.getElementById('page4').style.display = 'flex';
}
