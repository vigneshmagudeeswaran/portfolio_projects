// function toggleSearch() {
//     const inputElement = document.querySelector("input");
//     inputElement.setAttribute("placeholder", "Search ...");
//     inputElement.style.height = "25px";
//     inputElement.style.width = "100px";
    
// }

function toggleSearch() {
  const inputElement = document.querySelector("input");

  // Toggle the 'active' class
  inputElement.classList.toggle("active");

  // Focus the input when visible
  if (inputElement.classList.contains("active")) {
    inputElement.setAttribute("placeholder", "Search something...");
    inputElement.focus();
  }
}
