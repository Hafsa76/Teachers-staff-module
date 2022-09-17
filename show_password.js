
//                      "Show password using eye_icon"
const togglePassword = document.querySelector('#icon');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});



//                      "Show password using checkbox"
// function myFunction() {
//   var x = document.getElementById("password");
//   // var icon = document.getElementById("icon").value;
//   if (x.type === "password") {
//     x.type = "text";
//     // document.getElementById('icon').innerHTML = "<i class='fa-solid fa-eye'></i>";
//     // <i class="fa-solid fa-eye"></i>
//   } else {
//     x.type = "password";
//     document.getElementById('icon').innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
//     // <i class="fa-solid fa-eye-slash"></i>
//   }
// }


//     ---------------------------------------------------------------------


// function myFunction() {
//   var x = document.getElementById("password");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }





// const togglePassword = document.querySelector('#togglePassword');
//   const password = document.querySelector('#id_password');

//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });