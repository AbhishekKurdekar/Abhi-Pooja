function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "040825") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
    document.getElementById("error").style.color = "red";
  }
}

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 160) - (window.innerWidth / 2 - 80);
  const y = Math.random() * 100 - 50;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  document.getElementById("content").style.display = "none";
  const final = document.getElementById("finalScreen");
  final.style.display = "flex";

  setTimeout(() => {
    document.getElementById("namesInitial").classList.add("hide");
  }, 1200);

  setTimeout(() => {
    document.getElementById("finalName").classList.add("show");
    document.getElementById("finalMsg").classList.add("show");
    spawnHearts(30);
  }, 2400);
}

function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "heart-float";
      h.innerHTML = "❤️";
      h.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 6000);
    }, i * 100);
  }
}

setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart-float";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.opacity = Math.random();
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 800);
