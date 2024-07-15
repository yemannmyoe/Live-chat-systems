import { ref } from "vue";
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

let error = ref(null); // this email address is already in use by another account


let createAccount=async(email,password,displayName)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);

      // console.log(response)
        if(!response){
          throw new Error("could not create new user");
        }
    // Update the user's display name
       await updateProfile(response.user,{displayName});

        return response;
        
      } catch(err){
        error.value = err.message;
       console.log(error.value)
      }
}
let useSignup=()=>{
    return {
        error,createAccount
    };
}

export default useSignup;