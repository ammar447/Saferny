/* eslint-disable prettier/prettier */
export default {
    SET_Trip(state,data) {
        state.Trip = data;
    },
    Set_One (state,data) {
        state.one = data;
    },
    Set_From(state) {
        state.Trip = '';
    }
}