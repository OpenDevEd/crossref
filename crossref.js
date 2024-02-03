const request = require('request');

let dois = process.argv.slice(2);

//console.log(dois)

// Make a post request to the API https://api.openalex.org/works with parameters per-page=1 and search=XXX
request({
  url: 'https://api.crossref.org/works/'+dois[0]
}, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(JSON.stringify(body))
  }
})
