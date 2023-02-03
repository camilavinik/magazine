// Render all articles

// Get article columns
const firstColumn = document.getElementById("firstColumn");
const secondColumn = document.getElementById("secondColumn");
const thirdColumn = document.getElementById("thirdColumn");

// Function which returns the column in which the article should be based on index
const getColumn = (index) => {
  if (index % 3 === 0) return firstColumn;
  if (index % 3 === 1) return secondColumn;
  return thirdColumn;
};

// Function to add the article to the HTML
const renderArticlePreview = (
  column,
  img,
  imgDescription,
  title,
  abstract,
  id
) => {
  const articlePreview = `
  <a href="./pages/article.html?id=${id}" class="preview-art-container">
    <img class="preview-art-image" src="${img}" alt="${imgDescription}"/>
    <h2 class="title preview-art-title">${title}</h2>
    <p>${abstract}</p>
  </a>`;

  column.innerHTML += articlePreview;
};

// The articles array is defined in data/articles.js
articles.forEach(({ img, img_description, title, abstract, id }, index) => {
  // Set a column
  const column = getColumn(index);
  // Add it to the HTML
  renderArticlePreview(column, img, img_description, title, abstract, id);
});

// Render carousel
const dots = document.getElementsByClassName("carousel-dot");
const dotsArray = Array.from(dots);

const onDotClick = (dot) => {
  dotsArray.forEach((d) => {
    d.classList.remove("selected");
  });
  dot.classList.add("selected");
};

dotsArray.forEach((d) => {
  d.addEventListener("click", () => onDotClick(d));
});
