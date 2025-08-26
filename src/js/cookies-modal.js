  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".js-cookies-modal");
    const buttons = document.querySelectorAll(".js-cookies-modal-button");

    if (!localStorage.getItem("cookiesClicked")) {
      setTimeout(() => {
        modal.classList.add("js-show");
      }, 2000);
    }


    buttons.forEach(btn => {
      btn.addEventListener("click", function () {
        localStorage.setItem("cookiesClicked", "true");
        modal.classList.remove("js-show");
      });
    });
  });