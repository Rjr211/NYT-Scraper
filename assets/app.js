const key = "XZiML3PpnYM2SUZx5aRwvXOhL7hc9PP8";


fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + `${key}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

