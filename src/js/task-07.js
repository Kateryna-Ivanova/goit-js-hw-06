const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input',onPullControl);

function onPullControl(event) {
    const fontSize = event.currentTarget.value + "px"
    // console.log(fontSize)
  text.style.fontSize = fontSize;
}
