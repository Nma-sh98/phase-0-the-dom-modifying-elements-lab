// // Write your code here!
// const element = document.querySelector("#main");
// element.remove();

// const newHeader = document.createElement("h1");
//     const id = document.createElement("id");
//     id.setAttribute('id', 'victory' );
// newHeader.append(h1);


// // const id = document.createElement("id");
// // id.textContent="victory";

// id.textContent="Nma is the champion"

// Write your code here!

const testVar = "hi"

// Code to remove the nod element here 

document.querySelector("main#main").remove();

// Create a new element and assign it to newHeader 

const newHeader = document.createElement("h1");

// A 'newHeader' variable that points to the node 'h1#victory'

newHeader.id = "victory"

// a 'newHeader' variable that points to the node 'h1#victory' with "You-Name is the chamion" inside 

newHeader.innerHTML = "Allie is the champion!";

newHeader.className = "victory";