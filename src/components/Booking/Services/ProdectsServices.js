/* eslint-disable prettier/prettier */
import {getProdect} from './ProdectsAPI';
import axios from "axios";
export default {
    getProdect () {
        return (
            axios.get(getProdect).then( res => {
                return res;
            } )
        )
   
    }
}