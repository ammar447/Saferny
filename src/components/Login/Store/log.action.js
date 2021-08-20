/* eslint-disable prettier/prettier */
import axios from 'axios'
export default {
  LoginUser({commit},user) {
    axios.post ("http://localhost:4001/auth/login", {
      email : user.Email,
      password : user.Password
    }).then ( response => {
      commit('SET_Elements',user)
       if (response.data.token) {
         localStorage.setItem (
           "token",
           response.data.token
         )
         window.location.replace("/Start")
         console.log("done" + response.data.token);
       }
    })
  }
}