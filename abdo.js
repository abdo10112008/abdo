 
// كتابة ديناميكية
const phrases = [
  "a passionate Web Designer.",
  "building clean, elegant websites.",
  "focused on performance and UX.",
  "ready for freelance projects!",
  "let's code your vision."
];

const el = document.getElementById("type-text");

if (el) {
  let index = 0;
  let char = 0;
  let typing = true;

  function typeLoop() {
    if (typing) {
      if (char < phrases[index].length) {
        el.textContent += phrases[index][char];
        char++;
        setTimeout(typeLoop, 80);
      } else {
        typing = false;
        setTimeout(typeLoop, 2000);
      }
    } else {
      if (char > 0) {
        el.textContent = phrases[index].substr(0, char - 1);
        char--;
        setTimeout(typeLoop, 50);
      } else {
        typing = true;
        index = (index + 1) % phrases.length;
        setTimeout(typeLoop, 500);
      }
    }
  }

  typeLoop();
}



















// حركة دخول المهارات
gsap.from(".skill-card", {
    opacity: 0,
    y: 50,
  stagger: 0.2,
  duration: 1.2,
  scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
    }
});





// حركة دخول كروت المشاريع
gsap.from(".project-card", {
  opacity: 0,
  y: 80,
  stagger: 0.2,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  }
});






