/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 700);

/* UNLOCK */
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").hidden = false;
    document.getElementById("bgMusic").play();
    loadImages();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

/* LOAD IMAGES + CAPTIONS */
function loadImages() {
  const grid = document.getElementById("photoGrid");

  const captions = {
    "1.jpg": "Our first meet 💕",
    "2.jpg": "That smile ❤️",
    "3.jpg": "Forever vibes ✨",
    "4.jpg": "Just us 😄",
    "5.jpg": "Memories we’ll keep forever 💫"
  };

  for (let i = 1; i <= 20; i++) {
    const file = `${i}.jpg`;
    const img = new Image();
    img.src = `photos/${file}`;

    img.onload = () => {
      const card = document.createElement("div");
      card.className = "photo-card";

      const caption = document.createElement("div");
      caption.className = "photo-caption";
      caption.innerText = captions[file] || "";

      card.appendChild(img);
      card.appendChild(caption);

      card.onclick = () => card.classList.toggle("active");

      grid.appendChild(card);
    };
  }
}

/* NO BUTTON */
function moveNo() {
  const no = document.getElementById("no");
  no.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*120}px)`;
}

/* YES CLICK */
function yesClick() {
  document.body.innerHTML = `
    <div class="yes-screen">
      <div class="merge">
        <span>Abhishek</span>
        <span class="heart-big">❤️</span>
        <span>Pooja</span>
      </div>

      <div class="final-name">
        Pooja Abhishek Kurdekar
      </div>

      <div class="message">
        Thank you for choosing me.<br>
        Today, tomorrow, and all our forever ❤️
      </div>
    </div>
  `;
  confetti();
}

/* CONFETTI */
function confetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background =
      ["#ff4d6d","#ffd166","#06d6a0","#118ab2"][Math.floor(Math.random()*4)];
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
