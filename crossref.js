const axios = require('axios');
const fs = require('fs');
let dois = process.argv.slice(2);

if (dois.length === 0) {
  console.log('Usage: node crossref.js <doi> [<doi>...]');
} else {
  works(dois);
};

function works(dois) {
  // iterate through the array of DOIs
  dois.forEach(function (doi) {
    axios
      .get('https://api.crossref.org/works/' + doi)
      .then(function (response) {
        // handle success
        // url encode doi
        const file = encodeURIComponent(doi) + ".json";
        fs.writeFileSync(file,
          JSON.stringify(response.data.message));
        console.log(doi + ": success; saved to " + file);
      })
      .catch(function (error) {
        // handle error
        console.log(doi + ": " + error);
      });
  });
};
