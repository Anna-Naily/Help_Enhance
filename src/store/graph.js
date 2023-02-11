const getDefaultState = () => {
  return {
    data: []
  };
};

const state = getDefaultState();

const getters = {
  getData: state => {
    return state.data;
  }
};
const mutations = {
  addToDatabase(state, el) {
    state.data.push(el);
  },
  refreshGraph(state) {
    Object.assign(state, getDefaultState());
  }
};
const actions = {
  addToDatabase({ commit }, el) {
    commit('addToDatabase', el);
  },
  refreshGraph({ commit }) {
    commit('refreshGraph');
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
