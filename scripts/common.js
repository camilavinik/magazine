// SET CONSTANTS TO DETERMINE DEVICE TYPE
const isTabletWidth = window.innerWidth <= 768
const isMobileWidth = window.innerWidth <= 480

// Access to url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Determine base url
const url = window.location.href;
const baseUrl = url.includes("/pages") ? "" : "pages/";

// Search
const searchForm = document.getElementById("searchForm");

searchForm.onsubmit = function (e) {
  e.preventDefault(); // Avoid page reload after submit
  const searchBarInputValue = searchForm.elements[0].value;
  if (searchBarInputValue) {
    // Redirect to search results page with input value
    window.location.href = `${baseUrl}searchResults.html?search=${searchBarInputValue}`;
  }
};

// DISPLAY MENU ON RESPONSIVE DESIGN
if (isTabletWidth) {
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  let menuIsOpen = false;

  menuButton.onclick = () => {
    nav.style.height = menuIsOpen ? "0" : "128px";
    menuIsOpen = !menuIsOpen;
  };
}
