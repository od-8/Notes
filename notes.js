function addNote () {
    
    let formElement = document.getElementById('form');

    let newHTML = `
        <input type="text" placeholder="Add note" id="new-text required></input> 
        <label id="newther-note></label> `

    formElement.innerHTML = newHTML
}

function removeNote () {
    console.log('removed')
}