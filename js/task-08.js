
const form = document.querySelector(".login-form");
const textAlert = 'Всі поля повинні бути заповнені'

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const Email = event.currentTarget.elements.email.value
    // console.dir(Email);
    const Password = event.currentTarget.elements.password.value
    // console.dir(Password);
    if (Password === "" || Email === "") { return alert(textAlert) }
    else { const dataForm = { Email,Password }
     console.dir(dataForm);
}
    form.reset();
}
