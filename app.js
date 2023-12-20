 function addTodo(){ //add todo
    var getTask = document.getElementById('task').value //input field in html
    const node = document.createElement('div') // created new div for the text inputted by the user
    node.className = 'tableList' //the newly created node has been given a class name
    const textNode = document.createTextNode(getTask) // the inputted text has been converted to text node or text widget
    node.appendChild(textNode) // the node div created before has been addded a text node that the user inputted
    const deleteButton = document.createElement('button') //create a new delete button for deleting todo
    deleteButton.className = 'buttonDelete' //delete button classname
    deleteButton.textContent = "Delete" // delete button text content = <button> Delete </button>
    deleteButton.style = 'float:right;' // delete button to float in the right most part of the div
    deleteButton.onclick = deleteTodo // delete button onclick function
    const editButton = document.createElement('button') // edit button
    editButton.className = 'buttonEdit' // edit button class name
    editButton.textContent = "Edit" // edit button text content = <button> Edit </button>
    editButton.style = 'float:right;' // edit button float at the right most part of the div
    editButton.onclick = editTodo // edit button on click function
    node.appendChild(deleteButton) // append button to the parent element or adding the button to the div
    node.appendChild(editButton) // the explanation is same as above
    document.getElementById('result').appendChild(node) //finally the inputted text has been push to the html

}

function clearTodo(){ // clearTodo function for clearing the list of todo added by the users

    document.getElementById('result').innerHTML = "" // function gets the element in the html that name result and make its value to empty string so that it will clear the list
}

function deleteTodo(e){ //deleteTodo function to delete the todo list individually the (e) inside represent and event
 e.target.parentElement.remove() // code for removing the target element in deleting
}

function editTodo(e){ // editTodo function is for ediiting the todo individually
 const newDiv = document.createElement('div') //creating a new div element
 newDiv.className = 'new-container-editing' //the new div element given a name which is new-container-editing
 var newInput = document.createElement('input') // creating the first child of the new div element created which is a type input widget
 newInput.className = 'new-input-editing' // the input widget given a name new-input-editing
 newInput.setAttribute = ('type','text') // the input widget set the attribute of a type text
 newDiv.appendChild(newInput) // the created input is append to its parent widgets which is the newDiv (added)
 var updateButton = document.createElement('button') //created a new button for updating and changing the value
 updateButton.className = 'new-button-editing' // the update button given a className new-button-editing
 updateButton.textContent = 'Update' //the update button set a text content of Update <button> Update </button>
 updateButton.onclick = editTextTodo //the update button set an onlick named editTextTodo which the function is below of this function
 var closeButton = document.createElement('button') //created a new button for closing the newDiv div element
 closeButton.className = 'new-button-closing' // the close button given a className new-button-closing
 closeButton.textContent = 'Close' //the update button set a text content of Close <button> Close </button>
 closeButton.onclick = closeEditTodo //the close button set an onlick named closeEditTodo which the function is below of this function
 newDiv.appendChild(updateButton) // the update button is added to the newDiv created for updating the todo text
 newDiv.appendChild(closeButton) //adding the close button the the newDiv
 e.target.parentElement.appendChild(newDiv) // the newDiv is added to the parent element which is the node in the addTodo function

}

function editTextTodo(e){ //this function is for saving the newly inputted text for editing the todo
    y = e.target.parentElement.firstChild.value //getting the value of the first child of newDiv above in the editTodo function
    //y = e.target.parentElement.firstChild.nextSibling.value (for getting the second child of the parent widget)
    const textNode1 = document.createTextNode(y) //the inputted value in the newInput has been converted to a text node
    e.target.parentElement.parentElement.replaceChild(textNode1,e.target.parentElement.parentElement.firstChild) //the new updated text is added to the most parent node in the addTodo function
    e.target.parentElement.remove() //for closing the newDiv of the parent Element
}

function closeEditTodo(e){ //for closing the newDiv in the editTodo function
    e.target.parentElement.remove() //for closing the newDiv of the parent Element
}