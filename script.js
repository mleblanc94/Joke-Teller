let button = document.getElementById('button');


async function getJoke() {
    let apiUrl = 'https://v2.jokeapi.dev/joke/';
       try {
     const response = await fetch(apiUrl);
     apiJoke = await response.json();
     console.log(apiJoke);
  } catch(error) {
      console.log('Sorry, there was an error.');
  }
}

  getJoke();

let buttonClick = () => {
    console.log('it works');
}

button.addEventListener('click', buttonClick);