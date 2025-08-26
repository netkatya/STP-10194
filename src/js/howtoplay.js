  document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".js-how-text");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    texts.forEach(text => observer.observe(text));
  });