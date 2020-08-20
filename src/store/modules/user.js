import axios from 'axios';

var server = "http://localhost:3000/api";

const state = {
    user: {},
    users: []
}

const getters = {
    user: state => state.user,
    users: state => state.users
};

const actions = {
    async fetchUser ({ commit }) {

        const { data: response } = await axios.get(server + "/user/me", 
            {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        
        commit("setUser", response);
    },
    async fetchUsers ({ commit }) {

        const { data: response } = await axios.get(server + "/users" , 
        {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        
        console.table(response);

        commit("setUsers", response);
    },
    async updateUser ( {commit}, data) {
        try {

            const { data: response } = await axios.put(server + "/user", 
            data,
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });

            commit("setUser", response);
            return response;

        } catch (error) {
            return {error: true, errorinfo: error};
        }
    }
}

const mutations = {
    setUser: (state, user) => (state.user = user),
    setUsers: (state, users) => (state.users = users)
}

export default {
    state,
    getters,
    actions,
    mutations
};