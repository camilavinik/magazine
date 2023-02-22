// Access to url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Determine base url
const url = window.location.href;
const baseUrl = url.includes("/pages") ? "" : "pages/";

// Search
const searchForm = document.getElementById("searchForm");

searchForm.onsubmit = function (e) {
  e.preventDefault();
  const searchBarInputValue = searchForm.elements[0].value;
  if (searchBarInputValue)
    window.location.href = `${baseUrl}searchResults.html?search=${searchBarInputValue}`;
};
