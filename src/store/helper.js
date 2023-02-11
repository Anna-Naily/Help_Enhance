const getDefaultState = () => {
  return {
    helper: false,
    stage: 1
  };
};
const state = getDefaultState();
const getters = {
  getHelper: state => {
    return state.helper;
  },
  getStage: state => {
    return state.stage;
  }
};
const mutations = {
  helperOn(state) {
    state.helper = true;
    state.stage = 1;
  },
  helperOff(state) {
    state.helper = false;
    state.stage = 1;
  },
  nextStage(state) {
    state.stage++;
  }
};
const actions = {
  helperOn({ commit }) {
    commit('helperOn');
  },
  helperOff({ commit }) {
    commit('helperOff');
  },
  nextStage({ commit }) {
    commit('nextStage');
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
