window.onload = function() {
  qoinRequestFormHandler();
}

function qoinRequestFormHandler() {
  var requestButton = document.querySelector(".request-button"),
  formRequestButton = document.querySelector(".invite-form-submit"),
  formContainer = document.querySelector(".invite-form-container"),
  form = document.querySelector("form.invite-form"),
  formOpen = false;

  // Request Invite button is pressed, a form is displayed
  requestButton.addEventListener("click", toggleFormOpen, false);

  // Form Request Invite button is pressed, a confirmation is displayed and the form is hidden.
  formRequestButton.addEventListener("click", confirmForm, false);

  // toggles form open
  function toggleFormOpen() {
    formOpen = !formOpen;
    if (formOpen) {
      formContainer.classList.add("open");
      requestButton.classList.add("clicked");
    } else {
      formContainer.classList.remove("open");
      requestButton.classList.remove("clicked");
    }
  }

  // confirm box
  function confirmForm(){
    var accepted = window.confirm("Thanks for using Qoin!");
    if (accepted) {

      // form.submit();
      toggleFormOpen();
    }
  }
}
