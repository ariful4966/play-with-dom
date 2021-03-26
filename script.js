const formElement = document.querySelector('form')
const inputElement = document.querySelector('input[type="text"]')
inputElement.addEventListener('keydown', (event) => {
    // event.preventDefault();
    console.log(event.target.value);
})