const input = document.querySelector('#validation-input')
input.addEventListener('blur', onFunctionBlur)


function onFunctionBlur() {
    const inputValue = input.value;
    console.log(inputValue)
    const requiredLength = Number(input.getAttribute("data-length"))
    // console.log(requiredLength);
    if (inputValue.length === requiredLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }else{input.classList.add("invalid")}
}



