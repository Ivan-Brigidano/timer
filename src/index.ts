import "babel-polyfill"; // Prevent `regeneratorRuntime is not defined` error. https://github.com/babel/babel/issues/5085

import {
  TimerApp
} from "./timerApp"

const SW_CACHE_FILE = "./sw.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Note: we can't directly specify a string inline.
    navigator.serviceWorker.register(SW_CACHE_FILE);
  });
}

(window as any).app = new TimerApp();
