import axios from 'axios';

var server = "http://localhost:3000/api";

const state = {
    parcels: []
}

const getters = {
    parcels: state => state.parcels
}

const actions = {
    async fetchParcels ({commit}) {
        const { data: response } = await axios.get(server + "/parcels", 
            {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        commit("setParcels", response);
    }
}

const mutations = {
    setParcels: (state, parcels) => state.parcels = parcels
}

export default {
    state,
    getters,
    actions,
    mutations
}