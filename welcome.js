import { auth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut  } from "./firebase.js";

let logout= ()=>{

  signOut(auth ).then(() => {
    // Sign-out successful.
    console.log("user gone");
    location.replace("index.html");
  }).catch((error) => {
    // An error happened.
    console.log("user not gone",error );
  });
};
  
let signoutbtn= document.getElementById("logout-btn");
signoutbtn.addEventListener("click",logout);

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("exist");      // location.replace("index.html")
  }else{
    console.log("not exist");
    location.replace("index.html") 
  }
});