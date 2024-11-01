const formElement = document.querySelector(".input")
const message = document.getElementById('message')


function addNote () {

    let newString = `<button id="complete" class="option"type="button" onclick="completeFunction()">Complete</button>
        <input type="text" placeholder="Do laundry..." id="input" required>
        <button id="remove" class="option" type="button" onclick="removeFunction()">Remove</button>`

    formElement.insertAdjacentHTML('beforeend', newString)
}

let num = 0

function completeFunction () {
    let completeBtn = document.getElementById('complete');
    num ++   
    if (num % 2 == 0) {
        completeBtn.style.backgroundColor = "white";
        completeBtn.textContent = "Complete";
    } else {
        completeBtn.style.backgroundColor = "rgb(37, 185, 37)";
        completeBtn.textContent = "Completed";
    }
}

function removeFunction () {
    let completeBtn = document.getElementById('complete');
    let removeBtn = document.getElementById('remove');
    let newInput = document.getElementById('input');
    completeBtn.remove();
    removeBtn.remove();
    newInput.remove();
}