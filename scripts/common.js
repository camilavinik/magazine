// Set constants TO determine device type
const isTabletWidth = window.innerWidth <= 768;
const isMobileWidth = window.innerWidth <= 480;

// Access to url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Determine base url
const url = window.location.href;
const baseUrl = url.includes("/pages") ? "" : "pages/";

// Search
const searchForm = document.getElementById("searchForm");

// On search submit
searchForm.onsubmit = function (e) {
  e.preventDefault(); // Avoid page reload after submit
  const searchBarInputValue = searchForm.elements[0].value;
  if (searchBarInputValue) {
    // Redirect to search results page with input value
    window.location.href = `${baseUrl}searchResults.html?search=${searchBarInputValue}`;
  }
};

// Display smaller displays menu design if small screen
if (isTabletWidth) {
  // Menu icon button
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  let menuIsOpen = false;

  // On click open/close menu
  menuButton.onclick = () => {
    nav.style.height = menuIsOpen ? "0" : "113px";
    menuIsOpen = !menuIsOpen;
  };
}
