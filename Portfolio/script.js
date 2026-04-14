// function sayHello() {
//   alert("Thanks for visiting my portfolio!");
// }

// // Progress bar animation
// window.addEventListener("load", () => {
//   const bars = document.querySelectorAll(".progress-bar");

//   bars.forEach(bar => {
//     bar.style.width = bar.getAttribute("data-width");
//   });
// });

// // Dark Mode
// function toggleMode() {
//   document.body.classList.toggle("light-mode");
// }

// // Typing Effect
// const text = "Sufyan";
// let i = 0;

// function typing() {
//   if (i < text.length) {
//     document.getElementById("typing").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing, 100);
//   }
// }
// typing();

// // Progress Bars
// window.addEventListener("load", () => {
//   document.querySelectorAll(".progress-bar").forEach(bar => {
//     bar.style.width = bar.getAttribute("data-width");
//   });
// });

// // Form Submit
// function handleSubmit(e) {
//   e.preventDefault();
//   alert("Message Sent!");
// }

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});