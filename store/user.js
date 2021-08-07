export const state = () => ({
	users: []
});

export const mutations = {
	SET_USER_DATA(state, payload) {
		state.users = payload
	}
}

export const actions = {
	getUser({ commit }, payload) {
		return new Promise((resolve, reject) => {
			this.$axios.get('https://randomuser.me/api/?results=30').then((res) => {
				commit('SET_USER_DATA', res.data.results)
				resolve()
			})
		})
	},
}