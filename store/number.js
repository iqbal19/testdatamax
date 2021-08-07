export const state = () => ({
	number : 0
});

export const getters = {
	getNumber: state => {
		return state.number
	}
};

export const mutations = {
	increment (state) {
		if(state.number < 50){
			state.number++
		}	
	},
	decrement (state) {
		if(state.number > 0) {
			state.number--
		}
	},
	reset (state) {
		state.number = 0
	}
};

