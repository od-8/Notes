const inputElement = document.getElementById('input-element');
const bodyElement = document.getElementById('body-element');

function addTask () {
    if (inputElement.value == '') {
        console.log('You forgot to add your task');
    } else {
        let newLi = document.createElement('li')
        newLi.innerHTML = inputElement.value
        bodyElement.appendChild(newLi)

        let newDiv = document.createElement('div')
        newDiv.innerHTML = ' X '
        bodyElement.appendChild(newDiv)

        //This is a different way of doing it
        
        /* let htmlString = `<ul>
            <button id="complete">Complete</button>
            <div>${inputElement.value}</div>
            <button id="remove">Remove</button>
        </ul>`
        bodyElement.insertAdjacentHTML('beforeend', htmlString) */
    }
    inputElement.value = ''
}

bodyElement.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toogle("checked")
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})