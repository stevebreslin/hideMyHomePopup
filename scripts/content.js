/** @format */

console.log('Start of annoying popup removal....');

let intervalId;

intervalId = setInterval(() => {
  const annoyingContainer = document.querySelector('.overlay-container');

  if (annoyingContainer) {
    annoyingContainer.querySelectorAll('[aria-label="Click Now To Email Agent"]');
    annoyingContainer.remove();
    console.log('Removed annoying popup.');
    clearInterval(intervalId);
  } else {
    console.log('Did not remove annoying popup.');
  }
}, 500);
