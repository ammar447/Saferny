/* eslint-disable prettier/prettier */
import ProdectsServices from '../Services/ProdectsServices';
 import axios from 'axios';
export default {
    getTrip({commit}) {
        ProdectsServices.getProdect().then (response => {
            console.log(response.data);
            commit ('SET_Trip', response.data)
        })
    },
    oneTrip({commit},va) {
        console.log("va" + va);
   axios.get("http://localhost:4001/trips/"+va).then(res=> {
    commit("Set_One",res)
    console.log(res.data);
   })
 
   },
    getFrom({commit},value) {
        console.log("vaule from Action :" + value.From);
        commit("Set_From")
        axios.get("http://localhost:4001/trips?from="+value.From).then( response=> {
            commit ('SET_Trip', response.data)
        })
        
         
    },
    getTo({commit},value) {
        console.log("vaule from Action :" + value.From);
        commit("Set_From")
        axios.get("http://localhost:4001/trips?to="+value.To).then( response=> {
            commit ('SET_Trip', response.data)
        })
        
         
    },
    getFromandTo({commit},value) {
        console.log("vaule from Action :" + value.From);
        commit("Set_From")
        axios.get("http://localhost:4001/trips?to="+value.To +"&from="+ value.From).then( response=> {
            commit ('SET_Trip', response.data)
        })
        console.log("http://localhost:4001/trips?to="+value.To +"&from="+ value.From);
         
    },
}
 
  /**
   *    
   */