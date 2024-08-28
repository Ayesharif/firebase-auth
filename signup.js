import { auth,onAuthStateChanged,createUserWithEmailAndPassword } from "./firebase.js";
document.getElementById("signup-form").addEventListener("submit",(event)=>{
    event.preventDefault();

let email=document.getElementById("email");
let password=document.getElementById("password");

let signup =()=>{

    createUserWithEmailAndPassword (auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("we have sent you email verification link"); 
    console.log(user);
    

    
    // ...
  })
  .catch((error) => {
console.log(error.message);

    alert("error",error.message);

    // ..
  });
}

let signupbtn= document.getElementById("signupbtn");
signupbtn.addEventListener("click",signup);


onAuthStateChanged(auth, (user) => {
    if (user) {
      location.replace("welcome.html");
    console.log("user available")
    // ...
  }
  else{
    console.log("not exist");
    
  }
});
}
);
