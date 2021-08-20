/* eslint-disable prettier/prettier */
 import axios from 'axios';
export default {
    getMyTravels ({commit}) {
        axios
        .get('http://localhost:4001/checkin', {
            headers: {
              
               Authorization: "Bearer " +  localStorage.getItem('token')
            }
         } )
        .then(res => {
            commit ('SET_MyTravels', res.data)
           console.log('profile is:', res.data);
          })
          .catch(error => console.log(error)) 
    }
}
 /***import ProdectsServices from '../Services/ProdectsServices';
  *     ProdectsServices.getProdect().then (response => {
            console.log(response.data);
            commit ('SET_MyTravels', response.data)
        })
  * 
  */