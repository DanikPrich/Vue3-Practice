import { createStore } from "vuex";

export default createStore({
	state: { //global storage Vuex
		likes: 2
	,
	},
	getters: { //Getters are very simmilar to computed 
		doubleLikes(state) {
			return state.likes * 2
		}
	}, 
	mutations: {
		incrementLikes(state) {
			state.likes += 1;
		},
		decrementLikes(state) {
			state.likes -= 1;
		}
	},
	actions: {

	},
	modules: {

	}
})