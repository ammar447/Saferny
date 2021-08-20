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
					<h1>Book Your Flight !</h1>
				</div>
			</div>
		</div>
		<div class="row BodyofElements">
			<div class="col-md-6 col-12 form-group">
				<input type="text" class="form-control" v-model="From"    v-on:keyup="FromIt"   placeholder="From " />
			</div>
			<div class="col-md-6 col-12 form-group">
				<input type="text" class="form-control" v-model="To" v-on:keyup="ToIt"  placeholder="To" />

			</div>
		  
			<!-- Start Table  -->
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">From</th>
						<th scope="col">To</th>
						<th scope="col">Date</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="tri in Trip" :key="tri.id">
						<th scope="row">{{ tri.id }}</th>
						<td>{{ tri.takingOffAirport.City.name }}</td>
						<td>{{ tri.landingAirport.City.name }}</td>
						<td>{{ format_date(tri.date) }}</td>
						<td>
							<router-link :to="{ name: 'DetalesBooking' }">
								<button class="Detales" @click="Details(tri.id)">Details</button>
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
import { mapState } from 'vuex';
import moment from 'moment';
export default {
	data () {
		return {
         From :'',
		 To : '',
		 search: '',
		}
	},
	mounted() {
		this.$store.dispatch('Booking/getTrip');
	},
	computed: {
		...mapState({
			Trip: (state) => state.Booking.Trip,
		}),
	},
	methods: {
		format_date(value) {
			if (value) {
				return moment(String(value)).format('YYYY/MM/DD');
			}
		},
		Details(va) {
			this.$store.dispatch('Booking/oneTrip', va);
			console.log(va);
		}, 
		FromIt: function() { 
        console.log("From from Vue : " + this.From ); 
		if (this.To !='') {
			 this.$store.dispatch('Booking/getFromandTo', {
			From : this.From,
			To : this.To
			
			})
		} else {
	 this.$store.dispatch('Booking/getFrom', {
			From : this.From,
			To : this.To
			
			})
		}
	 
		},
		ToIt :function() {
				if (this.From !='') {
				 this.$store.dispatch('Booking/getFromandTo', {
			From : this.From,
			To : this.To
			
			})	
				} else {
              this.$store.dispatch('Booking/getTo', {
			From : this.From,
			To : this.To
			
			})
				}
		 
          console.log("To  From Vue :" + this.To );
		},
 
	},
};
/**
 * 		<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>
							<router-link :to="{ name: 'DetalesBooking' }">
								<button class="Detales">Detales</button>
							</router-link>
						</td>
					</tr>
 * 
 */
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
	margin-top: 90px;
	margin-left: 25px;
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
.form {
	text-align: center;
}

.BodyofElements {
	background-color: #cee0e9;
	color: #4f6a8b;
	width: 100%;
}
.form-group .form-control {
	width: 75%;
	margin-top: 25px;
	margin-bottom: 15px;
	background-color: #cee0e9;
	color: #173d6b;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #707070;
}
</style>
