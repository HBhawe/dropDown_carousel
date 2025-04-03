/**
 * The `showDropDown` function toggles the "hidden" class on a dropdown item to show or hide it.
 * @param dropdownItem - The `dropdownItem` parameter is a reference to the HTML element that
 * represents the dropdown menu you want to show or hide.
 */
export const showDropDown = function (dropdownItem) {
  dropdownItem.classList.toggle("hidden");
};
