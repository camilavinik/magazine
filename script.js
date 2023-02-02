const firstColumn = document.getElementById("firstColumn");
const secondColumn = document.getElementById("secondColumn");
const thirdColumn = document.getElementById("thirdColumn");

const getColumn = (index) => {
  if (index % 3 === 0) return firstColumn;
  if (index % 3 === 1) return secondColumn;
  return thirdColumn;
};

const renderArticlePreview = (column, img, imgDescription, title, abstract) => {
  const articlePreview = `<div class="preview-art-container">
    <img class="preview-art-image" src="${img}" alt="${imgDescription}"/>
    <h2 class="title preview-art-title">${title}</h2>
    <p>${abstract}</p>
  </div>`;

  column.innerHTML += articlePreview;
};

articles.forEach(({ img, img_description, title, abstract }, index) => {
  const column = getColumn(index);
  renderArticlePreview(column, img, img_description, title, abstract);
});

const dots = document.getElementsByClassName("carousel-dot")
const dotsArray = Array.from(dots)

const onDotClick = (dot) => {
  dotsArray.forEach(d => {
    d.classList.remove('selected')
  })
  dot.classList.add('selected')
  
}

dotsArray.forEach(d => {
  d.addEventListener("click", () => onDotClick(d));
})