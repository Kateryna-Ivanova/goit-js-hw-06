

const input = document.querySelector('#validation-input')
input.addEventListener('blur', onBlur)


function onBlur(event) {
    // const box = event.currentTarget;
    const inputValue = event.currentTarget.value;
    console.log(inputValue)
    const requiredLength = Number(event.currentTarget.getAttribute("data-length"))
    // console.log(requiredLength);
    if (inputValue.length === requiredLength) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    }else{input.classList.add("invalid")}
}



