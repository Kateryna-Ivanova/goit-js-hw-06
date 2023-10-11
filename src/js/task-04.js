const btnDecrement = document.querySelector('button[data-action="decrement"]')
console.dir(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]')
console.dir(btnIncrement);

const counterValue = document.querySelector('#value')
console.dir(counterValue);

counterValue.value = 0;
console.log(counterValue.value)


btnIncrement.addEventListener('click', () =>  {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
    console.log(counterValue.value);
}
)



btnDecrement.addEventListener('click', () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
    console.log(counterValue.value);
}
)
