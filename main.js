const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable = document.querySelector('h1');
alert('hello!');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
      myImage.setAttribute ('src','work3.png');
    } else {

      myImage.setAttribute ('src','firefox-icon.png');
    }
}