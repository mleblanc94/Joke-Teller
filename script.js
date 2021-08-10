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

async function sayJoke() {
    const apiUrl2 = 'http://api.voicerss.org/?key=1234567890QWERTY&hl=en-us&src=Hello, world!';
    try {
      const response2 = await fetch(apiUrl2);
      apiSpeech = await response2.json();
    } catch(error) {
        console.log('Sorry, there was an error')
    }
}

button.addEventListener('click', sayJoke);