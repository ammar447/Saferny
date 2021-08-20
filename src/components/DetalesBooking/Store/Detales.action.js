/* eslint-disable prettier/prettier */
 import axios from 'axios'
export default {
    checkinTrip({commit}, check) {
        axios.post ("http://localhost:4001/checkin", {
            weight: check.Details.weight,
            planeSeatId : check.Details.planeSeatId,
            ticketType :  check.Details.ticketType,
            tripId : check.idtrip
          },
          {
              headers: {
                
                 Authorization: "Bearer " +  localStorage.getItem('token')
              }
           }).then (res => {
            commit("Set_checkinTrip",res)
            window.location.replace("/Start")
           })
      }
}
/**     import axios from "axios"
 * 
 *    console.log("id trip :" + check.idtrip );
          console.log("wight : " + check.Details.weight);
          commit("Set_checkinTrip",check)
 * 
 * 
 *     axios.post ("http://localhost:4001/checkin", {
            weight: check.Details.weight,
            planeSeatId : check.Details.planeSeatId,
            ticketType :  check.Details.ticketType,
            tripId : check.idtrip
          },
          {
              headers: {
                
                 Authorization: "Bearer " +  localStorage.getItem('token')
              }
           }).then (res => {
            commit("Set_checkinTrip",res)
           })

 */