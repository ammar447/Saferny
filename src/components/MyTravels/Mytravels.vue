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
					<h1>My Travels</h1>
				</div>
			</div>
		</div> 

   <div class="BodyofElements">
	<!-- Start Table  -->
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Ticket Type</th>
						<th scope="col">Weight</th>
						<th scope="col">Type</th>
						<th class="col"> Name </th>
						<th class="col"> Created At </th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="travel in Travels " :key="travel.id">
						<th scope="row"> {{travel.id}} </th>
						<td>{{ travel.ticketType }}</td>
						<td>{{travel.weight}}</td>
						<td> {{ travel.PlaneSeat.type }} </td>
						<td>{{travel.PlaneSeat.Plane.name}} </td>
						<td> {{format_date(travel.createdAt)}} </td>
						<td>
							<router-link :to="{ name: 'Details' }">
								<button class="Detales" @click="Details(travel.tripId)">Details</button>
							</router-link>
						</td>
					</tr>
				</tbody>
			</table> 
   </div>
         
  </div>
</template>
<!--eslint-disable -->
<script>
import {mapState} from 'vuex';
import moment from 'moment';
export default {
 mounted () {
	 		this.$store.dispatch('Mytravels/getMyTravels');
 },
 	computed: {
		...mapState ({
			Travels: state => state.Mytravels.Travels,
		}),
	}, 
	methods : {
			format_date(value) {
			if (value) {
				return moment(String(value)).format('YYYY/MM/DD');
			}
		},
		 Details(va) {
			this.$store.dispatch('DetailsMyTravel/oneTripid', va);
			console.log(va);
		}, 
	}
}
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
.BodyofElements {
	background-color: #cee0e9;
	color: #4f6a8b;
	    width: 100%;
}
.table {
	margin-top: 40px;
	color: #2E4E75;
		 font-family: 'Cabin', sans-serif;
}
.table .Detales {
	color: #2e4e75;
	background-color: #ffffff;
	padding: 2px 15px;
	border-radius: 15px;
	border: 1px solid #707070;
		 font-family: 'Cabin', sans-serif;
}
</style>