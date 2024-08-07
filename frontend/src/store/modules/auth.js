import { login, register, getProfile } from '../../api/auth';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_USER(state, user) {
        state.user = user;
    },
};

const actions = {
    async login({ commit }, user) {
        const response = await login(user);
        commit('SET_TOKEN', response.data.access);
        localStorage.setItem('token', response.data.access);
    },
    async register({ commit }, user) {
        await register(user);
    },
    async getProfile({ commit }) {
        const response = await getProfile();
        commit('SET_USER', response.data);
    },
    logout({ commit }) {
        commit('SET_TOKEN', '');
        localStorage.removeItem('token');
    },
};

const getters = {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
