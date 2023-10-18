// UI Logic 

// this function handles getting form values and 
// setting the values for the Mad Libs story
function getAndSetMadLibValues() {
  // in this section we get the value for each form input
  const person1Input = document.getElementById("inputBox").value;
  
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetMadLibValues();
    window.alert(person1Input);
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
}

// window.onload = function() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     // notice that event.preventDefault() can be located anywhere within 
//     // the onsubmit event handler
//     event.preventDefault();
//     // we call the new function in the onsubmit event handler
//     getAndSetMadLibValues();
//   };
// };