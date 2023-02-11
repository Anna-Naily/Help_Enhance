const getDefaultState = () => {
  return {
    jewelryCalculation: {
      cost: 0, // потрачено
      receipt: 0, // получено
      profit: 0, // прибыль
      priceItem0: 0,
      priceItem1: 0,
      priceItem2: 0,
      priceItem3: 0,
      priceItem4: 0,
      priceItem5: 0,
      priceFailstack1: 0,
      priceFailstack2: 0,
      priceFailstack3: 0,
      priceFailstack4: 0,
      priceFailstack5: 0
    },
    armorCalculation: {
      cost: 0,
      receipt: 0,
      profit: 0,
      priceItem0: 0,
      priceItem1: 0,
      priceItem2: 0,
      priceItem3: 0,
      priceItem4: 0,
      priceItem5: 0,
      priceFailstack1: 0,
      priceFailstack2: 0,
      priceFailstack3: 0,
      priceFailstack4: 0,
      priceFailstack5: 0,
      priceMagicStone: 0
    },
    blackstarCalculation: {
      cost: 0,
      receipt: 0,
      profit: 0,
      priceItem0: 0,
      priceItem1: 0,
      priceItem2: 0,
      priceItem3: 0,
      priceItem4: 0,
      priceItem5: 0,
      priceFailstack1: 0,
      priceFailstack2: 0,
      priceFailstack3: 0,
      priceFailstack4: 0,
      priceFailstack5: 0,
      priceMagicStone: 0
    },
    armorGodCalculation: {
      cost: 0,
      receipt: 0,
      profit: 0,
      priceItem0: 0,
      priceItem1: 0,
      priceItem2: 0,
      priceItem3: 0,
      priceItem4: 0,
      priceItem5: 0,
      priceFailstack1: 0,
      priceFailstack2: 0,
      priceFailstack3: 0,
      priceFailstack4: 0,
      priceFailstack5: 0,
      priceMagicStone: 0
    },
    manosCalculation: {
      cost: 0,
      receipt: 0,
      profit: 0,
      priceItem0: 0,
      priceItem1: 0,
      priceItem2: 0,
      priceItem3: 0,
      priceItem4: 0,
      priceItem5: 0,
      priceFailstack1: 0,
      priceFailstack2: 0,
      priceFailstack3: 0,
      priceFailstack4: 0,
      priceFailstack5: 0,
      priceMagicStone: 0
    },
    priceCookie: 0,
    priceCron: 0,
    tax: 0.85,
    changer: false //отслеживатель изменения
  };
};
const state = getDefaultState();
const getters = {
  getResultJewelry: state => {
    return state.jewelryCalculation;
  },
  getResultArmor: state => {
    return state.armorCalculation;
  },
  getResultBlackstar: state => {
    return state.blackstarCalculation;
  },
  getResultArmorGod: state => {
    return state.armorGodCalculation;
  },
  getResultManos: state => {
    return state.manosCalculation;
  },
  getPriceCookie: state => {
    return state.priceCookie;
  },
  getTax: state => {
    return state.tax;
  },
  getChanger: state => {
    return state.changer;
  },
  getPriceCron: state => {
    return state.priceCron;
  }
};
const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  //метод для отслеживания изменений. для watch в компонентах
  setChanger(state) {
    state.changer = !state.changer;
  },
  setInputCostCookie(state, value) {
    state.priceCookie = value;
  },
  setInputCostCron(state, value) {
    state.priceCron = value;
  },
  setInputCostMagicStone(state, value) {
    state.armorCalculation.priceMagicStone = value;
  },
  setInputCostIntegrityStone(state, value) {
    state.blackstarCalculation.priceMagicStone = value;
  },
  setInputCostChaosStone(state, value) {
    state.armorGodCalculation.priceMagicStone = value;
  },
  setInputCostManosStone(state, value) {
    state.manosCalculation.priceMagicStone = value;
  },
  setInputCostJewelry(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        state.jewelryCalculation.priceItem0 = obj.value;

        break;
      case 1:
        state.jewelryCalculation.priceItem1 = obj.value;
        break;
      case 2:
        state.jewelryCalculation.priceItem2 = obj.value;
        break;
      case 3:
        state.jewelryCalculation.priceItem3 = obj.value;
        break;
      case 4:
        state.jewelryCalculation.priceItem4 = obj.value;
        break;
      case 5:
        state.jewelryCalculation.priceItem5 = obj.value;
        break;

      default:
        break;
    }
  },
  setInputCostArmor(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        state.armorCalculation.priceItem0 = obj.value;
        break;
      case 1:
        state.armorCalculation.priceItem1 = obj.value;
        break;
      case 2:
        state.armorCalculation.priceItem2 = obj.value;
        break;
      case 3:
        state.armorCalculation.priceItem3 = obj.value;
        break;
      case 4:
        state.armorCalculation.priceItem4 = obj.value;
        break;
      case 5:
        state.armorCalculation.priceItem5 = obj.value;
        break;

      default:
        break;
    }
  },
  setInputCostBlackstar(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        state.blackstarCalculation.priceItem0 = obj.value;
        break;
      case 1:
        state.blackstarCalculation.priceItem1 = obj.value;
        break;
      case 2:
        state.blackstarCalculation.priceItem2 = obj.value;
        break;
      case 3:
        state.blackstarCalculation.priceItem3 = obj.value;
        break;
      case 4:
        state.blackstarCalculation.priceItem4 = obj.value;
        break;
      case 5:
        state.blackstarCalculation.priceItem5 = obj.value;
        break;

      default:
        break;
    }
  },
  setInputCostArmorGod(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        state.armorGodCalculation.priceItem0 = obj.value;
        break;
      case 1:
        state.armorGodCalculation.priceItem1 = obj.value;
        break;
      case 2:
        state.armorGodCalculation.priceItem2 = obj.value;
        break;
      case 3:
        state.armorGodCalculation.priceItem3 = obj.value;
        break;
      case 4:
        state.armorGodCalculation.priceItem4 = obj.value;
        break;
      case 5:
        state.armorGodCalculation.priceItem5 = obj.value;
        break;

      default:
        break;
    }
  },
  setInputCostManos(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        state.manosCalculation.priceItem0 = obj.value;
        break;
      case 1:
        state.manosCalculation.priceItem1 = obj.value;
        break;
      case 2:
        state.manosCalculation.priceItem2 = obj.value;
        break;
      case 3:
        state.manosCalculation.priceItem3 = obj.value;
        break;
      case 4:
        state.manosCalculation.priceItem4 = obj.value;
        break;
      case 5:
        state.manosCalculation.priceItem5 = obj.value;
        break;

      default:
        break;
    }
  },
  setCostFailstackJewelry(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 1:
        state.jewelryCalculation.priceFailstack1 = obj.value;
        break;
      case 2:
        state.jewelryCalculation.priceFailstack2 = obj.value;
        break;
      case 3:
        state.jewelryCalculation.priceFailstack3 = obj.value;
        break;
      case 4:
        state.jewelryCalculation.priceFailstack4 = obj.value;
        break;
      case 5:
        state.jewelryCalculation.priceFailstack5 = obj.value;
        break;

      default:
        break;
    }
  },
  setCostFailstackArmor(state, obj) {
    console.log(obj);
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 1:
        state.armorCalculation.priceFailstack1 = obj.value;
        break;
      case 2:
        state.armorCalculation.priceFailstack2 = obj.value;
        break;
      case 3:
        state.armorCalculation.priceFailstack3 = obj.value;
        break;
      case 4:
        state.armorCalculation.priceFailstack4 = obj.value;
        break;
      case 5:
        state.armorCalculation.priceFailstack5 = obj.value;
        break;

      default:
        break;
    }
  },
  setCostFailstackBlackstar(state, obj) {
    console.log(obj);
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 1:
        state.blackstarCalculation.priceFailstack1 = obj.value;
        break;
      case 2:
        state.blackstarCalculation.priceFailstack2 = obj.value;
        break;
      case 3:
        state.blackstarCalculation.priceFailstack3 = obj.value;
        break;
      case 4:
        state.blackstarCalculation.priceFailstack4 = obj.value;
        break;
      case 5:
        state.blackstarCalculation.priceFailstack5 = obj.value;
        break;

      default:
        break;
    }
  },
  setCostFailstackArmorGod(state, obj) {
    console.log(obj);
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 1:
        state.armorGodCalculation.priceFailstack1 = obj.value;
        break;
      case 2:
        state.armorGodCalculation.priceFailstack2 = obj.value;
        break;
      case 3:
        state.armorGodCalculation.priceFailstack3 = obj.value;
        break;
      case 4:
        state.armorGodCalculation.priceFailstack4 = obj.value;
        break;
      case 5:
        state.armorGodCalculation.priceFailstack5 = obj.value;
        break;

      default:
        break;
    }
  },
  setCostFailstackManos(state, obj) {
    console.log(obj);
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 1:
        state.manosCalculation.priceFailstack1 = obj.value;
        break;
      case 2:
        state.manosCalculation.priceFailstack2 = obj.value;
        break;
      case 3:
        state.manosCalculation.priceFailstack3 = obj.value;
        break;
      case 4:
        state.manosCalculation.priceFailstack4 = obj.value;
        break;
      case 5:
        state.manosCalculation.priceFailstack5 = obj.value;
        break;

      default:
        break;
    }
  },
  setTax(state, value) {
    state.tax = value;
    state.changer = !state.changer;
  },
  setResultJewelry(state, obj) {
    state.jewelryCalculation.cost = obj.cost;
    state.jewelryCalculation.profit = obj.profit;
    state.jewelryCalculation.receipt = obj.receipt;
  },
  setResultArmor(state, obj) {
    state.armorCalculation.cost = obj.cost;
    state.armorCalculation.profit = obj.profit;
    state.armorCalculation.receipt = obj.receipt;
  },
  setResultBlackstar(state, obj) {
    state.blackstarCalculation.cost = obj.cost;
    state.blackstarCalculation.profit = obj.profit;
    state.blackstarCalculation.receipt = obj.receipt;
  },
  setResultArmorGod(state, obj) {
    state.armorGodCalculation.cost = obj.cost;
    state.armorGodCalculation.profit = obj.profit;
    state.armorGodCalculation.receipt = obj.receipt;
  },
  setResultManos(state, obj) {
    state.manosCalculation.cost = obj.cost;
    state.manosCalculation.profit = obj.profit;
    state.manosCalculation.receipt = obj.receipt;
  }
};
const actions = {
  refreshCalculation({ commit }) {
    commit('resetState');
  },
  setInputCostJewelry({ commit }, obj) {
    commit('setInputCostJewelry', obj);
  },
  setInputCostArmor({ commit }, obj) {
    commit('setInputCostArmor', obj);
  },
  setInputCostBlackstar({ commit }, obj) {
    commit('setInputCostBlackstar', obj);
  },
  setInputCostArmorGod({ commit }, obj) {
    commit('setInputCostArmorGod', obj);
  },
  setInputCostManos({ commit }, obj) {
    commit('setInputCostManos', obj);
  },
  setInputCostManosStone({ commit }, value) {
    commit('setInputCostManosStone', value);
  },
  setInputCostChaosStone({ commit }, value) {
    commit('setInputCostChaosStone', value);
  },
  setInputCostIntegrityStone({ commit }, value) {
    commit('setInputCostIntegrityStone', value);
  },
  setCostFailstackJewelry({ commit }, obj) {
    commit('setCostFailstackJewelry', obj);
  },
  setCostFailstackArmor({ commit }, obj) {
    commit('setCostFailstackArmor', obj);
  },
  setCostFailstackBlackstar({ commit }, obj) {
    commit('setCostFailstackBlackstar', obj);
  },
  setCostFailstackArmorGod({ commit }, obj) {
    commit('setCostFailstackArmorGod', obj);
  },
  setCostFailstackManos({ commit }, obj) {
    commit('setCostFailstackManos', obj);
  },
  setTax({ commit }, value) {
    commit('setTax', value);
  },
  setResultJewelry({ commit }, obj) {
    commit('setResultJewelry', obj);
  },
  setResultArmor({ commit }, obj) {
    commit('setResultArmor', obj);
  },
  setResultBlackstar({ commit }, obj) {
    commit('setResultBlackstar', obj);
  },
  setResultArmorGod({ commit }, obj) {
    commit('setResultArmorGod', obj);
  },
  setResultManos({ commit }, obj) {
    commit('setResultManos', obj);
  },
  setChanger({ commit }) {
    commit('setChanger');
  },
  setInputCostCookie({ commit }, value) {
    commit('setInputCostCookie', value);
  },
  setInputCostMagicStone({ commit }, value) {
    commit('setInputCostMagicStone', value);
  },
  setInputCostCron({ commit }, value) {
    commit('setInputCostCron', value);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
