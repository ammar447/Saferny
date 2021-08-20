/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Login from '../components/Login/Store/index';
import Account from '../components/Account/Store/index';
import Booking from '../components/Booking/Store/index';
import Detales from '../components/DetalesBooking/Store/index';
import Mytravels from '../components/MyTravels/Store/index';
import DetailsMyTravel from "../components/Details/Store/index";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		Account,
		Login,
		Booking,
		Detales,
		Mytravels,
		DetailsMyTravel,
	},
});
