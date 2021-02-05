const cardView = (() => {
  let links = document.querySelectorAll(".a--cut");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let card = link.parentElement;
      let hidden = card.querySelector(".card__text--list-h");
      if (hidden.classList.contains("hidden")) {
        hidden.classList.remove("hidden");
        link.innerHTML = "hide all";
      } else {
        hidden.classList.add("hidden");
        link.innerHTML = "see all";
      }
    });
  });
})();
