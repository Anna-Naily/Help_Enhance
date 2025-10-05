const getDefaultState = () => {
  return {
    infoData: [],
    statisticalDataJewelry: {
      countSuccessTo1: 0,
      countTryTo1: 0,
      finalChanceTo1: 0,
      countSuccessTo2: 0,
      countTryTo2: 0,
      finalChanceTo2: 0,
      countSuccessTo3: 0,
      countTryTo3: 0,
      finalChanceTo3: 0,
      countSuccessTo4: 0,
      countTryTo4: 0,
      finalChanceTo4: 0,
      countSuccessTo5: 0,
      countTryTo5: 0,
      finalChanceTo5: 0,
      countLostJewelry: 0,
      countLostCron: 0
    },
    statisticalDataArmor: {
      countSuccessTo1: 0,
      countTryTo1: 0,
      finalChanceTo1: 0,
      countSuccessTo2: 0,
      countTryTo2: 0,
      finalChanceTo2: 0,
      countSuccessTo3: 0,
      countTryTo3: 0,
      finalChanceTo3: 0,
      countSuccessTo4: 0,
      countTryTo4: 0,
      finalChanceTo4: 0,
      countSuccessTo5: 0,
      countTryTo5: 0,
      finalChanceTo5: 0,
      countLostStone: 0,
      countLostCookie: 0,
      countLostCron: 0
    },
    statisticalDataBlackstar: {
      countSuccessTo1: 0,
      countTryTo1: 0,
      finalChanceTo1: 0,
      countSuccessTo2: 0,
      countTryTo2: 0,
      finalChanceTo2: 0,
      countSuccessTo3: 0,
      countTryTo3: 0,
      finalChanceTo3: 0,
      countSuccessTo4: 0,
      countTryTo4: 0,
      finalChanceTo4: 0,
      countSuccessTo5: 0,
      countTryTo5: 0,
      finalChanceTo5: 0,
      countLostStone: 0,
      countLostCookie: 0,
      countLostCron: 0
    },
    statisticalDataArmorGod: {
      countSuccessTo1: 0,
      countTryTo1: 0,
      finalChanceTo1: 0,
      countSuccessTo2: 0,
      countTryTo2: 0,
      finalChanceTo2: 0,
      countSuccessTo3: 0,
      countTryTo3: 0,
      finalChanceTo3: 0,
      countSuccessTo4: 0,
      countTryTo4: 0,
      finalChanceTo4: 0,
      countSuccessTo5: 0,
      countTryTo5: 0,
      finalChanceTo5: 0,
      countLostStone: 0,
      countLostCookie: 0,
      countLostCron: 0
    },
    statisticalDataManos: {
      countSuccessTo1: 0,
      countTryTo1: 0,
      finalChanceTo1: 0,
      countSuccessTo2: 0,
      countTryTo2: 0,
      finalChanceTo2: 0,
      countSuccessTo3: 0,
      countTryTo3: 0,
      finalChanceTo3: 0,
      countSuccessTo4: 0,
      countTryTo4: 0,
      finalChanceTo4: 0,
      countSuccessTo5: 0,
      countTryTo5: 0,
      finalChanceTo5: 0,
      countLostStone: 0,
      countLostCron: 0
    }
  };
};
const state = getDefaultState();
const getters = {
  getInfoData: state => {
    return state.infoData;
  },
  getStatisticalDataJewelry: state => {
    return state.statisticalDataJewelry;
  },
  getStatisticalDataArmor: state => {
    return state.statisticalDataArmor;
  },
  getStatisticalDataBlackstar: state => {
    return state.statisticalDataBlackstar;
  },
  getStatisticalDataArmorGod: state => {
    return state.statisticalDataArmorGod;
  },
  getStatisticalDataManos: state => {
    return state.statisticalDataManos;
  },
  getDefaultState: state => {
    return state.getDefaultState;
  }
};
const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  addData(state, item) {
    state.infoData.unshift(item);
  },
  countStatisticJewelry(state, inputObj) {
    state.statisticalDataJewelry.countLostCron += inputObj.lostCron;
    switch (inputObj.level) {
      case 1:
        state.statisticalDataJewelry.countTryTo1++;
        if (inputObj.result) {
          state.statisticalDataJewelry.countSuccessTo1++;
          state.statisticalDataJewelry.finalChanceTo1 =
            (state.statisticalDataJewelry.countSuccessTo1 /
              state.statisticalDataJewelry.countTryTo1) *
            100;
          state.statisticalDataJewelry.countLostJewelry += 2;
        } else {
          if (inputObj.usingCron) {
            state.statisticalDataJewelry.countLostJewelry++;
          } else {
            state.statisticalDataJewelry.countLostJewelry += 2;
          }
        }

        break;
      case 2:
        if (inputObj.result) state.statisticalDataJewelry.countSuccessTo2++;
        state.statisticalDataJewelry.countTryTo2++;
        state.statisticalDataJewelry.finalChanceTo2 =
          (state.statisticalDataJewelry.countSuccessTo2 /
            state.statisticalDataJewelry.countTryTo2) *
          100;
        state.statisticalDataJewelry.countLostJewelry++;
        break;
      case 3:
        if (inputObj.result) state.statisticalDataJewelry.countSuccessTo3++;
        state.statisticalDataJewelry.countTryTo3++;
        state.statisticalDataJewelry.finalChanceTo3 =
          (state.statisticalDataJewelry.countSuccessTo3 /
            state.statisticalDataJewelry.countTryTo3) *
          100;
        state.statisticalDataJewelry.countLostJewelry++;
        break;
      case 4:
        if (inputObj.result) state.statisticalDataJewelry.countSuccessTo4++;
        state.statisticalDataJewelry.countTryTo4++;
        state.statisticalDataJewelry.finalChanceTo4 =
          (state.statisticalDataJewelry.countSuccessTo4 /
            state.statisticalDataJewelry.countTryTo4) *
          100;
        state.statisticalDataJewelry.countLostJewelry++;
        break;
      case 5:
        if (inputObj.result) state.statisticalDataJewelry.countSuccessTo5++;
        state.statisticalDataJewelry.countTryTo5++;
        state.statisticalDataJewelry.finalChanceTo5 =
          (state.statisticalDataJewelry.countSuccessTo5 /
            state.statisticalDataJewelry.countTryTo5) *
          100;
        state.statisticalDataJewelry.countLostJewelry++;
        break;

      default:
        break;
    }
  },
  countStatisticArmor(state, inputObj) {
    state.statisticalDataArmor.countLostCron += inputObj.lostCron;
    switch (inputObj.level) {
      case 1:
        if (inputObj.result) state.statisticalDataArmor.countSuccessTo1++;
        else state.statisticalDataArmor.countLostCookie += 10;

        state.statisticalDataArmor.countTryTo1++;
        state.statisticalDataArmor.finalChanceTo1 =
          (state.statisticalDataArmor.countSuccessTo1 /
            state.statisticalDataArmor.countTryTo1) *
          100;
        state.statisticalDataArmor.countLostStone++;
        break;
      case 2:
        if (inputObj.result) state.statisticalDataArmor.countSuccessTo2++;
        else state.statisticalDataArmor.countLostCookie += 10;

        state.statisticalDataArmor.countTryTo2++;
        state.statisticalDataArmor.finalChanceTo2 =
          (state.statisticalDataArmor.countSuccessTo2 /
            state.statisticalDataArmor.countTryTo2) *
          100;
        state.statisticalDataArmor.countLostStone++;
        break;
      case 3:
        if (inputObj.result) state.statisticalDataArmor.countSuccessTo3++;
        else state.statisticalDataArmor.countLostCookie += 10;

        state.statisticalDataArmor.countTryTo3++;
        state.statisticalDataArmor.finalChanceTo3 =
          (state.statisticalDataArmor.countSuccessTo3 /
            state.statisticalDataArmor.countTryTo3) *
          100;
        state.statisticalDataArmor.countLostStone++;
        break;
      case 4:
        if (inputObj.result) state.statisticalDataArmor.countSuccessTo4++;
        else state.statisticalDataArmor.countLostCookie += 10;

        state.statisticalDataArmor.countTryTo4++;
        state.statisticalDataArmor.finalChanceTo4 =
          (state.statisticalDataArmor.countSuccessTo4 /
            state.statisticalDataArmor.countTryTo4) *
          100;
        state.statisticalDataArmor.countLostStone++;
        break;
      case 5:
        if (inputObj.result) state.statisticalDataArmor.countSuccessTo5++;
        else state.statisticalDataArmor.countLostCookie += 10;

        state.statisticalDataArmor.countTryTo5++;
        state.statisticalDataArmor.finalChanceTo5 =
          (state.statisticalDataArmor.countSuccessTo5 /
            state.statisticalDataArmor.countTryTo5) *
          100;
        state.statisticalDataArmor.countLostStone++;
        break;

      default:
        break;
    }
  },
  countStatisticBlackstar(state, inputObj) {
    state.statisticalDataBlackstar.countLostCron += inputObj.lostCron;
    switch (inputObj.level) {
      case 1:
        if (inputObj.result) state.statisticalDataBlackstar.countSuccessTo1++;
        else state.statisticalDataBlackstar.countLostCookie += 20;

        state.statisticalDataBlackstar.countTryTo1++;
        state.statisticalDataBlackstar.finalChanceTo1 =
          (state.statisticalDataBlackstar.countSuccessTo1 /
            state.statisticalDataBlackstar.countTryTo1) *
          100;
        state.statisticalDataBlackstar.countLostStone++;
        break;
      case 2:
        if (inputObj.result) state.statisticalDataBlackstar.countSuccessTo2++;
        else state.statisticalDataBlackstar.countLostCookie += 20;

        state.statisticalDataBlackstar.countTryTo2++;
        state.statisticalDataBlackstar.finalChanceTo2 =
          (state.statisticalDataBlackstar.countSuccessTo2 /
            state.statisticalDataBlackstar.countTryTo2) *
          100;
        state.statisticalDataBlackstar.countLostStone++;
        break;
      case 3:
        if (inputObj.result) state.statisticalDataBlackstar.countSuccessTo3++;
        else state.statisticalDataBlackstar.countLostCookie += 20;

        state.statisticalDataBlackstar.countTryTo3++;
        state.statisticalDataBlackstar.finalChanceTo3 =
          (state.statisticalDataBlackstar.countSuccessTo3 /
            state.statisticalDataBlackstar.countTryTo3) *
          100;
        state.statisticalDataBlackstar.countLostStone++;
        break;
      case 4:
        if (inputObj.result) state.statisticalDataBlackstar.countSuccessTo4++;
        else state.statisticalDataBlackstar.countLostCookie += 20;

        state.statisticalDataBlackstar.countTryTo4++;
        state.statisticalDataBlackstar.finalChanceTo4 =
          (state.statisticalDataBlackstar.countSuccessTo4 /
            state.statisticalDataBlackstar.countTryTo4) *
          100;
        state.statisticalDataBlackstar.countLostStone++;
        break;
      case 5:
        if (inputObj.result) state.statisticalDataBlackstar.countSuccessTo5++;
        else state.statisticalDataBlackstar.countLostCookie += 20;

        state.statisticalDataBlackstar.countTryTo5++;
        state.statisticalDataBlackstar.finalChanceTo5 =
          (state.statisticalDataBlackstar.countSuccessTo5 /
            state.statisticalDataBlackstar.countTryTo5) *
          100;
        state.statisticalDataBlackstar.countLostStone++;
        break;

      default:
        break;
    }
  },
  countStatisticArmorGod(state, inputObj) {
    state.statisticalDataArmorGod.countLostCron += inputObj.lostCron;
    switch (inputObj.level) {
      case 1:
        if (inputObj.result) state.statisticalDataArmorGod.countSuccessTo1++;
        else state.statisticalDataArmorGod.countLostCookie += 30;

        state.statisticalDataArmorGod.countTryTo1++;
        state.statisticalDataArmorGod.finalChanceTo1 =
          (state.statisticalDataArmorGod.countSuccessTo1 /
            state.statisticalDataArmorGod.countTryTo1) *
          100;
        state.statisticalDataArmorGod.countLostStone++;
        break;
      case 2:
        if (inputObj.result) state.statisticalDataArmorGod.countSuccessTo2++;
        else state.statisticalDataArmorGod.countLostCookie += 30;

        state.statisticalDataArmorGod.countTryTo2++;
        state.statisticalDataArmorGod.finalChanceTo2 =
          (state.statisticalDataArmorGod.countSuccessTo2 /
            state.statisticalDataArmorGod.countTryTo2) *
          100;
        state.statisticalDataArmorGod.countLostStone++;
        break;
      case 3:
        if (inputObj.result) state.statisticalDataArmorGod.countSuccessTo3++;
        else state.statisticalDataArmorGod.countLostCookie += 30;

        state.statisticalDataArmorGod.countTryTo3++;
        state.statisticalDataArmorGod.finalChanceTo3 =
          (state.statisticalDataArmorGod.countSuccessTo3 /
            state.statisticalDataArmorGod.countTryTo3) *
          100;
        state.statisticalDataArmorGod.countLostStone++;
        break;
      case 4:
        if (inputObj.result) state.statisticalDataArmorGod.countSuccessTo4++;
        else state.statisticalDataArmorGod.countLostCookie += 30;

        state.statisticalDataArmorGod.countTryTo4++;
        state.statisticalDataArmorGod.finalChanceTo4 =
          (state.statisticalDataArmorGod.countSuccessTo4 /
            state.statisticalDataArmorGod.countTryTo4) *
          100;
        state.statisticalDataArmorGod.countLostStone++;
        break;
      case 5:
        if (inputObj.result) state.statisticalDataArmorGod.countSuccessTo5++;
        else state.statisticalDataArmorGod.countLostCookie += 30;

        state.statisticalDataArmorGod.countTryTo5++;
        state.statisticalDataArmorGod.finalChanceTo5 =
          (state.statisticalDataArmorGod.countSuccessTo5 /
            state.statisticalDataArmorGod.countTryTo5) *
          100;
        state.statisticalDataArmorGod.countLostStone++;
        break;

      default:
        break;
    }
  },
  countStatisticManos(state, inputObj) {
    state.statisticalDataManos.countLostCron += inputObj.lostCron;
    switch (inputObj.level) {
      case 1:
        if (inputObj.result) state.statisticalDataManos.countSuccessTo1++;

        state.statisticalDataManos.countTryTo1++;
        state.statisticalDataManos.finalChanceTo1 =
          (state.statisticalDataManos.countSuccessTo1 /
            state.statisticalDataManos.countTryTo1) *
          100;
        state.statisticalDataManos.countLostStone += 10;
        break;
      case 2:
        if (inputObj.result) state.statisticalDataManos.countSuccessTo2++;

        state.statisticalDataManos.countTryTo2++;
        state.statisticalDataManos.finalChanceTo2 =
          (state.statisticalDataManos.countSuccessTo2 /
            state.statisticalDataManos.countTryTo2) *
          100;
        state.statisticalDataManos.countLostStone += 11;
        break;
      case 3:
        if (inputObj.result) state.statisticalDataManos.countSuccessTo3++;

        state.statisticalDataManos.countTryTo3++;
        state.statisticalDataManos.finalChanceTo3 =
          (state.statisticalDataManos.countSuccessTo3 /
            state.statisticalDataManos.countTryTo3) *
          100;
        state.statisticalDataManos.countLostStone += 13;
        break;
      case 4:
        if (inputObj.result) state.statisticalDataManos.countSuccessTo4++;

        state.statisticalDataManos.countTryTo4++;
        state.statisticalDataManos.finalChanceTo4 =
          (state.statisticalDataManos.countSuccessTo4 /
            state.statisticalDataManos.countTryTo4) *
          100;
        state.statisticalDataManos.countLostStone += 16;
        break;
      case 5:
        if (inputObj.result) state.statisticalDataManos.countSuccessTo5++;

        state.statisticalDataManos.countTryTo5++;
        state.statisticalDataManos.finalChanceTo5 =
          (state.statisticalDataManos.countSuccessTo5 /
            state.statisticalDataManos.countTryTo5) *
          100;
        state.statisticalDataManos.countLostStone += 20;
        break;

      default:
        break;
    }
  }
};
const actions = {
  addData({ commit }, item) {
    commit('addData', item);
  },
  countStatisticJewelry({ commit }, inputObj) {
    commit('countStatisticJewelry', inputObj);
  },
  countStatisticArmor({ commit }, inputObj) {
    commit('countStatisticArmor', inputObj);
  },
  countStatisticBlackstar({ commit }, inputObj) {
    commit('countStatisticBlackstar', inputObj);
  },
  countStatisticArmorGod({ commit }, inputObj) {
    commit('countStatisticArmorGod', inputObj);
  },
  countStatisticManos({ commit }, inputObj) {
    commit('countStatisticManos', inputObj);
  },
  refreshStatWindow({ commit }) {
    commit('resetState');
  }
};

import data from './data';
import graph from './graph';

export default {
  namespaced: true,
  data,
  state,
  graph,
  actions,
  mutations,
  getters
};
