import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { mount as mountHeader } from '../../apps/header/dist/header.js';
import { mount as mountTrending } from '../../apps/trending/dist/trending.js';
// import { mount as mountHighlights } from '../apps/highlights/dist/highlights.js';

mountHeader(document.querySelector('#header'));
mountTrending(document.querySelector('#trending'));
// mountHighlights(document.querySelector('#highlights'));

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
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
