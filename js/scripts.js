// UI Logic

// window.onload = function(){
//     let form = document.querySelector("form");
//     form.onsubmit = function(event){
//       const inputBox = document.getElementById("inputBox").value;
//       window.alert(inputBox).toUpperCase();
//     }
//     event.preventDefault(event);
// }

// onload section

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(){
    event.preventDefault();
    const inputBox = document.getElementById("inputBox").value;
    window.alert(inputBox.toUpperCase());
  }
}
//window.onload = function() {
  //let form = document.querySelector("form");
   // form.onsubmit = function(){
    //window.alert(inputbox).toUpperCase();
    //};
//};