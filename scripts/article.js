// Get id from query params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = parseInt(urlParams.get('id'))

// Get article with id
// Articles array is in ../data/articles.js
const article = articles.find((art) => art.id === id)

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