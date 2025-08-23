  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".cookies-modal");
    const buttons = document.querySelectorAll(".cookies-modal-button");

    if (!localStorage.getItem("cookiesClicked")) {
      setTimeout(() => {
        modal.classList.add("show");
      }, 2000);
    }


    buttons.forEach(btn => {
      btn.addEventListener("click", function () {
        localStorage.setItem("cookiesClicked", "true");
        modal.classList.remove("show");
      });
    });
  });