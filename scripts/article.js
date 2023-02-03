// Get id from query params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const articleId = parseInt(urlParams.get('id'))

// Get article with id
// Articles array is in ../data/articles.js
const article = articles.find((art) => art.id === articleId)

// Get HTML article elements
const title = document.getElementById("title")
const abstract = document.getElementById("abstract")
const image = document.getElementById("image")
const mainArticle = document.getElementById("mainArticle")

// Set article title
title.innerText = article.title

// Set article abstract
abstract.innerText = article.abstract

// Set article image
image.src = article.img
image.alt = article.img_description

// Set article mainArticle
mainArticle.innerText = article.main_article

// Get other articles column
const articlesColumn = document.getElementById("articlesColumn")

// Function to add the article to the HTML
const renderArticlePreview = (
    img,
    imgDescription,
    title,
    abstract,
    id
  ) => {
    const articlePreview = `
    <a href="./article.html?id=${id}" class="preview-art-container">
      <img class="preview-art-image" src="${img}" alt="${imgDescription}"/>
      <h2 class="title preview-art-title">${title}</h2>
      <p>${abstract}</p>
    </a>`;
  
    articlesColumn.innerHTML += articlePreview;
};

// Render first five articles
// The articles array is defined in data/articles.js
for (let i = 0; i < 5; i++) {
    const {id, img, img_description, title, abstract} = articles[i]
    // Add it to the HTML if it is not the main article
    if (id !== articleId) {
        renderArticlePreview(img, img_description, title, abstract, id);
    }
}