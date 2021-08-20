<!--eslint-disable -->
<template>
	<div class="ss">
		<div class="row">
			<div class="col">
				<img src="../assets/safferney.jpg" class="begain" alt="test" />
			</div>
		</div>
		<h1>Home</h1>
		<div class="row">
			<div class="col-12">
				<router-link :to="{ name: 'Booking' }">
					<button class="btn">Start Booking</button>
				</router-link>
			</div>
			<div class="col-12">
					<router-link :to="{ name: 'MyTravels' }">
				<button class="btn">My Travels</button>
					</router-link>
			</div> 
		</div>
		<div class="row">
			<div class="col-4">
				<img src="../assets/10966.png" class="oneimg" alt="test">
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
.ss {
	text-align: center;
}
.begain {
	width: auto;
	height: auto;
	margin: 0 auto;
	background-position: center;
	    margin-top: -30px;
}
h1 {
	 font-family: 'Cabin', sans-serif;
	color: #2e4e75;
}
.btn {
	border: 1px solid #89b5cb;
	background-color: #fff;
	margin-top: 25px;
	width: 160px;
	border-radius: 8px;
		 font-family: 'Cabin', sans-serif;
}
.oneimg {
	    max-width: 250px;
    margin-top: 10px;
}
</style>
