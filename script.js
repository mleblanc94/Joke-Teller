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

let apiKey = '5a8a2d8d903a4e34849dbb2a8d863518';

async function sayJoke() {
    const apiUrl2 = `http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=Hello, world!`;
    try {
      const response2 = await fetch(apiUrl2);
      apiSpeech = await response2.json();
    } catch(error) {
        console.log('Sorry, there was an error')
    }
}

button.addEventListener('click', sayJoke);