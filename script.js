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

function moveNo() {
  const no = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 160) - (window.innerWidth / 2 - 80);
  const y = Math.random() * 100 - 50;
  no.style.transition = "0.3s";
  no.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
  document.getElementById("content").style.display = "none";
  const final = document.getElementById("finalScreen");
  final.style.display = "flex";

  // Name merging sequence
  setTimeout(() => {
    document.querySelector(".merge-names").classList.add("merge");
  }, 1000);

  setTimeout(() => {
    document.getElementById("finalName").classList.add("show");
    document.getElementById("finalMsg").classList.add("show");
    launchConfetti();
  }, 2500);
}

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const c = document.createElement("div");
    c.className = "heart";
    c.innerHTML = i % 2 === 0 ? "❤️" : "💖";
    c.style.left = Math.random() * 100 + "vw";
    c.style.bottom = "-20px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
}

// Background Floating Hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  heart.style.fontSize = (Math.random() * 15 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 700);
