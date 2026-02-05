function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 120;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  document.body.innerHTML = `
    <div class="yes-screen">
      <div>
        <div class="name-merge">Abhishek ❤️ Pooja</div>
        <div class="final-name">Pooja Abhishek Kurdekar</div>
        <div class="message">
          Thank you for choosing me.<br>
          Today, tomorrow, and all our forever ❤️
        </div>
      </div>
    </div>
  `;
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "fixed";
  heart.style.bottom = "-10px";
  heart.style.animation = "floatUp 6s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 800);

document.addEventListener("contextmenu", e => e.preventDefault());
