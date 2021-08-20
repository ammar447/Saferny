import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LogIN from '../views/Login.vue';
import Account from '../views/Account.vue';
import Start from '../views/Start.vue';
import Booking from '../views/Booking.vue';
import DetalesBooking from '../views/DetalesBooking.vue';
import MyTravels from '../views/MyTravel.vue';
import Details from '../views/Details.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/About.vue');
		},
	},
	{
		path: '/Login',
		name: 'Login',
		component: LogIN,
	},
	{
		path: '/Account',
		name: 'Account',
		component: Account,
	},
	{
		path: '/Start',
		name: 'Start',
		component: Start,
	},
	{
		path: '/Booking',
		name: 'Booking',
		component: Booking,
	},
	{
		path: '/DetalesBooking',
		name: 'DetalesBooking',
		component: DetalesBooking,
	},
	{
		path: '/MyTravels',
		name: 'MyTravels',
		component: MyTravels,
	},
	{
		path: '/Details',
		name: 'Details',
		component: Details,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
