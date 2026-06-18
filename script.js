document.addEventListener("DOMContentLoaded", function () {

  /* ---------- GREETING ANIMATION ---------- */

  const greeting = document.querySelector(".greeting");

  if (greeting) {
    setTimeout(() => {
      greeting.classList.add("visible");
    }, 200);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        greeting.classList.remove("visible");
      } else {
        greeting.classList.add("visible");
      }
    });
  }


  /* ---------- SCROLL PROMPT FADE ---------- */

  const scrollPrompt = document.querySelector(".scroll-prompt");

  if (scrollPrompt) {
    window.addEventListener("scroll", () => {
      const maxScroll = 200;
      const opacity = Math.max(0, 0.8 - (window.scrollY / maxScroll) * 0.8);
      scrollPrompt.style.opacity = opacity;
    });
  }


  /* ---------- PUZZLE BOX SCROLL ANIMATION ---------- */

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.35 }
  );

  const puzzleBox = document.querySelector(".puzzle-box");

  if (puzzleBox) {
    observer.observe(puzzleBox);
  }


  /* ---------- HEADER ANIMATION ---------- */

  const header = document.querySelector(".header");

  if (header) {
    setTimeout(() => {
      header.classList.add("visible");
    }, 200);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        header.classList.remove("visible");
      } else {
        header.classList.add("visible");
      }
    });
  }


  /* ---------- SCROLL DOWN FADE ---------- */

  const scrollDown = document.querySelector(".scroll-down");

  if (scrollDown) {
    window.addEventListener("scroll", () => {
      const maxScroll = 200;
      const opacity = Math.max(0, 0.8 - (window.scrollY / maxScroll) * 0.8);
      scrollDown.style.opacity = opacity;
    });
  }

  /* ---------- TYPEWRITER ANIMATION ---------- */

  const done = document.querySelector(".done");

  if (done) {
    const typewriterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          done.classList.add("animate");
        } else{
          done.classList.remove("animate");
        }
      });
    }, { threshold: 0.5 });

    typewriterObserver.observe(done);
  }

});


/* ---------- PUZZLE CHECKER ---------- */

function checkPuzzle() {

  const input = document
    .getElementById("puzzle-answer")
    .value
    .toLowerCase()
    .trim();

  const errorMessage = document.getElementById("error-message");

  if (input === "dal rice") {

    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "video.html";
    }, 800);

  } else {

    errorMessage.style.display = "block";

    errorMessage.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 400 }
    );
  }
}