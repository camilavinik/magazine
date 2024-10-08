// Render all articles

// Get article columns
const firstColumn = document.getElementById("firstColumn");
const secondColumn = document.getElementById("secondColumn");
const thirdColumn = document.getElementById("thirdColumn");

// Function which returns the column in which the article should be based on index
const getColumn = (index) => {
  let numberOfColumns = 3;
  if (isTabletWidth) numberOfColumns = 2;
  if (isMobileWidth) numberOfColumns = 1;

  if (index % numberOfColumns === 0) return firstColumn;
  if (index % numberOfColumns === 1) return secondColumn;
  return thirdColumn;
};

// Function to add the article to the HTML
const articlePreviewTemplate = document.getElementById(
  "articlePreviewTemplate"
).innerHTML;
const compiledArticlePreviewTemplate = Handlebars.compile(
  articlePreviewTemplate
);

// Render article function to render an add to the html
const renderArticlePreview = (
  column,
  img,
  imgDescription,
  title,
  abstract,
  id
) => {
  const renderedPreviewArticle = compiledArticlePreviewTemplate({
    img,
    title,
    id,
    imgDescription,
    abstract,
  });

  column.innerHTML += renderedPreviewArticle;
};

// The articles array is defined in data/articles.js
// Create new array same as articles to separate banners from articles
const filteredArticles = [...articles];
// Remove first three elements and save them as bannersData, now filteredArticles dont have those
const bannersData = filteredArticles.splice(0, 3);

// Render filtered articles
filteredArticles.forEach(
  ({ img, img_description, title, abstract, id }, index) => {
    // Set a column
    const column = getColumn(index);
    // Add it to the HTML
    renderArticlePreview(column, img, img_description, title, abstract, id);
  }
);

// Set Banners as first three articles
// Render template and add it to the HTML
const renderedBanner = document.getElementById("bannerTemplate").innerHTML;
const renderedBannerTemplate = Handlebars.compile(renderedBanner);

// For the banners: render template and add it to the HTML
bannersData.forEach(({ img, title, id }) => {
  const renderedBanner = renderedBannerTemplate({ img, title, id });
  document.getElementById("carouselContainer").innerHTML += renderedBanner;
});

// Carousel
const dots = document.getElementsByClassName("carousel-dot");
const dotsArray = Array.from(dots);

const carousel = document.getElementById("carouselContainer");
const banners = document.querySelectorAll(".banner-container");

// Variable to know current slide
let current = 0;
let nextBanner = 1;

// Start timeout to next banner in 10 seconds
let carouselTimeout = setTimeout(
  () => changeBanner(dotsArray[nextBanner]),
  10000
);

function changeBanner(dot) {
  // Clear timeout in case there is one running
  clearTimeout(carouselTimeout);

  // Set current banner to number of dot selected
  current = parseInt(dot.id);
  // Calculate next banner index
  nextBanner = current + 1 > 2 ? 0 : current + 1;

  // Unselect all dots and select current
  dotsArray.forEach((d) => {
    d.classList.remove("selected");
  });
  dot.classList.add("selected");

  // Slide effect
  banners.forEach((banner) => {
    banner.style.transform = `translateX(-${100 * current}%)`;
  });

  // Timeout to next banner in 10 seconds
  carouselTimeout = setTimeout(
    () => changeBanner(dotsArray[nextBanner]),
    10000
  );
}

dotsArray.forEach((dot) => {
  dot.addEventListener("click", () => changeBanner(dot));
});
