let button = document.getElementById('button');


async function getJoke() {
    let apiUrl = 'https://v2.jokeapi.dev/joke/Any';
       try {
     const response = await fetch(apiUrl);
     apiJoke = await response.json();
     console.log(apiJoke);
  } catch(error) {
      console.log('Sorry, there was an error.');
  }
}

button.addEventListener('click', getJoke);