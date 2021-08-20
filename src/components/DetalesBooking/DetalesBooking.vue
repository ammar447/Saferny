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
					<h1>Passengers and cabin class</h1>
				</div>
			</div>
		</div>
		<div class="row BodyOfElements">
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
						<td>{{ oneTrip.data.trip.id }}</td>
						<td>{{ format_date(oneTrip.data.trip.date) }}</td>
						<td>{{ format_date(oneTrip.data.trip.backDate) }}</td>
						<td>{{ oneTrip.data.trip.Plane.Company.name }}</td>
						<td>{{ oneTrip.data.trip.duration }} hours</td>
					</tr>
				</tbody>
			</table>
			<table class="table">
				<thead>
					<tr>
						<th  >Plane Name</th>
						<th  >Landing Airport</th>
						<th>Taking Airport</th>
						<th>From</th>
						<th>To</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{{ oneTrip.data.trip.Plane.name }}</td>
						<td>{{ oneTrip.data.trip.landingAirport.name }}</td>
						<td>{{ oneTrip.data.trip.takingOffAirport.name }}</td>
						<td>{{ oneTrip.data.trip.landingAirport.City.name }}</td>
						<td>{{ oneTrip.data.trip.takingOffAirport.City.name }}</td>
					</tr>
				</tbody>
			</table>

			<!-- for chieckin -->
			<table class="table">
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col">Seat Type</th>
						<th scope="col">Available Count</th>
						<th scope="col">Seat Price</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="onetri in planeSeat" :key="onetri.id">
						<th scope="row">
							<input type="radio" v-model="Details.planeSeatId" name="vehicle" :value="onetri.seat.id" />
						</th>
						<td>{{ onetri.seat.type }}</td>
						<td>{{ onetri.availableCount }}</td>
						<td>{{ onetri.seat.price }}</td>
					</tr>
				</tbody>
			</table>

			<form>
				<div class="col-md-6 col-12 form-group">
					<input type="number" class="form-control" v-model="Details.weight" placeholder="weight" />
				</div>
				<label>one-way</label>
				<input type="radio" v-model="Details.ticketType" name="vehicle" value="one-way" />
				<br />
				<label>round-trip</label>
				<input type="radio" v-model="Details.ticketType" name="vehicle" value="round-trip" />
				<br /><br />
			</form>
			<button class="Done" @click="checkIn">checkIn</button>
		</div>
	</div>
</template>
<!--eslint-disable -->
<script>
import { mapState } from 'vuex';
import moment from 'moment';
export default {
	data() {
		return {
			Details: {
				planeSeatId: '',
				ticketType: '',
				weight: '',
			},
			test: ' 123',
		};
	},
	computed: {
		...mapState({
			oneTrip: (state) => state.Booking.one,
			planeSeat: (state) => state.Booking.one.data.planeSeats,
			idtrip: (state) => state.Booking.one.data.trip.id,
		}),
	},
	methods: {
		checkIn() {
			console.log('weight : ' + this.Details.weight);
			this.$store.dispatch('Detales/checkinTrip', {
				idtrip: this.idtrip,
				Details: this.Details,
			});
		},
		format_date(value) {
			if (value) {
				return moment(String(value)).format('YYYY/MM/DD');
			}
		},
	},
};
/**
 * 				<label for="vehicle"> Economy</label>
				<input type="radio" name="vehicle" value="Bike" />
				<br />
				<label for="vehicle"> Business</label>
				<input type="radio" name="vehicle" value="Car" />
				<br />
				<label for="vehicle">First</label>
				<input type="radio" name="vehicle" value="Boat" />
				<br /><br />

	<div class="col-md-6 col-12 form-group">
					<input
						type="number"
						class="form-control"
						id="formGroupExampleInput"
						placeholder="Adults (age +12)"
					/>
				</div>
				<div class="col-md-6 col-12 form-group">
					<input
						type="number"
						class="form-control"
						 
						placeholder="Children (age 2-11)"
					/>
				</div>
				<div class="col-md-6 col-12 form-group">
					<input
						type="number"
						class="form-control"
					 
						placeholder="Infants (age under 2, on lap)"
					/>
				</div>
  		<tbody>
					<tr>
						<th scope="row">
							<input type="radio" v-model="Details.planeSeatId" name="vehicle" value=1 />
						</th>
						<td>{{oneTrip.data.planeSeats[0].seat.type}}</td>
						<td>{{oneTrip.data.planeSeats[0].availableCount}}</td>
						<td>{{oneTrip.data.planeSeats[0].seat.price}}</td>
						 
					</tr>
					<tr>
						<th scope="row">
							<input type="radio" v-model="Details.planeSeatId" name="vehicle" value=2 />
						</th>
						<td>{{oneTrip.data.planeSeats[1].seat.type}}</td>
						<td>{{oneTrip.data.planeSeats[1].availableCount}}</td>
						<td>{{oneTrip.data.planeSeats[1].seat.price}}</td>
						 
					</tr>
								<tr>
						<th scope="row">
							<input type="radio" v-model="Details.planeSeatId" name="vehicle" value=3 />
						</th>
						<td>{{oneTrip.data.planeSeats[2].seat.type}}</td>
						<td>{{oneTrip.data.planeSeats[2].availableCount}}</td>
						<td>{{oneTrip.data.planeSeats[2].seat.price}}</td>
						 
					</tr>
				</tbody>

 * 
 */
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital@1&display=swap');
.All {
	background-color: #cee0e9;
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
	margin-left: 85px;
	margin-top: 90px;
	font-size: 25px;
	 font-family: 'Cabin', sans-serif;
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
.BodyOfElements {
	color: #4f6a8b;
	background-color: #cee0e9;
	text-align: center;
	height: 900px;
}
.table {
	margin-top: 60px;
	color: #2E4E75;
	 font-family: 'Cabin', sans-serif;
}
.BodyOfElements label {
	margin-right: 55px;
	margin-top: 25px;
	width: 75px;
	 font-family: 'Cabin', sans-serif;
}
.BodyOfElements input {
	width: 17px;
	height: 20px;
}
.BodyOfElements .form-group .form-control {
	width: 75%;
	margin-top: 30px;
	margin-bottom: 15px;
	background-color: #cee0e9;
	color: #173d6b;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #707070;
	padding-top: 22px;
	padding-bottom: 20px;
}
.Done {
	color: #2e4e75;
	background-color: #ffffff;
	padding: 5px 10px;
	border-radius: 15px;
	border: 1px solid #707070;
	margin: 0 auto;
	width: 90px;
	height: 40px;
}
</style>
