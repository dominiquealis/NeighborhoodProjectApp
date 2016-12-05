// code to get push info to firebase

$(document).ready(function(){
console.log("loaded");
function writeUserData() {
  firebase.database().ref('homes/' + 708).set({
      "persons" : {
        "person1" : {
          "firstname" : "Dominique",
          "lastname" : "Ryan"
        },
        "person2" : {
          "firstname" : "Andrew",
          "lastname" : "Nichols"
        }
      },
      "pets" : {
        "cats" : {
          "cat1" : "Binx",
          "cat2" : "Miami",
          "cat3" : "Zelda"
        }
      },
      "phones" : {
        "phone1" : "222-222-2222",
        "phone2" : "333-333-3333"
      },
      "streetaddress" : {
        "address" : "712 Ritchie Ave"
      }
  });
}
writeUserData()
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

