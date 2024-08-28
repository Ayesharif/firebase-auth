//login........................................................................................ area
import { auth,onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "./firebase.js";
document.getElementById("login-form").addEventListener("submit",(event)=>{
    event.preventDefault()


let email=document.getElementById("email");
let password=document.getElementById("password");
let login =()=>{

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    
    // ...
  })
  .catch((error) => {
console.log(error.message);

    alert("error",error.message);

    // ..
  });
}

let loginbtn= document.getElementById("login-btn");
loginbtn.addEventListener("click",login);


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


//signup........................................................................................ area


