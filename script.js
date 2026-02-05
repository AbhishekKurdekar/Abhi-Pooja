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
  // hide everything
  document.getElementById("content").style.display = "none";

  // show final screen (acts like new page)
  const final = document.getElementById("finalScreen");
  final.style.display = "flex";

  // reset animation state (important if refreshed)
  document.querySelector(".merge-names").classList.remove("merge");
  document.getElementById("finalName").classList.remove("show");
  document.getElementById("finalMsg").classList.remove("show");

  // name merge animation
  setTimeout(() => {
    document.querySelector(".merge-names").classList.add("merge");
  }, 800);

  // final name + message
  setTimeout(() => {
    document.getElementById("finalName").classList.add("show");
    document.getElementById("finalMsg").classList.add("show");
    launchConfetti();
  }, 2400);
}


/* Hearts animation (fixed position) */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 800);

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 4000);
  }
}

/* Protection */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
