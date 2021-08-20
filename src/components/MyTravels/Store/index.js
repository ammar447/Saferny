/* eslint-disable prettier/prettier */
 
import state from './MyTravels.state'
import getters from  './MyTravels.getters'
import mutations from   './MyTravels.mutation'
import actions from  './MyTravels.action'
export default {
    namespaced : true,
    state ,
    getters,
    mutations,
    actions,
    module : {}
}
