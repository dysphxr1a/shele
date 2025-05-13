document.addEventListener("DOMContentLoaded", function () {
  let searchIcon = document.querySelector(".search_trigger");
  let searchBlock = document.querySelector(".search_fade_in");
  let close = document.querySelector(".close_search");

  searchIcon.addEventListener("click", function () {
    searchBlock.classList.remove("none");
  });

  close.addEventListener("click", function () {
    searchBlock.classList.add("none");
  });

  ////

  const container = document.querySelector(".scroll-container");
  const btnLeft = document.querySelector(".scroll-btn--left");
  const btnRight = document.querySelector(".scroll-btn--right");

  // Размер прокрутки (элемент + отступ)
  const scrollStep = 360 + 20; // 360px элемент + 20px gap

  // Обработчики кнопок
  btnRight.addEventListener("click", () => {
    container.scrollBy({
      left: scrollStep,
      behavior: "smooth",
    });
  });

  btnLeft.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollStep,
      behavior: "smooth",
    });
  });

  // Автоматическое скрытие кнопок у границ
  container.addEventListener("scroll", () => {
    const maxScroll = container.scrollWidth - container.clientWidth;

    btnLeft.style.visibility = container.scrollLeft > 0 ? "visible" : "hidden";
    btnRight.style.visibility =
      container.scrollLeft < maxScroll - 1 ? "visible" : "hidden";
  });

  // Инициализация состояния кнопок
  container.dispatchEvent(new Event("scroll"));
});
