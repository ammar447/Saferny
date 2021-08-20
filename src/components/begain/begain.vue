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
				<router-link :to="{ name: 'Login' }">
					<button class="btn">LogIn</button>
				</router-link>
			</div>
			<div class="col-12">
				<router-link :to="{ name: 'Account' }">
					<button class="btn">Create An Account</button>
				</router-link>
			</div>
		</div>
	</div>
</template>
<!--eslint-disable -->
<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
.header {
	text-align: center;
	margin-top: 10px;
	 
}
.header .begain {
	height: auto;
	width: auto;
}
.btn {
	color: #2e4e75;
	background: none;
	width: 250px;
	border-radius: 20px;
	border: 5px bold;
	border: 2px solid #89b5cb;
	font-family: Semibold;
	font-size: 23px;
	font-weight: bold;
	margin-bottom: 90px;
	margin-top: -71px;
	margin-left: 20px;
	text-decoration: none;
	 font-family: 'Cabin', sans-serif;
}
</style>
