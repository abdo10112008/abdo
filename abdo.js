// جعل الكارت قابل للسحب مع تحريك الحبل
gsap.registerPlugin(Draggable);

Draggable.create("#draggableCard", {
  type: "x,y",
  bounds: window,
  inertia: true,
  onDrag: function () {
    const rope = document.querySelector("#ropeLine line");
    const card = document.querySelector("#draggableCard");
    const cardRect = card.getBoundingClientRect();
    const newY = cardRect.top;
    rope.setAttribute("y2", newY);
  }
});

// كتابة ديناميكية
const phrases = [
  "a passionate Web Designer.",
  "building clean, elegant websites.",
  "focused on performance and UX.",
  "ready for freelance projects!",
  "let's code your vision.",
];

let el = document.getElementById("type-text");
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
