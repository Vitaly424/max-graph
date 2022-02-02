const portfolioTabsNav = document.querySelector(".js-portfolio-tabs");
const portfolioContentVisible = document.querySelectorAll(
  ".portfolio-tabs-content__item--visible"
);
const potfolioMore = document.querySelector(".js-portfolio-more");

portfolioTabsNav.addEventListener("click", ({ target }) => {
  const parentTabNav = target.closest("button");

  if ((parentTabNav.tagName = "BUTTON")) {
    const path = parentTabNav.dataset.path;

    document.querySelectorAll(".js-portfolio-tabs-btn").forEach((el) => {
      el.classList.remove("portfolio-tabs__btn--active");
      el.removeAttribute("disabled");
    });
    parentTabNav.classList.add("portfolio-tabs__btn--active");
    parentTabNav.setAttribute("disabled", "true");

    document.querySelectorAll(".js-portfolio-tabs-content").forEach((el) => {
      el.classList.remove("portfolio-tabs-content__item--visible");
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
      const tabContent = el.closest(".js-portfolio-tabs-content");
      tabContent.classList.add("portfolio-tabs-content__item--visible");
    });

    if (path === "all") {
      document.querySelectorAll(".js-portfolio-tabs-content").forEach((el) => {
        el.classList.add("portfolio-tabs-content__item--visible");
      });
    }
  }
});