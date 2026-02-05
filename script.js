function unlock() {
  const pass = document.getElementById("password").value;

  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    const err = document.getElementById("error");
    err.innerText = "Wrong password 💔";
    err.style.color = "red";
  }
}

/* NO button playful escape */
function moveNo() {
  const no = document.getElementById("no");

  const maxX = 120;
  const maxY = 40;

  const x = (Math.random() * maxX) - maxX / 2;
  const y = (Math.random() * maxY) - maxY / 2;

  no.style.transform = `translate(${x}px, ${y}px)`;
}

/* YES click → final screen */
function yesClick() {
  document.getElementById("content").style.display = "none";

  const final = document.getElementById("finalScreen");
  final.style.display = "flex";

  // Name merge animation
  setTimeout(() => {
    document.getElementById("namesInitial").classList.add("hide");
  }, 1200);

  setTimeout(() => {
    document.getElementById("finalName").classList.add("show");
    document.getElementById("finalMsg").classList.add("show");
    spawnHearts(30);
  }, 2400);
}

/* Heart burst */
function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "heart-float";
      h.innerHTML = "❤️";
      h.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(h);

      setTimeout(() => h.remove(), 6000);
    }, i * 120);
  }
}

/* Soft background hearts (disabled on final screen) */
setInterval(() => {
  const finalVisible =
    document.getElementById("finalScreen").style.display === "flex";

  if (finalVisible) return;

  const h = document.createElement("div");
  h.className = "heart-float";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.opacity = Math.random();
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}, 900);
