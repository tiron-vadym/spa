import { fetchComments, createComment } from '../../api/comments';

const state = {
    comments: [],
};

const mutations = {
    SET_COMMENTS(state, comments) {
        state.comments = comments;
    },
    ADD_COMMENT(state, comment) {
        state.comments.push(comment);
    },
};

const actions = {
    async fetchComments({ commit }) {
        const response = await fetchComments();
        commit('SET_COMMENTS', response.data);
    },
    async createComment({ commit }, comment) {
        const response = await createComment(comment);
        commit('ADD_COMMENT', response.data);
    },
};

const getters = {
    comments: state => state.comments,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
