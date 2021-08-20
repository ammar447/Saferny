<!--eslint-disable -->
<template>
  <div class="header">
     		<div class="row">
			<div class="col">
				<img src="../../assets/safferney.jpg" class="begain" alt="test" />
			</div>
		</div>
        <div class="row">
            <div class="col-12 ">
     <div class="form-group">
      
       <input type="text"
         class="form-control input"   v-model="newuser.First"   placeholder="First Name">
            <input type="text"
         class="form-control input"  v-model="newuser.Last"   placeholder="Last Name">
               <input type="text"
         class="form-control input"    v-model="newuser.Email"  placeholder="Email">
                  <input type="text"
         class="form-control input"  v-model="newuser.Password"   placeholder="Password">
                    <input type="text"
         class="form-control input"   v-model="newuser.phone"   placeholder="Phone">
                    <input type="text"
         class="form-control input"    v-model="newuser.age"   placeholder="age">
                <input type="text"
         class="form-control input"  v-model="newuser.gender"   placeholder="gender">
         				<input type="date"   class="form-control input"   >
     </div>
            </div>

            <div class="col-12">
              <button class="login" @click="Create"> Create AN Account </button>
            </div>
        </div>
  </div>
</template>
<!--eslint-disable -->
<script>
export default {
	data: () => ({
		newuser: {
      First: "",
      Last:"",
      Email: "",
      Password : "",
      phone :"",
      age:"",
      Date:"2021-04-10T21:00:00Z",
      gender:""
		},
	}),
  methods : {
    Create () {
       	this.$store.dispatch('Account/CreateAccount', this.newuser);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
.header {
	text-align: center;
	margin-top: 10px;
	width: auto;
	height: auto;
}
.begain {
    width: auto;
    height: auto;
}
.form-group {
    margin: 0 auto;
    width: 200px;
}
.form-control {
    margin-bottom: 20px;
    width: 230px;
    margin: 0 auto;
    margin-top: 15px;
       
}
 
.form-group .input {
  border-radius: 10px;
}
.login {
        margin-top: 38px;
    background: #89B5CB;
    color: #FFF;
 
    border-radius: 8px;
    border: 3px solid;
    height: 38px;
        width: 210px;
 
   
 font-family: 'Cabin', sans-serif;
}
</style>