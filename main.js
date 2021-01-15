// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

let error = document.getElementById('modal')

document.addEventListener("DOMContentLoaded", removeError)
document.addEventListener("click", likedMessage)

function removeError(e){
  error.hidden = true
}

function changeError(argument){
  error.hidden = argument
}

function likedMessage(e){
  if (e.target.innerText === EMPTY_HEART){
    mimicServerCall()
      .then(function(response){
        e.target.innerText = FULL_HEART
        return response
      })
      .catch(function(error){
        changeError(false)
        setTimeout(() => changeError(true), 5000)
      })
  } else if (e.target.innerText === FULL_HEART) {
    mimicServerCall()
      .then(function(response){
        e.target.innerText = EMPTY_HEART
        return response
      })
      .catch(function(error){
        changeError(false)
        setTimeout(() => changeError(true), 5000)
      })
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
