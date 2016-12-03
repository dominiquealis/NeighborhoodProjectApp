// code to get push info to firebase

$(document).ready(function(){
console.log("loaded");
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('homes/' + streetno).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


});



// $("#submit").on('click', function(){
// 	var email = $("#email").val();
// 	var password = $("#pw").val();
// 	 console.log('click');
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// })

