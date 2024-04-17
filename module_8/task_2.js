const fetch = require('node-fetch');

function loadUrls(urls) {
    let promises = urls.map(url => fetch(url));

    Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.text())))
        .then(contents => {
            // contents is an array with the content of each URL
            console.log(contents);
        })
        .catch(error => console.error("An error occurred: ", error));
}

// Example usage:
let urls = ["https://example.com", "https://example.org", "https://example.net"];
loadUrls(urls);
