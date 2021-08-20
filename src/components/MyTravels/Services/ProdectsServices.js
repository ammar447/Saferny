/* eslint-disable prettier/prettier */
import {getProdect } from './ProdectsAPI';
import axios from "axios";
export default {
    getProdect () {
        return (
            axios.get(getProdect +{headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}} ).then( res => {
                return res;
            } )
        )
   
    }
}