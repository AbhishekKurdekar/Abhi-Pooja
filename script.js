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
      <div class="yes-box">
        <h2>From Pooja Vernekar 💕</h2>
        <p style="font-size:28px; margin:15px 0;">⬇️</p>
        <h3>Pooja Abhishek Kurdekar 💍</h3>
        <p style="margin-top:20px;">
          Thank you for choosing me.<br>
          Today, tomorrow, and all our forever ❤️
        </p>
      </div>
    </div>
  `;
}

/* Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 700);

/* Protection */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
