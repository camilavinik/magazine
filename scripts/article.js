// Get id from query params
const articleId = parseInt(urlParams.get("id"));

// Get article with id
// Articles array is in ../data/articles.js
const article = articles.find((art) => art.id === articleId);

// Get handlebars article template
const articleTemplate = document.getElementById(
  "mainArticleTemplate"
).innerHTML;
const articleTemplateCompiled = Handlebars.compile(articleTemplate);


// Render template and add it to the HTML
const articleTemplateRendered = articleTemplateCompiled({
  title: article.title,
  abstract: article.abstract,
  img: article.img,
  imgDescription: article.img_description,
  mainArticle: article.main_article,
});
document.getElementById("mainArticle").innerHTML += articleTemplateRendered;

// Get other articles column
const articlesColumn = document.getElementById("articlesColumn");

// Function to add the article to the HTML
const renderArticlePreview = (img, imgDescription, title, abstract, id) => {
  const articlePreview = `
    <a href="./article.html?id=${id}" class="preview-art-container">
      <img class="preview-art-image" src="${img}" alt="${imgDescription}"/>
      <h2 class="title preview-art-title">${title}</h2>
      <p>${abstract}</p>
    </a>`;

  articlesColumn.innerHTML += articlePreview;
};

// Select five random articles
const randomIdsIndex = [];
const ids = articles.map((art) => art.id);

// Recursive unique random generator function
const randomIdSelector = () => {
  // Random index of all ids array
  const randomIndex = Math.floor(Math.random() * (ids.length - 1));
  // Corresponding id
  const selectedRandomId = ids[randomIndex];

  // If id is the same as article page or is already in the random id list, find another one
  if (selectedRandomId === articleId || randomIdsIndex.includes(randomIndex))
    return randomIdSelector();

  // Return random id
  return randomIndex;
};

// Add five random Ids to randomIds
for (let i = 0; i < 4; i++) {
  randomIdsIndex.push(randomIdSelector());
}

// Render five random articles
// The articles array is defined in data/articles.js
randomIdsIndex.forEach((index) => {
  const { id, img, img_description, title, abstract } = articles[index];
  // Add it to the HTML
  renderArticlePreview(img, img_description, title, abstract, id);
});
