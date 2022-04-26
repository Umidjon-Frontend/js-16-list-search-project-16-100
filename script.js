const input = document.querySelector(".input");
const items = document.querySelectorAll(".list-items li");

input.addEventListener("keyup", () => {
  let text = input.value.toLowerCase().trim("");

  for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML.toLowerCase().includes(text)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});
