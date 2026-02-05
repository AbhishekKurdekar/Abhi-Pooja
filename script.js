function unlock() {
  const pass = document.getElementById("password").value;
  // Your secret code
  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play();
  } else {
    const error = document.getElementById("error");
    error.innerText = "Wrong password 💔";
    error.style.color = "#ff1f44";
    // Simple shake animation trigger
    const card = document.querySelector(".lock-card");
    card.style.animation = "none";
    void card.offsetWidth; // Trigger reflow
    card.style.animation = "shake 0.4s";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 100) - (window.innerWidth / 2 - 50);
  const y = Math.random() * 200 - 100;
  no.style.transition = "0.2s";
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  document.body.innerHTML = `
    <div class="yes-screen fade-in">
      <div class="yes-box">
        <h2>From Pooja Vernekar 💕</h2>
        <p style="font-size:40px; margin:10px 0;">💍</p>
        <h3>Pooja Abhishek Kurdekar</h3>
        <p style="margin-top:20px; font-style: italic;">
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
}, 500);
