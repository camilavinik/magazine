// Get handlebars search results template
const searchTitle = document.getElementById("searchTitleTemplate").innerHTML;
const searchTitleTemplate = Handlebars.compile(searchTitle);

// Get search results
const search = urlParams.get('search')

// Render template and add it to the HTML
const renderedSearchTitle = searchTitleTemplate({ search });
document.getElementById("main").innerHTML += renderedSearchTitle;

// Find related articles
const result = articles.filter((article) => article.tags.find(a => a.includes(search)))

// Get handlebars result article template
const searchResult = document.getElementById("searchResultTemplate").innerHTML;
const searchResultTemplate = Handlebars.compile(searchResult);

// For each result article render template and add it to the HTML
result.forEach(({id, img, title, abstract}) => {
  const renderedArticle = searchResultTemplate({ id, img, title, abstract });
  document.getElementById("main").innerHTML += renderedArticle;
});