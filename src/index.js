let searchFormElement = document.querySelector(".search-form");
let searchInputElement = document.querySelector(".search-form-input");

function handleSearchFormSubmit(event) {
  event.preventDefault();

  let searchInputValue = searchInputElement.value.trim();
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInputValue;
}

searchFormElement.addEventListener("submit", handleSearchFormSubmit);
