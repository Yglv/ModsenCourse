const fetch = require('node-fetch');

function fetchDataFromApis(apiUrls) {
    let promises = apiUrls.map(url => fetch(url).then(response => response.json()));

    Promise.all(promises)
        .then(results => {
            console.log(results);
        })
        .catch(error => console.error("An error occurred: ", error));
}


