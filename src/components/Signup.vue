<template>
  <h2>Sing Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default {
    //vue 3 composition api
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref(null); // this email address is already in use by another account
        let signUp =async()=>{
       
          try{
            const response = await createUserWithEmailAndPassword(auth, email.value, password.value);

          // console.log(response)
            if(!response){
              throw new Error("could not create new user");
            }
        // Update the user's display name
           await updateProfile(response.user, {
          displayName: displayName.value
        });

        console.log(response.user);
            
          } catch(err){
            error.value = err.message;
           console.log(error.value)
          }
        
        }


        return {displayName,email,password, signUp};
    }
}
</script>

<style>

</style>