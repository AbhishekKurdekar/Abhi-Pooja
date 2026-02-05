const PASSWORD = "040825";

/* ---------- HEARTS ---------- */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.getElementById("heartContainer").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);

/* ---------- UNLOCK ---------- */
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
    loadImages();
  } else {
    document.getElementById("error").innerText = "Wrong secret 💔";
  }
}

/* ---------- GALLERY ---------- */
function loadImages() {
  const grid = document.getElementById("photoGrid");

  const captions = {
    "1.jpg": "Our first meet 💕",
    "2.jpg": "That smile ❤️",
    "3.jpg": "Forever us ✨"
  };

  for (let i = 1; i <= 20; i++) {
    const img = new Image();
    img.src = `photos/${i}.jpg`;

    img.onload = () => {
      const card = document.createElement("div");
      card.className = "photo-card";

      const cap = document.createElement("div");
      cap.className = "photo-caption";
      cap.innerText = captions[`${i}.jpg`] || "";

      card.appendChild(img);
      card.appendChild(cap);

      card.onclick = () => card.classList.toggle("active");

      grid.appendChild(card);
    };
  }
}

/* ---------- NO BUTTON ---------- */
function moveNo() {
  const btn = document.getElementById("no");
  btn.style.top = Math.random() * 80 + "vh";
  btn.style.left = Math.random() * 80 + "vw";
}

/* ---------- YES ---------- */
function yesClick() {
  document.querySelector(".proposal").style.display = "none";
  document.getElementById("finalScreen").style.display = "block";
}
