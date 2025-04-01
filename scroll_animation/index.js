// document.addEventListener("DOMContentLoaded", () => {
//     const boxes = document.querySelectorAll(".box");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           entry.target.classList.toggle("show", entry.isIntersecting);
//         });
//       },
//       {
//         threshold: 0,
//       }
//     );
    
//     boxes.forEach(box => observer.observe(box))
    
// },
//    )
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
