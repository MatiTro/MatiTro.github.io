const liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
  li.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = li.querySelector("a").href;
  });
});
