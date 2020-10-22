//selectors
const inputItem = document.querySelector(".inputItem");
const buttonItem = document.querySelector(".buttonItem");
const listItem = document.querySelector(".listItem");

//event listener

buttonItem.addEventListener('click', addItem);
listItem.addEventListener('click', deleteItem);

//functions

//adding item
function addItem(event) {
    //prevent from submitting 
    event.preventDefault();

    //create new item
    const divItem = document.createElement("div");
    //add class
    divItem.classList.add("divItem");

    //create item 
    const newItem = document.createElement("li");
    newItem.innerText = inputItem.value;
    newItem.classList.add('newItem');

    //append item in div
    divItem.appendChild(newItem);


    //checked button
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("completebtn");
    divItem.appendChild(completedbutton);

    //delete button
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
    deletebutton.classList.add("deletebtn");
    divItem.appendChild(deletebutton);

    //add div inside container append to list
    listItem.appendChild(divItem);


    //clear item input
    inputItem.value = "";
}

//delete and update function
function deleteItem(event) {

    //to get the target e.target
    //html element is returned to item 
    const item = event.target;

    if (item.classList[0] === "deletebtn") {
        const pitem = item.parentElement;
        pitem.remove();
    }

    //checkmark
    if (item.classList[0] === "completebtn") {
        console.log(item.parentElement);
        const pitem = item.parentElement;
        pitem.classList.toggle("completed");
        //toggle means adding in class as divItem completed
    }

}