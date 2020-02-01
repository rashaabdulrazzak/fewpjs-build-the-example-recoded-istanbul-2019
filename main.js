// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function fclicked(){
  mimicServerCall()
    .then(function(serverMessage){
      let res = document.getElementsByClassName('like-glyph')[0];
      if(res.innerText == FULL_HEART){
        res.innerText = EMPTY_HEART;
        res.classList.remove('activated-heart');
      }
      else{
       res.innerText = FULL_HEART ;
       res.classList.add('activated-heart');
      }
    })
    .catch(function(error) {
      let mod = document.getElementById('modal') ; 
      mod.classList.remove('hidden');
      mod.innerText = error;
      setTimeout(function(){ mod.classList.add('hidden'); }, 5000);
    });
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
