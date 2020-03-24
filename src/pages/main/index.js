var button = document.querySelector(".poster-link-js");
var modalForm = document.querySelector(".modal-form-js");
var buttonClose = document.querySelector(".modal-form-x-js");
var input = document.querySelector(".form-input-js");


//открытие
button.addEventListener("click",function() {
  modalForm.classList.remove("modal-form-none") 
  input.focus ();
});

//Закрытие
buttonClose.addEventListener("click",function() {
  modalForm.classList.add("modal-form-none") 
  button.focus ();
});

//Закрытие escape
window.addEventListener ("keydown", function (event) {
  if (event.code == "Escape" && !modalForm.classList.contains ("modal-form-none")) { 
  modalForm.classList.add("modal-form-none");
  button.focus ()
} 
});
