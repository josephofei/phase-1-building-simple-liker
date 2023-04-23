// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const addClass = document.querySelector("#modal")


const likes = document.querySelectorAll(".like-glyph")
likes.forEach(like => like.addEventListener('click', () => {
  console.log(like)
  mimicServerCall()
    .then(() => {

      if (like.innerText === FULL_HEART) {
        like.innerText = EMPTY_HEART
        like.className = ""
      } else {
        like.className = 'activated-heart'
        like.innerText = FULL_HEART
      }
    })

    .catch((error) => {
      addClass.className = ''
      addClass.innerText = error
      setTimeout(() => {
        addClass.className = 'hidden'
      }, 3000)

    })
}))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
