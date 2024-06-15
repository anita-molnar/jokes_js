document.addEventListener('DOMContentLoaded', () => {
  // create the 2 object elements
  let jokesOutput = document.getElementById('js-jokesOutput');
  let btn = document.getElementById('js-btn');
  btn.addEventListener('click', () => {
    fetchJokes();
  })

  // Calling axios to make the HTTP request
  function fetchJokes() {
    axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(function (response){
      let joke = response.data.joke;
      let setup = response.data.setup;
      let delivery = response.data.delivery;
      let output = joke || `${setup} ${delivery}`;
      jokesOutput.innerHTML = output;
    })
    .catch(function (error) {
      console.log(error) // error handling, this code executes if the request is denied
    })
    .finally( function () {
      console.log("\nCode has finished executing.") // This code ALWAYS executes
    })
  }

  fetchJokes();
})


