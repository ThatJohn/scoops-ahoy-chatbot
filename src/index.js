import Carousel from 'vanilla-js-carousel';
import sum from './sum';
import axios from 'axios';


// console.log(sum(1, 2));

// const main = async () => {
//   const res = await axios.get('https://fizal.me/pokeapi/api/v2/name/bulbasaur.json');
//   console.log("Data:", res.data);
// }

// main();


var carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: true,      // starts the rotation automatically
  infinite: true,      // enables infinite mode
  interval: 2500,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: true,          // show navigation dots
  arrows: true,        // show navigation arrows
  buttons: false,      // hide <play>/<stop> buttons,
  btnStopText: 'Pause' // <stop> button text
});

// Show the 3rd slide (Numeration of slides starts at 0)
carousel.show(2);

// Move to the next slide
carousel.next();

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("comment-form");
  let commentBox = document.getElementById('insert-comment');
  let commentList = document.getElementById('comments');
  let chatbot = document.getElementById("background-help");
  let chatbox = document.getElementById("chat");
  let close = document.getElementById("close");
  chatbot.addEventListener("click", () => {
    chatbot.id = "background-bot";
    chatbox.style.display = "inline";
  });

  close.addEventListener("click", () => {
    chatbot.id = "background-help";
    chatbox.style.display = "none";
  });

  const updateComments = event => {
    let newComment = document.createElement('p');
    newComment.className = 'user-comment';
    newComment.innerText = commentBox.value;

    event.preventDefault();
    commentList.appendChild(newComment);

    form.reset();
  }

  form.addEventListener("submit", updateComments);



});