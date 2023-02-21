// Access to url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Search
const searchButton = document.getElementById("searchButton")

searchButton.onclick = function(){
  const searchBarInputValue = document.getElementById("searchBarInput").value
  if (searchBarInputValue) window.location.href = `pages/searchResults.html?search=${searchBarInputValue}`
};