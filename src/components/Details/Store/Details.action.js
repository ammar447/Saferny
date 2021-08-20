/* eslint-disable prettier/prettier */
 import axios from 'axios';
export default {
   
    oneTripid({commit},va) {
        console.log("va" + va);
   axios.get("http://localhost:4001/trips/"+va).then(res=> {
    commit("Set_OneId",res.data)
    console.log(res.data);
   })
 
   }
}
 
  /**
   *    
   */