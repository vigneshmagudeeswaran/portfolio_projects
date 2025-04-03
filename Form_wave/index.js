const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// document.addEventListener("DOMContentLoaded", () => {
//   const labels = document.querySelectorAll(".form-control label");

//   labels.forEach((label) => {
//     label.innerHTML = label.innerText
//       .split("")
//       .map(
//         (letter, idx) =>
//           `<span style="display: inline-block; transition-delay:${
//             idx * 50
//           }ms">${letter}</span>`
//       )
//       .join("");
//   });
// });
