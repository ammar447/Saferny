<!--eslint-disable -->
<template>
	<div class="All">
		<div class="Booking">
			<div class="row imgPosition">
				<div class="col-4">
					<img src="../../assets/safferney1.jpg" class="begain" alt="test" />
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<h1>My Travels Detalis </h1>
				</div>
			</div>
		</div>
		<!-- for detailes -->
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Date</th>
					<th scope="col">Back Date</th>
					<th scope="col">Company Name</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{ oneTripId.trip.id }}</td>
					<td>{{ format_date(oneTripId.trip.date) }}</td>
					<td>{{ format_date(oneTripId.trip.backDate) }}</td>
					<td>{{ oneTripId.trip.Plane.Company.name }}</td>
					<td>{{ oneTripId.trip.duration }} hours</td>
				</tr>
			</tbody>
		</table>
		<!-- for detailes -->
		<table class="table">
			<thead>
				<tr>
					<th>Plane Name</th>
					<th>Landing Airport</th>
					<th>Taking Airport</th>
					<th>From</th>
					<th>To</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{ oneTripId.trip.Plane.name }}</td>
					<td>{{ oneTripId.trip.landingAirport.name }}</td>
					<td>{{ oneTripId.trip.takingOffAirport.name }}</td>
					<td>{{ oneTripId.trip.landingAirport.City.name }}</td>
					<td>{{ oneTripId.trip.takingOffAirport.City.name }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<!--eslint-disable -->
<script>
import { mapState } from 'vuex';
import moment from 'moment';
export default {
	computed: {
		...mapState({
			oneTripId: (state) => state.DetailsMyTravel.oneId,
		}),
	},
	methods: {
		format_date(value) {
			if (value) {
				return moment(String(value)).format('YYYY/MM/DD');
			}
		},
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
.All {
	background-color: #cee0e9;
	height: 800px;
}
.Booking {
	height: 150px;
	background-color: #fff;
	border-bottom-left-radius: 55px;
}
.Booking .imgPosition {
	float: right;
}
.Booking h1 {
	color: #2e4e75;
  	 font-family: 'Cabin', sans-serif;
	margin-left: 51px;
	margin-top: 95px;
	font-size: 30px;
}
.Booking button {
	color: #2e4e75;
	background-color: #f5f5f5;
	border: 2px solid #89b5cb;
	padding: 10px 40px;
	border-radius: 25px;
}
.Booking .begain {
	max-width: 190px;
	max-height: 150px;
}
.table {
	margin-top: 75px;
	color: #2E4E75;
		 font-family: 'Cabin', sans-serif;
}
</style>
