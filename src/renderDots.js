export const renderDots = function (numberImage, container, activeDot) {
  let markup = "";
  container.innerHTML = "";
  for (let index = 1; index <= numberImage; index++) {
    if (index === activeDot) {
      markup += `<span class="dot active-dot" data-target=${index - 1}></span>`;
    } else markup += `<span class="dot" data-target=${index - 1}></span>`;
    // markup += `<span class="dot" data-target=${index - 1}></span>`;
  }
  container.insertAdjacentHTML("beforeend", markup);
};
