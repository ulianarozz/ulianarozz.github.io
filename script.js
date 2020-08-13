$(document).ready(function() {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

window.onload= function(){
  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Enter Valid email address!");
    } else {
      email.setCustomValidity("");
    }
  });

  var form = document.querySelector('#fill-form');
form.onsubmit = function(){
  let error = ''
  let firstname = form.firstName.value;
  let lastname = form.lastName.value;
  let phone = form.phone.value;
  let address = form.address.value;
  let city = form.city.value;
  let help = ''
  for(let i = 0; i < form.help.length; i++){
      if(form.help[i].checked){
          help = form.help[i].value;
      }
  }
  console.log(help);
  if(firstname.length < 2) {
    error += "First Name is invalid" + '<br>';
}
if(lastname.length <2){
  error+= "Last Name is invalid" + '<br>';
}
if (isNaN(phone) || phone < 1 || phone > 10){
  error+="Wrong Phone number" + '<br>';
}
if(city.length <3){
error+="Please provide your city name" + '<br>';
}
if(address ===""){
  error+="Please provide your address" + '<br>';
  }
  if(error === ''){
    hideErrorMessage();
    return true;
  } else {
    showErrorMessage(error);
    return false;
  }
}


function showErrorMessage(msg) {
  var errorMsg = document.querySelector('#error-msg');
  errorMsg.classList.remove('hidden');
  errorMsg.innerHTML = msg;
}

function hideErrorMessage(msg) {
  var errorMsg = document.querySelector('#error-msg');
  errorMsg.classList.add('hidden');
}


}
