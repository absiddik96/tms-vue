const state = {
    users: [],
    addNewURL: '',
    spinner: true,
}

const getters = {
    allUser: state => state.users,
    addNewURL: state => state.addNewURL
}

const actions = {
    fetchData({ state }) {
        axios.post('/admin/user-list')
            .then(res => {
                state.users = res.data
                state.spinner = false
            })
    },
    addNewUser({ state }) {
        state.addNewURL = baseURL + '/admin/users/create';
    },
    deleteUser({ },userId) {
        alert(userId)
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