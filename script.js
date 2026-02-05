function unlock() {
  const pass = document.getElementById("password").value;
  // Your secret code
  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    const music = document.getElementById("bgMusic");
    music.play();
  } else {
    const error = document.getElementById("error");
    error.innerText = "Wrong password 💔";
    error.style.color = "red";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 150) - (window.innerWidth / 2 - 75);
  const y = Math.random() * 150 - 75;
  no.style.transition = "0.3s";
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  // REVERTED TO ORIGINAL "YES" SCREEN STYLE
  document.body.innerHTML = `
    <div class="yes-screen">
      <div class="yes-box">
        <h2 class="pop-in">From Pooja Vernekar 💕</h2>
        <p style="font-size:30px; margin:15px 0;">⬇️</p>
        <h3 class="pop-in">Pooja Abhishek Kurdekar 💍</h3>
        <p class="fade-in" style="margin-top:20px; font-size: 1.2rem;">
          "Thank you for choosing me.<br>
          Today, tomorrow, and all our forever ❤️"
        </p>
      </div>
    </div>
  `;
}

/* Floating Hearts Logic */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.opacity = Math.random();
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
