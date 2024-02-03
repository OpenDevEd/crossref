const axios = require('axios');

let dois = process.argv.slice(2);

//console.log(dois)

// Make a post request to the API https://api.openalex.org/works with parameters per-page=1 and search=XXX
axios
  .get('https://api.crossref.org/works/' + dois[0])
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
