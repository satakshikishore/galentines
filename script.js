let yesScale = 1;
let confettiInterval = null;

/* -------------------------
   SHOW ENVELOPE FIRST
-------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");

  if (page1) page1.style.display = "flex";
  if (page2) page2.style.display = "none";
  if (page3) page3.style.display = "none";
  if (page4) page4.style.display = "none";
});

/* -------------------------
   ENVELOPE TEAR → PAGE 2
-------------------------- */
function tearEnvelope() {
  const env = document.querySelector(".envelope");
  if (!env) return;

  env.classList.add("torn");

  setTimeout(() => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
  }, 900); // must match CSS animation
}

/* -------------------------
   YES → PAGE 3 + HEARTS
-------------------------- */
function sayYes() {
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  const video = document.getElementById("page3Video");

  page2.style.display = "none";
  page3.style.display = "flex";

  if (video) {
    video.currentTime = 0;
    video.volume = 0.7;
    video.play();
  }
}

/* -------------------------
   NO → YES GROWS
-------------------------- */
function noClicked() {
  const yesBtn = document.getElementById("yesBtn");
  if (!yesBtn) return;

  yesScale += 0.4;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (yesScale >= 4) {
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "3rem";
    yesBtn.style.borderRadius = "0";
  }
}

/* -------------------------
   PAGE 4 + CONFETTI
-------------------------- */
function openPage4() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "flex";
  startConfetti();
}


/* -------------------------
   CONFETTI (PAGE 4)
-------------------------- */
function openPage4() {
  // Hide other pages
  document.getElementById("page3").style.display = "none";

  // Show page 4
  const page4 = document.getElementById("page4");
  page4.style.display = "flex";

  // Play audio
  //const audio = document.getElementById("loveAudio");
  //audio.currentTime = -1;
  //audio.play();

  // Optional confetti
  startConfetti();
}

function startConfetti() {
  const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffccd5', '#ffffff'];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent = "❤︎";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.fontSize = Math.random() * 25 + 15 + "px";
    confetti.style.animationDuration = Math.random() * 5 + 3 + "s";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 10000);
  }
}
