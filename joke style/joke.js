let pressJoke = document.querySelector('.button-press');
let creatJoke = document.querySelector('.answer');
const JOKE_URL = 'https://api.chucknorris.io/jokes/random';

pressJoke.addEventListener( 'click', () =>{
    fetch (JOKE_URL)
    .then((responce) => {
            return responce.json ();
    })
    .then((data) => {
        console.log(data.value);
        document.querySelector('.answer').textContent = data.value;
    });
});