import '../styles/style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))







// const images = ['fox1', 'fox2', 'fox3', 'fox4'];
// const imgElem = document.querySelector('img');

// function randomValueFromArray(array) {
//   const randomNo = Math.floor(Math.random() * array.length);
//   return array[randomNo];
// }

// setInterval(() => {
//   const randomChoice = randomValueFromArray(images);
//   imgElem.src = `images/${randomChoice}.jpg`;
// }, 2000);

// Register service worker to control making site work offline

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/src/js/sw.js')
//     .then(() => { console.log('Service Worker Registered'); });
// }

import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator && !/localhost/.test(window.location)) {
  registerSW();
}



// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('INSTALL STARTING!')
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});