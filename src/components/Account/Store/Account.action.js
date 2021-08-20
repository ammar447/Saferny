/* eslint-disable  */
  import axios from 'axios'
export default {
  CreateAccount({},newuser) {
    axios.post ("http://localhost:4001/auth/signup", {
      firstName : newuser.First,
      password : newuser.Password,
      lastName : newuser.Last,
      email : newuser.Email,
      phoneNumber :newuser.phone,
      age:newuser.age,
      gender:newuser.gender,
      dateOfBirth : newuser.Date
    }).then ( response => {
       if (response.data.token) {
         localStorage.setItem (
           "token",
           response.data.token
         )
         window.location.replace("/Start")
       }
    })
  }
}
 