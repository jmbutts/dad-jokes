const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeButton')

jokeButton.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

// 'config' is the const that holds the header: {Accept: 'application/json'} info

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeElement.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke
//     })
// }
