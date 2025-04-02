export const renderDots = function (numberImage, container) {
  let markup = "";
  for (let index = 1; index <= numberImage; index++) {
    markup += `<span class="dot" data-target=${index - 1}></span>`;
  }
  container.insertAdjacentHTML("beforeend", markup);
};
