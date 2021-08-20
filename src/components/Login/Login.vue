<!--eslint-disable -->
<template>
	<div class="header">
		<div class="row">
			<div class="col">
				<img src="../../assets/safferney.jpg" class="begain" alt="test" />
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="form-group">
					<input
						type="text"
						class="form-control input"
					 
					 
						v-model="user.Email"
						placeholder="Email"
					/>
					<input
						type="Password"
						class="form-control input"
						 
						 
						v-model="user.Password"
						placeholder="Password"
					/>
				</div>
			</div>

			<div class="col-12">
				<button type="submit" @click="login" class="login">Login</button>
			</div>
		</div>
	</div>
</template>
<!--eslint-disable -->
<script>
export default {
	data: () => ({
		user: {
			Email: '',
			Password: '',
		},
	}),
	methods: {
		login() {
			
			this.$store.dispatch('Login/LoginUser', this.user);
		 
	 	},
	},
};
</script>

<style>
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
	background: #89b5cb;
	color: #fff;
	width: 130px;
	border-radius: 8px;
	border: 3px solid;
	height: 38px;
}
</style>
