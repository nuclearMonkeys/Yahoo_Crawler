// const f = document.getElementById('form');
// const q = document.getElementById('query');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = 'pagedart.com';

// var mysql = require('mysql');

// var connection = mysql.createConnection({
    
// })

var options = {
    host: 'api.github.com',
    pathPrefix: 'null',
    protocol: 'https',
    owner: 'nuclearMonkeys',
    repo: 'YahooAnswers',
    path: 'JSON_data/test_crawl14.json'
}

var GithubDB = require("./node_modules/github-db/dist/githubdb.js").default;
var githubDB = new GithubDB(options);

// githubDB.auth()