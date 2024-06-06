import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { environmentComponent } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <br/>
    <div class="test">
    
    </div>
  </div>
`
const element = document.querySelector(".test");
// environmentComponent(element);
callbacksComponent(element);