<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
     
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
      //vue 3 composition api
      setup(){
        
          let email = ref("");
          let password = ref("");
          let login =()=>{
              console.log(email.value,password.value)
          }
  
  
          return {email,password, login};
      }
  }
  </script>
  
  <style>
  
  </style>