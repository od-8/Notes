let formElement = document.getElementById('form');
const input = document.querySelector(".input");
let message = document.getElementById("message");

function addNote () {
    
    
    let HTMLString = `
        <button id="completed" class="option" onclick="completeNote()" type="button">/</button>
        <input type="text" placeholder="Do laundry..." id="new-text" required>
        <button id="remove" class="option" onclick="removeNote()" type="button">X</button>`


    input.insertAdjacentHTML('beforeend', HTMLString);
}

function completeNote () {
    //completedBtn.style.color = "White"
    let newInput = document.getElementById('new-text')
    if (newInput.value == '') {
        message.textContent = "Please add a note"
        setTimeout ( () => {
            message.textContent = ''
        }, 1000)
    } else {
        let completedBtn = document.getElementById('completed')
        completedBtn.style.backgroundColor = "rgb(37, 185, 37)"
        completedBtn.textContent = "Completed!";
    }
}

function removeNote () {
    let newInput = document.getElementById('new-text');
    let completedBtn = document.getElementById('completed')
    let removeBtn = document.getElementById('remove')
    newInput.remove()
    completedBtn.remove()
    removeBtn.remove()
}