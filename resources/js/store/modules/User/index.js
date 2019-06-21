const state = {
    users: [],
}

const getters = {
    allUser: state => state.users,
}

const actions = {
    fetchData({ state }) {
        axios.post('/admin/user-list')
            .then(res => {
                state.users = res.data
            })
    }
}

const mutations = {

}

export default {
    
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}