
const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};
console.dir(refs)

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {

const noVelue = event.currentTarget.value === "" || event.currentTarget.value === " "
console.log(noVelue)

const murMur = noVelue ? refs.output.textContent  = "Anonymous" : refs.output.textContent = event.currentTarget.value
console.log(murMur)
}


