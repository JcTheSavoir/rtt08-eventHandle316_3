const createText = () => {
    let screen = document.querySelector('.screen')
    screen.innerHTML = "This is a classic Event taking place"

}

const createNewButton = () => {
    //Create button - dynamically
    let abutton = document.createElement('button')

    // Create class for button
    abutton.setAttribute('class', 'newBtn')

    //Create an EventListener for the new button
        abutton.addEventListener('click' , createText) 

        abutton.addEventListener('click' , () => { 
            console.log("Event has Started")
            createText()
        }) 
    let body = document.querySelector('body')
    body.append(abutton)
} 