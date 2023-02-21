// Access to url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Determine base url
const url = window.location.href;
const baseUrl = url.includes("/pages") ? "" : "pages/";

// Search
const searchButton = document.getElementById("searchButton");

searchButton.onclick = function () {
  const searchBarInputValue = document.getElementById("searchBarInput").value;
  if (searchBarInputValue)
    window.location.href = `${baseUrl}searchResults.html?search=${searchBarInputValue}`;
};
