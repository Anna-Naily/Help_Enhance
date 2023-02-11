const getDefaultState = () => {
  return {
    enhanceJewelry: {
      readyCalculate: false,
      level: 0,
      countZero: 0,
      countOne: 0,
      countTwo: 0,
      countThree: 0,
      countFour: 0,
      countFive: 0,
      startCountZero: 100,
      startCountOne: 0,
      startCountTwo: 0,
      startCountThree: 0,
      startCountFour: 0,
      startCountFive: 0,
      addedCountZero: 0,
      addedCountOne: 0,
      addedCountTwo: 0,
      addedCountThree: 0,
      addedCountFour: 0,
      addedCountFive: 0,
      currentChanceGeneral: 0, // Общий текущий шанс усиления
      currentFailstackGeneral: 0, // Общий фейлстак
      chanceLevelDown: 0.4, // Шанс понижения уровня с кронами
      levelDown: false, // Уровень будет понижен или нет.
      // +1
      startChanceto1: 0.25, // Начальный шанс усиления на 1
      deltaChanceto1: 0.025, // Изменение шанса усиления с прибавлением фейлов на 1
      deltaAfterto1: 0.005, // Изменение шанса усиления с прибавлением фейлов на 1 после переходного порога
      startFailstackto1: 20, // Начальный фейлстак на 1
      currentFailstackto1: 20, // Текущий фейлстак
      currentChanceto1: 0, // Текущий шанс усиления на 1
      thresholdFailstackto1: 18,
      maxChanceto1: 0.9,
      countCron1: 47,
      // +2
      startChanceto2: 0.1,
      deltaChanceto2: 0.01,
      deltaAfterto2: 0.002,
      startFailstackto2: 40,
      currentFailstackto2: 40,
      currentChanceto2: 0,
      thresholdFailstackto2: 40,
      maxChanceto2: 0.7,
      countCron2: 142,
      // +3
      startChanceto3: 0.075,
      deltaChanceto3: 0.0075,
      deltaAfterto3: 0.0015,
      startFailstackto3: 44,
      currentFailstackto3: 44,
      currentChanceto3: 0,
      thresholdFailstackto3: 44,
      maxChanceto3: 0.5,
      countCron3: 427,
      // +4
      startChanceto4: 0.025,
      deltaChanceto4: 0.0025,
      deltaAfterto4: 0.0005,
      startFailstackto4: 110,
      currentFailstackto4: 110,
      currentChanceto4: 0,
      thresholdFailstackto4: 110,
      maxChanceto4: 0.4,
      countCron4: 1187,
      // +5
      startChanceto5: 0.005,
      deltaChanceto5: 0.0005,
      startFailstackto5: 190,
      currentFailstackto5: 190,
      currentChanceto5: 0,
      maxChanceto5: 0.3,
      countCron5: 5699
    },
    enhanceArmor: {
      readyCalculate: false,
      level: 0,
      countZero: 0,
      countOne: 0,
      countTwo: 0,
      countThree: 0,
      countFour: 0,
      countFive: 0,
      startCountZero: 1,
      startCountOne: 0,
      startCountTwo: 0,
      startCountThree: 0,
      startCountFour: 0,
      startCountFive: 0,
      addedCountZero: 0,
      addedCountOne: 0,
      addedCountTwo: 0,
      addedCountThree: 0,
      addedCountFour: 0,
      addedCountFive: 0,
      countMagicStone: 0,
      addedCountMagicStone: 0,
      startCountMagicStone: 1000,
      currentChanceGeneral: 0, // Общий текущий шанс усиления
      currentFailstackGeneral: 0, // Общий фейлстак
      // +16
      startChanceto1: 0.118, // Начальный шанс усиления на 1
      deltaChanceto1: 0.0117, // Изменение усиления с прибавлением фейлов на 1
      deltaAfterto1: 0.00023,
      startFailstackto1: 21, // Начальный фейлстак на 1
      currentFailstackto1: 21,
      currentChanceto1: 0, // Текущий шанс усиления на 1
      thresholdFailstackto1: 50,
      maxChanceto1: 0.9,
      countCron1: 10,
      // +17
      startChanceto2: 0.077,
      deltaChanceto2: 0.0076,
      deltaAfterto2: 0.00015,
      startFailstackto2: 30,
      currentFailstackto2: 30,
      currentChanceto2: 0,
      thresholdFailstackto2: 86,
      maxChanceto2: 0.8,
      countCron2: 20,
      // +18
      startChanceto3: 0.063,
      deltaChanceto3: 0.00625,
      deltaAfterto3: 0.000125,
      startFailstackto3: 40,
      currentFailstackto3: 40,
      currentChanceto3: 0,
      thresholdFailstackto3: 105,
      maxChanceto3: 0.8,
      countCron3: 43,
      // +19
      startChanceto4: 0.02,
      deltaChanceto4: 0.002,
      startFailstackto4: 60,
      currentFailstackto4: 60,
      currentChanceto4: 0,
      maxChanceto4: 0.5,
      countCron4: 131,
      // +20
      startChanceto5: 0.003,
      deltaChanceto5: 0.0003,
      startFailstackto5: 110,
      currentFailstackto5: 110,
      currentChanceto5: 0,
      maxChanceto5: 0.3,
      countCron5: 493
    },
    enhanceBlackstar: {
      readyCalculate: false,
      level: 0,
      countZero: 0,
      countOne: 0,
      countTwo: 0,
      countThree: 0,
      countFour: 0,
      countFive: 0,
      startCountZero: 1,
      startCountOne: 0,
      startCountTwo: 0,
      startCountThree: 0,
      startCountFour: 0,
      startCountFive: 0,
      addedCountZero: 0,
      addedCountOne: 0,
      addedCountTwo: 0,
      addedCountThree: 0,
      addedCountFour: 0,
      addedCountFive: 0,
      countMagicStone: 0,
      addedCountMagicStone: 0,
      startCountMagicStone: 1000,
      currentChanceGeneral: 0, // Общий текущий шанс усиления
      currentFailstackGeneral: 0, // Общий фейлстак
      // +16
      startChanceto1: 0.1308, // Начальный шанс усиления на 1
      deltaChanceto1: 0.013, // Изменение усиления с прибавлением фейлов на 1
      deltaAfterto1: 0.0026,
      startFailstackto1: 21, // Начальный фейлстак на 1
      currentFailstackto1: 21,
      currentChanceto1: 0, // Текущий шанс усиления на 1
      thresholdFailstackto1: 45,
      maxChanceto1: 0.9,
      countCron1: 10,
      // +17
      startChanceto2: 0.1063,
      deltaChanceto2: 0.0106,
      deltaAfterto2: 0.0021,
      startFailstackto2: 35,
      currentFailstackto2: 35,
      currentChanceto2: 0,
      thresholdFailstackto2: 56,
      maxChanceto2: 0.8,
      countCron2: 20,
      // +18
      startChanceto3: 0.034,
      deltaChanceto3: 0.0034,
      deltaAfterto3: 0.00065,
      startFailstackto3: 65,
      currentFailstackto3: 65,
      currentChanceto3: 0,
      thresholdFailstackto3: 196,
      maxChanceto3: 0.7,
      countCron3: 100,
      // +19
      startChanceto4: 0.0051,
      deltaChanceto4: 0.0005,
      startFailstackto4: 110,
      currentFailstackto4: 110,
      currentChanceto4: 0,
      maxChanceto4: 0.5,
      countCron4: 591,
      // +20
      startChanceto5: 0.002,
      deltaChanceto5: 0.0002,
      startFailstackto5: 200,
      currentFailstackto5: 200,
      currentChanceto5: 0,
      maxChanceto5: 0.3,
      countCron5: 3670
    },
    enhanceArmorGod: {
      readyCalculate: false,
      level: 0,
      countZero: 0,
      countOne: 0,
      countTwo: 0,
      countThree: 0,
      countFour: 0,
      countFive: 0,
      startCountZero: 1,
      startCountOne: 0,
      startCountTwo: 0,
      startCountThree: 0,
      startCountFour: 0,
      startCountFive: 0,
      addedCountZero: 0,
      addedCountOne: 0,
      addedCountTwo: 0,
      addedCountThree: 0,
      addedCountFour: 0,
      addedCountFive: 0,
      countMagicStone: 0,
      addedCountMagicStone: 0,
      startCountMagicStone: 1000,
      currentChanceGeneral: 0, // Общий текущий шанс усиления
      currentFailstackGeneral: 0, // Общий фейлстак
      // +16
      startChanceto1: 0.02, // Начальный шанс усиления на 1
      deltaChanceto1: 0.002, // Изменение усиления с прибавлением фейлов на 1
      deltaAfterto1: 0.00023,
      startFailstackto1: 90, // Начальный фейлстак на 1
      currentFailstackto1: 90,
      currentChanceto1: 0, // Текущий шанс усиления на 1
      thresholdFailstackto1: 50,
      maxChanceto1: 0.9,
      countCron1: 10,
      // +17
      startChanceto2: 0.01,
      deltaChanceto2: 0.001,
      deltaAfterto2: 0.00015,
      startFailstackto2: 150,
      currentFailstackto2: 150,
      currentChanceto2: 0,
      thresholdFailstackto2: 86,
      maxChanceto2: 0.8,
      countCron2: 1500,
      // +18
      startChanceto3: 0.005,
      deltaChanceto3: 0.0005,
      deltaAfterto3: 0.000125,
      startFailstackto3: 180,
      currentFailstackto3: 180,
      currentChanceto3: 0,
      thresholdFailstackto3: 105,
      maxChanceto3: 0.8,
      countCron3: 2100,
      // +19
      startChanceto4: 0.002,
      deltaChanceto4: 0.0002,
      startFailstackto4: 200,
      currentFailstackto4: 200,
      currentChanceto4: 0,
      maxChanceto4: 0.5,
      countCron4: 2700,
      // +20
      startChanceto5: 0.00003,
      deltaChanceto5: 0.0000025,
      startFailstackto5: 300,
      currentFailstackto5: 300,
      currentChanceto5: 0,
      maxChanceto5: 0.3,
      countCron5: 4000
    },
    enhanceManos: {
      readyCalculate: false,
      level: 0,
      countZero: 0,
      countOne: 0,
      countTwo: 0,
      countThree: 0,
      countFour: 0,
      countFive: 0,
      startCountZero: 1,
      startCountOne: 0,
      startCountTwo: 0,
      startCountThree: 0,
      startCountFour: 0,
      startCountFive: 0,
      addedCountZero: 0,
      addedCountOne: 0,
      addedCountTwo: 0,
      addedCountThree: 0,
      addedCountFour: 0,
      addedCountFive: 0,
      countMagicStone: 0,
      addedCountMagicStone: 0,
      startCountMagicStone: 1000,
      currentChanceGeneral: 0, // Общий текущий шанс усиления
      currentFailstackGeneral: 0, // Общий фейлстак
      // +16
      startChanceto1: 0.75, // Начальный шанс усиления на 1
      currentChanceto1: 0, // Текущий шанс усиления на 1
      countCron1: 10,
      // +17
      startChanceto2: 0.4, // Начальный шанс усиления на 1
      currentChanceto2: 0, // Текущий шанс усиления на 1
      countCron2: 20,
      // +18
      startChanceto3: 0.3, // Начальный шанс усиления на 1
      currentChanceto3: 0, // Текущий шанс усиления на 1
      countCron3: 30,
      // +19
      startChanceto4: 0.15, // Начальный шанс усиления на 1
      currentChanceto4: 0, // Текущий шанс усиления на 1
      countCron4: 40,
      // +20
      startChanceto5: 0.06, // Начальный шанс усиления на 1
      currentChanceto5: 0, // Текущий шанс усиления на 1
      countCron5: 50
    },
    typeOfEnhance: 1, //1- усиление бижутерии, 2-усиление брони, 3- черной звезды (бс), 4- доспех бога, 5- манос
    pageOfInventory: 1, //1- усиление бижутерии, 2-усиление брони, 3- черной звезды (бс), 4- доспех бога, 5- манос
    streamingEnhance: false,
    useCron: false // Использование крон
  };
};
const state = getDefaultState();

const getters = {
  getEnhanceJewelry: state => {
    return state.enhanceJewelry;
  },
  getEnhanceArmor: state => {
    return state.enhanceArmor;
  },
  getEnhanceBlackstar: state => {
    return state.enhanceBlackstar;
  },
  getEnhanceArmorGod: state => {
    return state.enhanceArmorGod;
  },
  getEnhanceManos: state => {
    return state.enhanceManos;
  },
  getTypeOfEnhance: state => {
    return state.typeOfEnhance;
  },
  getUseCron: state => {
    return state.useCron;
  },
  getStreamingEnhance: state => {
    return state.streamingEnhance;
  },
  getUseManos: state => {
    if (state.typeOfEnhance == 5) {
      return true;
    } else {
      return false;
    }
  },
  getPageOfInventory: state => {
    return state.pageOfInventory;
  }
};

const mutations = {
  setLevel(state, level) {
    state.enhanceJewelry.level = level;
    state.enhanceArmor.level = level;
    state.enhanceBlackstar.level = level;
    state.enhanceArmorGod.level = level;
    state.enhanceManos.level = level;
  },
  triggerStreamingEnhance() {
    state.streamingEnhance = !state.streamingEnhance;
  },
  updateCount() {
    state.enhanceJewelry.countZero = state.enhanceJewelry.startCountZero;
    state.enhanceJewelry.countOne = state.enhanceJewelry.startCountOne;
    state.enhanceJewelry.countTwo = state.enhanceJewelry.startCountTwo;
    state.enhanceJewelry.countThree = state.enhanceJewelry.startCountThree;
    state.enhanceJewelry.countFour = state.enhanceJewelry.startCountFour;
    state.enhanceJewelry.countFive = state.enhanceJewelry.startCountFive;

    state.enhanceArmor.countZero = state.enhanceArmor.startCountZero;
    state.enhanceArmor.countOne = state.enhanceArmor.startCountOne;
    state.enhanceArmor.countTwo = state.enhanceArmor.startCountTwo;
    state.enhanceArmor.countThree = state.enhanceArmor.startCountThree;
    state.enhanceArmor.countFour = state.enhanceArmor.startCountFour;
    state.enhanceArmor.countFive = state.enhanceArmor.startCountFive;

    state.enhanceBlackstar.countZero = state.enhanceBlackstar.startCountZero;
    state.enhanceBlackstar.countOne = state.enhanceBlackstar.startCountOne;
    state.enhanceBlackstar.countTwo = state.enhanceBlackstar.startCountTwo;
    state.enhanceBlackstar.countThree = state.enhanceBlackstar.startCountThree;
    state.enhanceBlackstar.countFour = state.enhanceBlackstar.startCountFour;
    state.enhanceBlackstar.countFive = state.enhanceBlackstar.startCountFive;

    state.enhanceArmorGod.countZero = state.enhanceArmorGod.startCountZero;
    state.enhanceArmorGod.countOne = state.enhanceArmorGod.startCountOne;
    state.enhanceArmorGod.countTwo = state.enhanceArmorGod.startCountTwo;
    state.enhanceArmorGod.countThree = state.enhanceArmorGod.startCountThree;
    state.enhanceArmorGod.countFour = state.enhanceArmorGod.startCountFour;
    state.enhanceArmorGod.countFive = state.enhanceArmorGod.startCountFive;

    state.enhanceManos.countZero = state.enhanceManos.startCountZero;
    state.enhanceManos.countOne = state.enhanceManos.startCountOne;
    state.enhanceManos.countTwo = state.enhanceManos.startCountTwo;
    state.enhanceManos.countThree = state.enhanceManos.startCountThree;
    state.enhanceManos.countFour = state.enhanceManos.startCountFour;
    state.enhanceManos.countFive = state.enhanceManos.startCountFive;

    state.enhanceArmor.countMagicStone =
      state.enhanceArmor.startCountMagicStone;

    state.enhanceBlackstar.countMagicStone =
      state.enhanceBlackstar.startCountMagicStone;

    state.enhanceArmorGod.countMagicStone =
      state.enhanceArmorGod.startCountMagicStone;

    state.enhanceManos.countMagicStone =
      state.enhanceManos.startCountMagicStone;
  },
  setCron(state) {
    state.useCron = !state.useCron;
  },
  cronOff(state) {
    state.useCron = false;
  },
  // Обновяющие
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  refreshGeneralChanceAndFailstack() {
    switch (state.typeOfEnhance) {
      case 1:
        switch (state.enhanceJewelry.level) {
          case 0:
            state.enhanceJewelry.currentChanceGeneral = 0;
            state.enhanceJewelry.currentFailstackGeneral = 0;
            break;
          case 1:
            if (
              state.enhanceJewelry.currentFailstackto1 <=
              state.enhanceJewelry.thresholdFailstackto1
            ) {
              state.enhanceJewelry.currentChanceto1 =
                state.enhanceJewelry.startChanceto1 +
                state.enhanceJewelry.currentFailstackto1 *
                  state.enhanceJewelry.deltaChanceto1;
            } else {
              state.enhanceJewelry.currentChanceto1 =
                state.enhanceJewelry.startChanceto1 +
                (state.enhanceJewelry.currentFailstackto1 -
                  state.enhanceJewelry.thresholdFailstackto1) *
                  state.enhanceJewelry.deltaAfterto1 +
                state.enhanceJewelry.thresholdFailstackto1 *
                  state.enhanceJewelry.deltaChanceto1;
            }
            if (
              state.enhanceJewelry.currentChanceto1 >=
              state.enhanceJewelry.maxChanceto1
            )
              state.enhanceJewelry.currentChanceto1 =
                state.enhanceJewelry.maxChanceto1;
            state.enhanceJewelry.currentChanceGeneral =
              state.enhanceJewelry.currentChanceto1;
            state.enhanceJewelry.currentFailstackGeneral =
              state.enhanceJewelry.currentFailstackto1;
            break;
          case 2:
            if (
              state.enhanceJewelry.currentFailstackto2 <=
              state.enhanceJewelry.thresholdFailstackto2
            ) {
              state.enhanceJewelry.currentChanceto2 =
                state.enhanceJewelry.startChanceto2 +
                state.enhanceJewelry.currentFailstackto2 *
                  state.enhanceJewelry.deltaChanceto2;
            } else {
              state.enhanceJewelry.currentChanceto2 =
                state.enhanceJewelry.startChanceto2 +
                (state.enhanceJewelry.currentFailstackto2 -
                  state.enhanceJewelry.thresholdFailstackto2) *
                  state.enhanceJewelry.deltaAfterto2 +
                state.enhanceJewelry.thresholdFailstackto2 *
                  state.enhanceJewelry.deltaChanceto2;
            }
            if (
              state.enhanceJewelry.currentChanceto2 >=
              state.enhanceJewelry.maxChanceto2
            )
              state.enhanceJewelry.currentChanceto2 =
                state.enhanceJewelry.maxChanceto2;
            state.enhanceJewelry.currentChanceGeneral =
              state.enhanceJewelry.currentChanceto2;
            state.enhanceJewelry.currentFailstackGeneral =
              state.enhanceJewelry.currentFailstackto2;
            break;
          case 3:
            if (
              state.enhanceJewelry.currentFailstackto3 <=
              state.enhanceJewelry.thresholdFailstackto3
            ) {
              state.enhanceJewelry.currentChanceto3 =
                state.enhanceJewelry.startChanceto3 +
                state.enhanceJewelry.currentFailstackto3 *
                  state.enhanceJewelry.deltaChanceto3;
            } else {
              state.enhanceJewelry.currentChanceto3 =
                state.enhanceJewelry.startChanceto3 +
                (state.enhanceJewelry.currentFailstackto3 -
                  state.enhanceJewelry.thresholdFailstackto3) *
                  state.enhanceJewelry.deltaAfterto3 +
                state.enhanceJewelry.thresholdFailstackto3 *
                  state.enhanceJewelry.deltaChanceto3;
            }
            if (
              state.enhanceJewelry.currentChanceto3 >=
              state.enhanceJewelry.maxChanceto3
            )
              state.enhanceJewelry.currentChanceto3 =
                state.enhanceJewelry.maxChanceto3;
            state.enhanceJewelry.currentChanceGeneral =
              state.enhanceJewelry.currentChanceto3;
            state.enhanceJewelry.currentFailstackGeneral =
              state.enhanceJewelry.currentFailstackto3;
            break;
          case 4:
            if (
              state.enhanceJewelry.currentFailstackto4 <=
              state.enhanceJewelry.thresholdFailstackto4
            ) {
              state.enhanceJewelry.currentChanceto4 =
                state.enhanceJewelry.startChanceto4 +
                state.enhanceJewelry.currentFailstackto4 *
                  state.enhanceJewelry.deltaChanceto4;
            } else {
              state.enhanceJewelry.currentChanceto4 =
                state.enhanceJewelry.startChanceto4 +
                (state.enhanceJewelry.currentFailstackto4 -
                  state.enhanceJewelry.thresholdFailstackto4) *
                  state.enhanceJewelry.deltaAfterto4 +
                state.enhanceJewelry.thresholdFailstackto4 *
                  state.enhanceJewelry.deltaChanceto4;
            }
            if (
              state.enhanceJewelry.currentChanceto4 >=
              state.enhanceJewelry.maxChanceto4
            )
              state.enhanceJewelry.currentChanceto4 =
                state.enhanceJewelry.maxChanceto4;
            state.enhanceJewelry.currentChanceGeneral =
              state.enhanceJewelry.currentChanceto4;
            state.enhanceJewelry.currentFailstackGeneral =
              state.enhanceJewelry.currentFailstackto4;
            break;
          case 5:
            state.enhanceJewelry.currentChanceto5 =
              state.enhanceJewelry.startChanceto5 +
              state.enhanceJewelry.currentFailstackto5 *
                state.enhanceJewelry.deltaChanceto5;
            if (
              state.enhanceJewelry.currentChanceto5 >=
              state.enhanceJewelry.maxChanceto5
            )
              state.enhanceJewelry.currentChanceto5 =
                state.enhanceJewelry.maxChanceto5;
            state.enhanceJewelry.currentChanceGeneral =
              state.enhanceJewelry.currentChanceto5;
            state.enhanceJewelry.currentFailstackGeneral =
              state.enhanceJewelry.currentFailstackto5;
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (state.enhanceArmor.level) {
          case 0:
            state.enhanceArmor.currentChanceGeneral = 0;
            state.enhanceArmor.currentFailstackGeneral = 0;
            break;
          case 1:
            ///////
            if (
              state.enhanceArmor.currentFailstackto1 <=
              state.enhanceArmor.thresholdFailstackto1
            ) {
              state.enhanceArmor.currentChanceto1 =
                state.enhanceArmor.startChanceto1 +
                state.enhanceArmor.currentFailstackto1 *
                  state.enhanceArmor.deltaChanceto1;
            } else {
              state.enhanceArmor.currentChanceto1 =
                state.enhanceArmor.startChanceto1 +
                (state.enhanceArmor.currentFailstackto1 -
                  state.enhanceArmor.thresholdFailstackto1) *
                  state.enhanceArmor.deltaAfterto1 +
                state.enhanceArmor.thresholdFailstackto1 *
                  state.enhanceArmor.deltaChanceto1;
            }
            if (
              state.enhanceArmor.currentChanceto1 >=
              state.enhanceArmor.maxChanceto1
            )
              state.enhanceArmor.currentChanceto1 =
                state.enhanceArmor.maxChanceto1;
            state.enhanceArmor.currentChanceGeneral =
              state.enhanceArmor.currentChanceto1;
            state.enhanceArmor.currentFailstackGeneral =
              state.enhanceArmor.currentFailstackto1;
            break;
          case 2:
            if (
              state.enhanceArmor.currentFailstackto2 <=
              state.enhanceArmor.thresholdFailstackto2
            ) {
              state.enhanceArmor.currentChanceto2 =
                state.enhanceArmor.startChanceto2 +
                state.enhanceArmor.currentFailstackto2 *
                  state.enhanceArmor.deltaChanceto2;
            } else {
              state.enhanceArmor.currentChanceto2 =
                state.enhanceArmor.startChanceto2 +
                (state.enhanceArmor.currentFailstackto2 -
                  state.enhanceArmor.thresholdFailstackto2) *
                  state.enhanceArmor.deltaAfterto2 +
                state.enhanceArmor.thresholdFailstackto2 *
                  state.enhanceArmor.deltaChanceto2;
            }
            if (
              state.enhanceArmor.currentChanceto2 >=
              state.enhanceArmor.maxChanceto2
            )
              state.enhanceArmor.currentChanceto2 =
                state.enhanceArmor.maxChanceto2;
            state.enhanceArmor.currentChanceGeneral =
              state.enhanceArmor.currentChanceto2;
            state.enhanceArmor.currentFailstackGeneral =
              state.enhanceArmor.currentFailstackto2;
            break;
          case 3:
            if (
              state.enhanceArmor.currentFailstackto3 <=
              state.enhanceArmor.thresholdFailstackto3
            ) {
              state.enhanceArmor.currentChanceto3 =
                state.enhanceArmor.startChanceto3 +
                state.enhanceArmor.currentFailstackto3 *
                  state.enhanceArmor.deltaChanceto3;
            } else {
              state.enhanceArmor.currentChanceto3 =
                state.enhanceArmor.startChanceto3 +
                (state.enhanceArmor.currentFailstackto3 -
                  state.enhanceArmor.thresholdFailstackto3) *
                  state.enhanceArmor.deltaAfterto3 +
                state.enhanceArmor.thresholdFailstackto3 *
                  state.enhanceArmor.deltaChanceto3;
            }
            if (
              state.enhanceArmor.currentChanceto3 >=
              state.enhanceArmor.maxChanceto3
            )
              state.enhanceArmor.currentChanceto3 =
                state.enhanceArmor.maxChanceto3;
            state.enhanceArmor.currentChanceGeneral =
              state.enhanceArmor.currentChanceto3;
            state.enhanceArmor.currentFailstackGeneral =
              state.enhanceArmor.currentFailstackto3;

            break;
          case 4:
            state.enhanceArmor.currentChanceto4 =
              state.enhanceArmor.startChanceto4 +
              state.enhanceArmor.currentFailstackto4 *
                state.enhanceArmor.deltaChanceto4;
            if (
              state.enhanceArmor.currentChanceto4 >=
              state.enhanceArmor.maxChanceto4
            )
              state.enhanceArmor.currentChanceto4 =
                state.enhanceArmor.maxChanceto4;
            state.enhanceArmor.currentChanceGeneral =
              state.enhanceArmor.currentChanceto4;
            state.enhanceArmor.currentFailstackGeneral =
              state.enhanceArmor.currentFailstackto4;
            break;
          case 5:
            state.enhanceArmor.currentChanceto5 =
              state.enhanceArmor.startChanceto5 +
              state.enhanceArmor.currentFailstackto5 *
                state.enhanceArmor.deltaChanceto5;
            if (
              state.enhanceArmor.currentChanceto5 >=
              state.enhanceArmor.maxChanceto5
            )
              state.enhanceArmor.currentChanceto5 =
                state.enhanceArmor.maxChanceto5;
            state.enhanceArmor.currentChanceGeneral =
              state.enhanceArmor.currentChanceto5;
            state.enhanceArmor.currentFailstackGeneral =
              state.enhanceArmor.currentFailstackto5;
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (state.enhanceBlackstar.level) {
          case 0:
            state.enhanceBlackstar.currentChanceGeneral = 0;
            state.enhanceBlackstar.currentFailstackGeneral = 0;
            break;
          case 1:
            if (
              state.enhanceBlackstar.currentFailstackto1 <=
              state.enhanceBlackstar.thresholdFailstackto1
            ) {
              state.enhanceBlackstar.currentChanceto1 =
                state.enhanceBlackstar.startChanceto1 +
                state.enhanceBlackstar.currentFailstackto1 *
                  state.enhanceBlackstar.deltaChanceto1;
            } else {
              state.enhanceBlackstar.currentChanceto1 =
                state.enhanceBlackstar.startChanceto1 +
                (state.enhanceBlackstar.currentFailstackto1 -
                  state.enhanceBlackstar.thresholdFailstackto1) *
                  state.enhanceBlackstar.deltaAfterto1 +
                state.enhanceBlackstar.thresholdFailstackto1 *
                  state.enhanceBlackstar.deltaChanceto1;
            }
            if (
              state.enhanceBlackstar.currentChanceto1 >=
              state.enhanceBlackstar.maxChanceto1
            )
              state.enhanceBlackstar.currentChanceto1 =
                state.enhanceBlackstar.maxChanceto1;
            state.enhanceBlackstar.currentChanceGeneral =
              state.enhanceBlackstar.currentChanceto1;
            state.enhanceBlackstar.currentFailstackGeneral =
              state.enhanceBlackstar.currentFailstackto1;
            break;
          case 2:
            if (
              state.enhanceBlackstar.currentFailstackto2 <=
              state.enhanceBlackstar.thresholdFailstackto2
            ) {
              state.enhanceBlackstar.currentChanceto2 =
                state.enhanceBlackstar.startChanceto2 +
                state.enhanceBlackstar.currentFailstackto2 *
                  state.enhanceBlackstar.deltaChanceto2;
            } else {
              state.enhanceBlackstar.currentChanceto2 =
                state.enhanceBlackstar.startChanceto2 +
                (state.enhanceBlackstar.currentFailstackto2 -
                  state.enhanceBlackstar.thresholdFailstackto2) *
                  state.enhanceBlackstar.deltaAfterto2 +
                state.enhanceBlackstar.thresholdFailstackto2 *
                  state.enhanceBlackstar.deltaChanceto2;
            }
            if (
              state.enhanceBlackstar.currentChanceto2 >=
              state.enhanceBlackstar.maxChanceto2
            )
              state.enhanceBlackstar.currentChanceto2 =
                state.enhanceBlackstar.maxChanceto2;
            state.enhanceBlackstar.currentChanceGeneral =
              state.enhanceBlackstar.currentChanceto2;
            state.enhanceBlackstar.currentFailstackGeneral =
              state.enhanceBlackstar.currentFailstackto2;
            break;
          case 3:
            if (
              state.enhanceBlackstar.currentFailstackto3 <=
              state.enhanceBlackstar.thresholdFailstackto3
            ) {
              state.enhanceBlackstar.currentChanceto3 =
                state.enhanceBlackstar.startChanceto3 +
                state.enhanceBlackstar.currentFailstackto3 *
                  state.enhanceBlackstar.deltaChanceto3;
            } else {
              state.enhanceBlackstar.currentChanceto3 =
                state.enhanceBlackstar.startChanceto3 +
                (state.enhanceBlackstar.currentFailstackto3 -
                  state.enhanceBlackstar.thresholdFailstackto3) *
                  state.enhanceBlackstar.deltaAfterto3 +
                state.enhanceBlackstar.thresholdFailstackto3 *
                  state.enhanceBlackstar.deltaChanceto3;
            }
            if (
              state.enhanceBlackstar.currentChanceto3 >=
              state.enhanceBlackstar.maxChanceto3
            )
              state.enhanceBlackstar.currentChanceto3 =
                state.enhanceBlackstar.maxChanceto3;
            state.enhanceBlackstar.currentChanceGeneral =
              state.enhanceBlackstar.currentChanceto3;
            state.enhanceBlackstar.currentFailstackGeneral =
              state.enhanceBlackstar.currentFailstackto3;
            break;
          case 4:
            state.enhanceBlackstar.currentChanceto4 =
              state.enhanceBlackstar.startChanceto4 +
              state.enhanceBlackstar.currentFailstackto4 *
                state.enhanceBlackstar.deltaChanceto4;
            if (
              state.enhanceBlackstar.currentChanceto4 >=
              state.enhanceBlackstar.maxChanceto4
            )
              state.enhanceBlackstar.currentChanceto4 =
                state.enhanceBlackstar.maxChanceto4;
            state.enhanceBlackstar.currentChanceGeneral =
              state.enhanceBlackstar.currentChanceto4;
            state.enhanceBlackstar.currentFailstackGeneral =
              state.enhanceBlackstar.currentFailstackto4;
            break;
          case 5:
            state.enhanceBlackstar.currentChanceto5 =
              state.enhanceBlackstar.startChanceto5 +
              state.enhanceBlackstar.currentFailstackto5 *
                state.enhanceBlackstar.deltaChanceto5;
            if (
              state.enhanceBlackstar.currentChanceto5 >=
              state.enhanceBlackstar.maxChanceto5
            )
              state.enhanceBlackstar.currentChanceto5 =
                state.enhanceBlackstar.maxChanceto5;
            state.enhanceBlackstar.currentChanceGeneral =
              state.enhanceBlackstar.currentChanceto5;
            state.enhanceBlackstar.currentFailstackGeneral =
              state.enhanceBlackstar.currentFailstackto5;
            break;
          default:
            break;
        }
        break;
      case 4:
        switch (state.enhanceArmorGod.level) {
          case 0:
            state.enhanceArmorGod.currentChanceGeneral = 0;
            state.enhanceArmorGod.currentFailstackGeneral = 0;
            break;
          case 1:
            ///////
            state.enhanceArmorGod.currentChanceto1 =
              state.enhanceArmorGod.startChanceto1 +
              state.enhanceArmorGod.currentFailstackto1 *
                state.enhanceArmorGod.deltaChanceto1;
            if (
              state.enhanceArmorGod.currentChanceto1 >=
              state.enhanceArmorGod.maxChanceto1
            )
              state.enhanceArmorGod.currentChanceto1 =
                state.enhanceArmorGod.maxChanceto1;
            state.enhanceArmorGod.currentChanceGeneral =
              state.enhanceArmorGod.currentChanceto1;
            state.enhanceArmorGod.currentFailstackGeneral =
              state.enhanceArmorGod.currentFailstackto1;
            break;
          case 2:
            state.enhanceArmorGod.currentChanceto2 =
              state.enhanceArmorGod.startChanceto2 +
              state.enhanceArmorGod.currentFailstackto2 *
                state.enhanceArmorGod.deltaChanceto2;
            if (
              state.enhanceArmorGod.currentChanceto2 >=
              state.enhanceArmorGod.maxChanceto2
            )
              state.enhanceArmorGod.currentChanceto2 =
                state.enhanceArmorGod.maxChanceto2;
            state.enhanceArmorGod.currentChanceGeneral =
              state.enhanceArmorGod.currentChanceto2;
            state.enhanceArmorGod.currentFailstackGeneral =
              state.enhanceArmorGod.currentFailstackto2;
            break;
          case 3:
            state.enhanceArmorGod.currentChanceto3 =
              state.enhanceArmorGod.startChanceto3 +
              state.enhanceArmorGod.currentFailstackto3 *
                state.enhanceArmorGod.deltaChanceto3;
            if (
              state.enhanceArmorGod.currentChanceto3 >=
              state.enhanceArmorGod.maxChanceto3
            )
              state.enhanceArmorGod.currentChanceto3 =
                state.enhanceArmorGod.maxChanceto3;
            state.enhanceArmorGod.currentChanceGeneral =
              state.enhanceArmorGod.currentChanceto3;
            state.enhanceArmorGod.currentFailstackGeneral =
              state.enhanceArmorGod.currentFailstackto3;
            break;
          case 4:
            state.enhanceArmorGod.currentChanceto4 =
              state.enhanceArmorGod.startChanceto4 +
              state.enhanceArmorGod.currentFailstackto4 *
                state.enhanceArmorGod.deltaChanceto4;
            if (
              state.enhanceArmorGod.currentChanceto4 >=
              state.enhanceArmorGod.maxChanceto4
            )
              state.enhanceArmorGod.currentChanceto4 =
                state.enhanceArmorGod.maxChanceto4;
            state.enhanceArmorGod.currentChanceGeneral =
              state.enhanceArmorGod.currentChanceto4;
            state.enhanceArmorGod.currentFailstackGeneral =
              state.enhanceArmorGod.currentFailstackto4;
            break;
          case 5:
            state.enhanceArmorGod.currentChanceto5 =
              state.enhanceArmorGod.startChanceto5 +
              state.enhanceArmorGod.currentFailstackto5 *
                state.enhanceArmorGod.deltaChanceto5;
            if (
              state.enhanceArmorGod.currentChanceto5 >=
              state.enhanceArmorGod.maxChanceto5
            )
              state.enhanceArmorGod.currentChanceto5 =
                state.enhanceArmorGod.maxChanceto5;
            state.enhanceArmorGod.currentChanceGeneral =
              state.enhanceArmorGod.currentChanceto5;
            state.enhanceArmorGod.currentFailstackGeneral =
              state.enhanceArmorGod.currentFailstackto5;
            break;
          default:
            break;
        }
        break;
      case 5:
        switch (state.enhanceManos.level) {
          case 0:
            state.enhanceManos.currentChanceGeneral = 0;
            state.enhanceManos.currentFailstackGeneral = 0;
            break;
          case 1:
            state.enhanceManos.currentChanceto1 =
              state.enhanceManos.startChanceto1;
            state.enhanceManos.currentChanceGeneral =
              state.enhanceManos.currentChanceto1;
            state.enhanceManos.currentFailstackGeneral =
              state.enhanceManos.currentFailstackto1;
            break;
          case 2:
            state.enhanceManos.currentChanceto2 =
              state.enhanceManos.startChanceto2;
            state.enhanceManos.currentChanceGeneral =
              state.enhanceManos.currentChanceto2;
            state.enhanceManos.currentFailstackGeneral =
              state.enhanceManos.currentFailstackto2;
            break;
          case 3:
            state.enhanceManos.currentChanceto3 =
              state.enhanceManos.startChanceto3;
            state.enhanceManos.currentChanceGeneral =
              state.enhanceManos.currentChanceto3;
            state.enhanceManos.currentFailstackGeneral =
              state.enhanceManos.currentFailstackto3;
            break;
          case 4:
            state.enhanceManos.currentChanceto4 =
              state.enhanceManos.startChanceto4;
            state.enhanceManos.currentChanceGeneral =
              state.enhanceManos.currentChanceto4;
            state.enhanceManos.currentFailstackGeneral =
              state.enhanceManos.currentFailstackto4;
            break;
          case 5:
            state.enhanceManos.currentChanceto5 =
              state.enhanceManos.startChanceto5;
            state.enhanceManos.currentChanceGeneral =
              state.enhanceManos.currentChanceto5;
            state.enhanceManos.currentFailstackGeneral =
              state.enhanceManos.currentFailstackto5;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  },
  // Bar
  nextTypeOfEnhance() {
    if (state.typeOfEnhance < 5) {
      state.typeOfEnhance++;
      state.enhanceJewelry.level = 0;
      state.enhanceArmor.level = 0;
      state.enhanceBlackstar.level = 0;
      state.enhanceArmorGod.level = 0;
      state.enhanceManos.level = 0;
      state.pageOfInventory = state.typeOfEnhance;
    }
  },
  backTypeOfEnhance() {
    if (state.typeOfEnhance > 1) {
      state.typeOfEnhance--;
      state.enhanceJewelry.level = 0;
      state.enhanceArmor.level = 0;
      state.enhanceBlackstar.level = 0;
      state.enhanceArmorGod.level = 0;
      state.enhanceManos.level = 0;
      state.pageOfInventory = state.typeOfEnhance;
    }
  },
  nextPageOfInventory() {
    if (state.pageOfInventory < 5) state.pageOfInventory++;
  },
  backPageOfInventory() {
    if (state.pageOfInventory > 1) state.pageOfInventory--;
  },

  // метод готовности к рассчетам. активируется при первом тыке "усилить"
  goToCalculate() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.readyCalculate = true;
        break;
      case 2:
        state.enhanceArmor.readyCalculate = true;
        break;
      case 3:
        state.enhanceBlackstar.readyCalculate = true;
        break;
      case 4:
        state.enhanceArmorGod.readyCalculate = true;
        break;
      case 5:
        state.enhanceManos.readyCalculate = true;
        break;
    }
  },
  // Enhance
  // +1
  // Неудачное усиление на 1
  failEnhanceTo1() {
    switch (state.typeOfEnhance) {
      case 1:
        if (state.useCron) {
          state.enhanceJewelry.countZero--;
        } else {
          state.enhanceJewelry.currentFailstackto1++;
          state.enhanceJewelry.countZero -= 2;
        }
        if (state.streamingEnhance == false && state.useCron == false)
          state.enhanceJewelry.level = 0;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto1 += 2;
        state.enhanceArmor.countMagicStone--;

        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto1 += 2;
        state.enhanceBlackstar.countMagicStone--;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto1 += 2;
        state.enhanceArmorGod.countMagicStone--;
        break;
      case 5:
        state.enhanceManos.countZero--;
        state.enhanceManos.countMagicStone -= 10;
        break;
      default:
        break;
    }
  },
  // Успешное усиление на 1
  successEnhanceTo1() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.currentFailstackto1 =
          state.enhanceJewelry.startFailstackto1;
        state.enhanceJewelry.countZero -= 2;
        state.enhanceJewelry.countOne++;
        if (state.streamingEnhance == false) state.enhanceJewelry.level++;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto1 =
          state.enhanceArmor.startFailstackto1;
        state.enhanceArmor.countMagicStone--;
        state.enhanceArmor.countZero--;
        state.enhanceArmor.countOne++;
        if (state.streamingEnhance == false) state.enhanceArmor.level++;
        break;

      case 3:
        state.enhanceBlackstar.currentFailstackto1 =
          state.enhanceBlackstar.startFailstackto1;
        state.enhanceBlackstar.countMagicStone--;
        state.enhanceBlackstar.countZero--;
        state.enhanceBlackstar.countOne++;
        if (state.streamingEnhance == false) state.enhanceBlackstar.level++;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto1 =
          state.enhanceArmorGod.startFailstackto1;
        state.enhanceArmorGod.countMagicStone--;
        state.enhanceArmorGod.countZero--;
        state.enhanceArmorGod.countOne++;
        if (state.streamingEnhance == false) state.enhanceArmorGod.level++;
        break;
      case 5:
        state.enhanceManos.currentFailstackto1 =
          state.enhanceManos.startFailstackto1;
        state.enhanceManos.countZero--;
        state.enhanceManos.countOne++;
        state.enhanceManos.countMagicStone -= 10;
        if (state.streamingEnhance == false) state.enhanceManos.level++;
        break;

      default:
        break;
    }
  },
  // +2
  failEnhanceTo2() {
    switch (state.typeOfEnhance) {
      case 1:
        if (state.useCron) {
          if (Math.random() <= state.enhanceJewelry.chanceLevelDown) {
            state.levelDown = true;
            state.enhanceJewelry.countZero++;
            state.enhanceJewelry.countOne--;
          }
        } else {
          state.enhanceJewelry.countOne--;
          state.enhanceJewelry.currentFailstackto2++;
        }
        state.enhanceJewelry.countZero--;
        if (state.streamingEnhance == false && state.useCron == false)
          state.enhanceJewelry.level = 0;
        else if (state.streamingEnhance == false && state.levelDown == true)
          state.enhanceJewelry.level--;
        state.levelDown = false;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto2 += 3;
        state.enhanceArmor.countMagicStone--;
        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto2 += 3;
        state.enhanceBlackstar.countMagicStone--;
        break;
      case 4:
        if (!state.useCron) {
          state.enhanceArmorGod.currentFailstackto2 += 3;
          state.enhanceArmorGod.countOne--;
          state.enhanceArmorGod.countZero++;
        }
        state.enhanceArmorGod.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmorGod.level--;
        break;
      case 5:
        state.enhanceManos.countOne--;
        state.enhanceManos.countMagicStone -= 11;
        if (state.streamingEnhance == false) state.enhanceManos.level = 0;
        break;
      default:
        break;
    }
  },
  successEnhanceTo2() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.currentFailstackto2 =
          state.enhanceJewelry.startFailstackto2;
        state.enhanceJewelry.countZero--;
        state.enhanceJewelry.countOne--;
        state.enhanceJewelry.countTwo++;
        if (state.streamingEnhance == false) state.enhanceJewelry.level++;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto2 =
          state.enhanceArmor.startFailstackto2;
        state.enhanceArmor.countMagicStone--;
        state.enhanceArmor.countOne--;
        state.enhanceArmor.countTwo++;
        if (state.streamingEnhance == false) state.enhanceArmor.level++;
        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto2 =
          state.enhanceBlackstar.startFailstackto2;
        state.enhanceBlackstar.countMagicStone--;
        state.enhanceBlackstar.countOne--;
        state.enhanceBlackstar.countTwo++;
        if (state.streamingEnhance == false) state.enhanceBlackstar.level++;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto2 =
          state.enhanceArmorGod.startFailstackto2;
        state.enhanceArmorGod.countMagicStone--;
        state.enhanceArmorGod.countOne--;
        state.enhanceArmorGod.countTwo++;
        if (state.streamingEnhance == false) state.enhanceArmorGod.level++;
        break;
      case 5:
        state.enhanceManos.currentFailstackto2 =
          state.enhanceManos.startFailstackto2;
        state.enhanceManos.countOne--;
        state.enhanceManos.countTwo++;
        state.enhanceManos.countMagicStone -= 11;
        if (state.streamingEnhance == false) state.enhanceManos.level++;
        break;
      default:
        break;
    }
  },
  // +3
  failEnhanceTo3() {
    switch (state.typeOfEnhance) {
      case 1:
        if (state.useCron) {
          if (Math.random() <= state.enhanceJewelry.chanceLevelDown) {
            state.levelDown = true;
            state.enhanceJewelry.countOne++;
            state.enhanceJewelry.countTwo--;
          }
        } else {
          state.enhanceJewelry.currentFailstackto3++;
          state.enhanceJewelry.countTwo--;
        }
        state.enhanceJewelry.countZero--;
        if (state.streamingEnhance == false && state.useCron == false)
          state.enhanceJewelry.level = 0;
        else if (state.streamingEnhance == false && state.levelDown == true)
          state.enhanceJewelry.level--;
        state.levelDown = false;
        break;
      case 2:
        if (!state.useCron) {
          state.enhanceArmor.currentFailstackto3 += 4;
          state.enhanceArmor.countTwo--;
          state.enhanceArmor.countOne++;
        }
        state.enhanceArmor.countMagicStone--;

        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmor.level--;
        break;
      case 3:
        if (!state.useCron) {
          state.enhanceBlackstar.currentFailstackto3 += 4;
          state.enhanceBlackstar.countTwo--;
          state.enhanceBlackstar.countOne++;
        }
        state.enhanceBlackstar.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceBlackstar.level--;
        break;
      case 4:
        if (!state.useCron) {
          state.enhanceArmorGod.currentFailstackto3 += 4;
          state.enhanceArmorGod.countTwo--;
          state.enhanceArmorGod.countOne++;
        }
        state.enhanceArmorGod.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmorGod.level--;
        break;
      case 5:
        state.enhanceManos.countTwo--;
        state.enhanceManos.countMagicStone -= 13;
        if (state.streamingEnhance == false) state.enhanceManos.level = 0;
        break;
      default:
        break;
    }
  },
  successEnhanceTo3() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.currentFailstackto3 =
          state.enhanceJewelry.startFailstackto3;
        state.enhanceJewelry.countZero--;
        state.enhanceJewelry.countTwo--;
        state.enhanceJewelry.countThree++;
        if (state.streamingEnhance == false) state.enhanceJewelry.level++;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto3 =
          state.enhanceArmor.startFailstackto3;
        state.enhanceArmor.countMagicStone--;
        state.enhanceArmor.countTwo--;
        state.enhanceArmor.countThree++;
        if (state.streamingEnhance == false) state.enhanceArmor.level++;
        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto3 =
          state.enhanceBlackstar.startFailstackto3;
        state.enhanceBlackstar.countMagicStone--;
        state.enhanceBlackstar.countTwo--;
        state.enhanceBlackstar.countThree++;
        if (state.streamingEnhance == false) state.enhanceBlackstar.level++;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto3 =
          state.enhanceArmorGod.startFailstackto3;
        state.enhanceArmorGod.countMagicStone--;
        state.enhanceArmorGod.countTwo--;
        state.enhanceArmorGod.countThree++;
        if (state.streamingEnhance == false) state.enhanceArmorGod.level++;
        break;
      case 5:
        state.enhanceManos.currentFailstackto3 =
          state.enhanceManos.startFailstackto3;
        state.enhanceManos.countTwo--;
        state.enhanceManos.countThree++;
        state.enhanceManos.countMagicStone -= 13;
        if (state.streamingEnhance == false) state.enhanceManos.level++;
        break;
      default:
        break;
    }
  },
  // +4
  failEnhanceTo4() {
    switch (state.typeOfEnhance) {
      case 1:
        if (state.useCron) {
          if (Math.random() <= state.enhanceJewelry.chanceLevelDown) {
            state.levelDown = true;
            state.enhanceJewelry.countTwo++;
            state.enhanceJewelry.countThree--;
          }
        } else {
          state.enhanceJewelry.currentFailstackto4++;
          state.enhanceJewelry.countThree--;
        }
        state.enhanceJewelry.countZero--;
        if (state.streamingEnhance == false && state.useCron == false)
          state.enhanceJewelry.level = 0;
        else if (state.streamingEnhance == false && state.levelDown == true)
          state.enhanceJewelry.level--;
        state.levelDown = false;
        break;
      case 2:
        if (!state.useCron) {
          state.enhanceArmor.currentFailstackto4 += 5;
          state.enhanceArmor.countThree--;
          state.enhanceArmor.countTwo++;
        }
        state.enhanceArmor.countMagicStone--;

        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmor.level--;
        break;
      case 3:
        if (!state.useCron) {
          state.enhanceBlackstar.currentFailstackto4 += 5;
          state.enhanceBlackstar.countThree--;
          state.enhanceBlackstar.countTwo++;
        }
        state.enhanceBlackstar.countMagicStone--;

        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceBlackstar.level--;
        break;
      case 4:
        if (!state.useCron) {
          state.enhanceArmorGod.currentFailstackto4 += 5;
          state.enhanceArmorGod.countThree--;
          state.enhanceArmorGod.countTwo++;
        }
        state.enhanceArmorGod.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmorGod.level--;
        break;
      case 5:
        state.enhanceManos.countThree--;
        state.enhanceManos.countMagicStone -= 16;
        if (state.streamingEnhance == false) state.enhanceManos.level = 0;
        break;
      default:
        break;
    }
  },
  successEnhanceTo4() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.currentFailstackto4 =
          state.enhanceJewelry.startFailstackto4;
        state.enhanceJewelry.countZero--;
        state.enhanceJewelry.countThree--;
        state.enhanceJewelry.countFour++;
        if (state.streamingEnhance == false) state.enhanceJewelry.level++;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto4 =
          state.enhanceArmor.startFailstackto4;
        state.enhanceArmor.countMagicStone--;
        state.enhanceArmor.countThree--;
        state.enhanceArmor.countFour++;
        if (state.streamingEnhance == false) state.enhanceArmor.level++;
        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto4 =
          state.enhanceBlackstar.startFailstackto4;
        state.enhanceBlackstar.countMagicStone--;
        state.enhanceBlackstar.countThree--;
        state.enhanceBlackstar.countFour++;
        if (state.streamingEnhance == false) state.enhanceBlackstar.level++;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto4 =
          state.enhanceArmorGod.startFailstackto4;
        state.enhanceArmorGod.countMagicStone--;
        state.enhanceArmorGod.countThree--;
        state.enhanceArmorGod.countFour++;
        if (state.streamingEnhance == false) state.enhanceArmorGod.level++;
        break;
      case 5:
        state.enhanceManos.currentFailstackto4 =
          state.enhanceManos.startFailstackto4;
        state.enhanceManos.countThree--;
        state.enhanceManos.countFour++;
        state.enhanceManos.countMagicStone -= 16;
        if (state.streamingEnhance == false) state.enhanceManos.level++;
        break;
      default:
        break;
    }
  },
  // +5
  failEnhanceTo5() {
    switch (state.typeOfEnhance) {
      case 1:
        if (state.useCron) {
          if (Math.random() <= state.enhanceJewelry.chanceLevelDown) {
            state.levelDown = true;
            state.enhanceJewelry.countThree++;
            state.enhanceJewelry.countFour--;
          }
        } else {
          state.enhanceJewelry.currentFailstackto5++;
          state.enhanceJewelry.countFour--;
        }
        state.enhanceJewelry.countZero--;
        if (state.streamingEnhance == false && state.useCron == false)
          state.enhanceJewelry.level = 0;
        else if (state.streamingEnhance == false && state.levelDown == true) {
          state.enhanceJewelry.level--;
        }
        state.levelDown = false;
        break;
      case 2:
        if (!state.useCron) {
          state.enhanceArmor.currentFailstackto5 += 6;
          state.enhanceArmor.countFour--;
          state.enhanceArmor.countThree++;
        }
        state.enhanceArmor.countMagicStone--;

        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmor.level--;
        break;
      case 3:
        if (!state.useCron) {
          state.enhanceBlackstar.currentFailstackto5 += 6;
          state.enhanceBlackstar.countFour--;
          state.enhanceBlackstar.countThree++;
        }
        state.enhanceBlackstar.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceBlackstar.level--;
        break;
      case 4:
        if (!state.useCron) {
          state.enhanceArmorGod.currentFailstackto5 += 6;
          state.enhanceArmorGod.countFour--;
          state.enhanceArmorGod.countThree++;
        }
        state.enhanceArmorGod.countMagicStone--;
        if (state.streamingEnhance == false && !state.useCron)
          state.enhanceArmorGod.level--;
        break;
      case 5:
        state.enhanceManos.countFour--;
        state.enhanceManos.countMagicStone -= 20;
        if (state.streamingEnhance == false) state.enhanceManos.level = 0;
        break;
      default:
        break;
    }
  },
  successEnhanceTo5() {
    switch (state.typeOfEnhance) {
      case 1:
        state.enhanceJewelry.currentFailstackto5 =
          state.enhanceJewelry.startFailstackto5;
        state.enhanceJewelry.countZero--;
        state.enhanceJewelry.countFour--;
        state.enhanceJewelry.countFive++;
        if (state.streamingEnhance == false) state.enhanceJewelry.level++;
        break;
      case 2:
        state.enhanceArmor.currentFailstackto5 =
          state.enhanceArmor.startFailstackto5;
        state.enhanceArmor.countMagicStone--;
        state.enhanceArmor.countFour--;
        state.enhanceArmor.countFive++;
        if (state.streamingEnhance == false) state.enhanceArmor.level++;
        break;
      case 3:
        state.enhanceBlackstar.currentFailstackto5 =
          state.enhanceBlackstar.startFailstackto5;
        state.enhanceBlackstar.countMagicStone--;
        state.enhanceBlackstar.countFour--;
        state.enhanceBlackstar.countFive++;
        if (state.streamingEnhance == false) state.enhanceBlackstar.level++;
        break;
      case 4:
        state.enhanceArmorGod.currentFailstackto5 =
          state.enhanceArmorGod.startFailstackto5;
        state.enhanceArmorGod.countMagicStone--;
        state.enhanceArmorGod.countFour--;
        state.enhanceArmorGod.countFive++;
        if (state.streamingEnhance == false) state.enhanceArmorGod.level++;
        break;
      case 5:
        state.enhanceManos.currentFailstackto5 =
          state.enhanceManos.startFailstackto5;
        state.enhanceManos.countFour--;
        state.enhanceManos.countFive++;
        state.enhanceManos.countMagicStone -= 20;
        if (state.streamingEnhance == false) state.enhanceManos.level++;
        break;
      default:
        break;
    }
  },
  // Установка значений
  failstackStepDown() {
    switch (state.typeOfEnhance) {
      case 1:
        switch (state.enhanceJewelry.level) {
          case 1:
            if (state.enhanceJewelry.currentFailstackto1 > 0)
              state.enhanceJewelry.currentFailstackto1--;
            break;
          case 2:
            if (state.enhanceJewelry.currentFailstackto2 > 0)
              state.enhanceJewelry.currentFailstackto2--;
            break;
          case 3:
            if (state.enhanceJewelry.currentFailstackto3 > 0)
              state.enhanceJewelry.currentFailstackto3--;
            break;
          case 4:
            if (state.enhanceJewelry.currentFailstackto4 > 0)
              state.enhanceJewelry.currentFailstackto4--;
            break;
          case 5:
            if (state.enhanceJewelry.currentFailstackto5 > 0)
              state.enhanceJewelry.currentFailstackto5--;
            break;

          default:
            break;
        }

        break;
      case 2:
        switch (state.enhanceArmor.level) {
          case 1:
            if (state.enhanceArmor.currentFailstackto1 > 0)
              state.enhanceArmor.currentFailstackto1--;
            break;
          case 2:
            if (state.enhanceArmor.currentFailstackto2 > 0)
              state.enhanceArmor.currentFailstackto2--;
            break;
          case 3:
            if (state.enhanceArmor.currentFailstackto3 > 0)
              state.enhanceArmor.currentFailstackto3--;
            break;
          case 4:
            if (state.enhanceArmor.currentFailstackto4 > 0)
              state.enhanceArmor.currentFailstackto4--;
            break;
          case 5:
            if (state.enhanceArmor.currentFailstackto5 > 0)
              state.enhanceArmor.currentFailstackto5--;
            break;

          default:
            break;
        }

        break;
      case 3:
        switch (state.enhanceBlackstar.level) {
          case 1:
            if (state.enhanceBlackstar.currentFailstackto1 > 0)
              state.enhanceBlackstar.currentFailstackto1--;
            break;
          case 2:
            if (state.enhanceBlackstar.currentFailstackto2 > 0)
              state.enhanceBlackstar.currentFailstackto2--;
            break;
          case 3:
            if (state.enhanceBlackstar.currentFailstackto3 > 0)
              state.enhanceBlackstar.currentFailstackto3--;
            break;
          case 4:
            if (state.enhanceBlackstar.currentFailstackto4 > 0)
              state.enhanceBlackstar.currentFailstackto4--;
            break;
          case 5:
            if (state.enhanceBlackstar.currentFailstackto5 > 0)
              state.enhanceBlackstar.currentFailstackto5--;
            break;

          default:
            break;
        }

        break;
      case 4:
        switch (state.enhanceArmorGod.level) {
          case 1:
            if (state.enhanceArmorGod.currentFailstackto1 > 0)
              state.enhanceArmorGod.currentFailstackto1--;
            break;
          case 2:
            if (state.enhanceArmorGod.currentFailstackto2 > 0)
              state.enhanceArmorGod.currentFailstackto2--;
            break;
          case 3:
            if (state.enhanceArmorGod.currentFailstackto3 > 0)
              state.enhanceArmorGod.currentFailstackto3--;
            break;
          case 4:
            if (state.enhanceArmorGod.currentFailstackto4 > 0)
              state.enhanceArmorGod.currentFailstackto4--;
            break;
          case 5:
            if (state.enhanceArmorGod.currentFailstackto5 > 0)
              state.enhanceArmorGod.currentFailstackto5--;
            break;

          default:
            break;
        }

        break;
      default:
        break;
    }
  },
  failstackStepUp() {
    switch (state.typeOfEnhance) {
      case 1:
        switch (state.enhanceJewelry.level) {
          case 1:
            if (state.enhanceJewelry.currentFailstackto1 < 999)
              state.enhanceJewelry.currentFailstackto1++;
            break;
          case 2:
            if (state.enhanceJewelry.currentFailstackto2 < 999)
              state.enhanceJewelry.currentFailstackto2++;
            break;
          case 3:
            if (state.enhanceJewelry.currentFailstackto3 < 999)
              state.enhanceJewelry.currentFailstackto3++;
            break;
          case 4:
            if (state.enhanceJewelry.currentFailstackto4 < 999)
              state.enhanceJewelry.currentFailstackto4++;
            break;
          case 5:
            if (state.enhanceJewelry.currentFailstackto5 < 999)
              state.enhanceJewelry.currentFailstackto5++;
            break;

          default:
            break;
        }

        break;
      case 2:
        switch (state.enhanceArmor.level) {
          case 1:
            if (state.enhanceArmor.currentFailstackto1 < 999)
              state.enhanceArmor.currentFailstackto1++;
            break;
          case 2:
            if (state.enhanceArmor.currentFailstackto2 < 999)
              state.enhanceArmor.currentFailstackto2++;
            break;
          case 3:
            if (state.enhanceArmor.currentFailstackto3 < 999)
              state.enhanceArmor.currentFailstackto3++;
            break;
          case 4:
            if (state.enhanceArmor.currentFailstackto4 < 999)
              state.enhanceArmor.currentFailstackto4++;
            break;
          case 5:
            if (state.enhanceArmor.currentFailstackto5 < 999)
              state.enhanceArmor.currentFailstackto5++;
            break;

          default:
            break;
        }
        break;
      case 3:
        switch (state.enhanceBlackstar.level) {
          case 1:
            if (state.enhanceBlackstar.currentFailstackto1 < 999)
              state.enhanceBlackstar.currentFailstackto1++;
            break;
          case 2:
            if (state.enhanceBlackstar.currentFailstackto2 < 999)
              state.enhanceBlackstar.currentFailstackto2++;
            break;
          case 3:
            if (state.enhanceBlackstar.currentFailstackto3 < 999)
              state.enhanceBlackstar.currentFailstackto3++;
            break;
          case 4:
            if (state.enhanceBlackstar.currentFailstackto4 < 999)
              state.enhanceBlackstar.currentFailstackto4++;
            break;
          case 5:
            if (state.enhanceBlackstar.currentFailstackto5 < 999)
              state.enhanceBlackstar.currentFailstackto5++;
            break;

          default:
            break;
        }
        break;
      case 4:
        switch (state.enhanceArmorGod.level) {
          case 1:
            if (state.enhanceArmorGod.currentFailstackto1 < 999)
              state.enhanceArmorGod.currentFailstackto1++;
            break;
          case 2:
            if (state.enhanceArmorGod.currentFailstackto2 < 999)
              state.enhanceArmorGod.currentFailstackto2++;
            break;
          case 3:
            if (state.enhanceArmorGod.currentFailstackto3 < 999)
              state.enhanceArmorGod.currentFailstackto3++;
            break;
          case 4:
            if (state.enhanceArmorGod.currentFailstackto4 < 999)
              state.enhanceArmorGod.currentFailstackto4++;
            break;
          case 5:
            if (state.enhanceArmorGod.currentFailstackto5 < 999)
              state.enhanceArmorGod.currentFailstackto5++;
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }
  },
  setCountInputJewelry(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        if (state.enhanceJewelry.readyCalculate) {
          state.enhanceJewelry.addedCountZero +=
            obj.value - state.enhanceJewelry.countZero;
        } else {
          state.enhanceJewelry.startCountZero = obj.value;
        }
        state.enhanceJewelry.countZero = obj.value;
        break;
      case 1:
        if (state.enhanceJewelry.readyCalculate) {
          state.enhanceJewelry.addedCountOne +=
            obj.value - state.enhanceJewelry.countOne;
        } else {
          state.enhanceJewelry.startCountOne = obj.value;
        }
        state.enhanceJewelry.countOne = obj.value;
        break;
      case 2:
        if (state.enhanceJewelry.readyCalculate) {
          state.enhanceJewelry.addedCountTwo +=
            obj.value - state.enhanceJewelry.countTwo;
        } else {
          state.enhanceJewelry.startCountTwo = obj.value;
        }
        state.enhanceJewelry.countTwo = obj.value;
        break;
      case 3:
        if (state.enhanceJewelry.readyCalculate) {
          state.enhanceJewelry.addedCountThree +=
            obj.value - state.enhanceJewelry.countThree;
        } else {
          state.enhanceJewelry.startCountThree = obj.value;
        }
        state.enhanceJewelry.countThree = obj.value;

        break;
      case 4:
        if (state.enhanceJewelry.readyCalculate) {
          state.enhanceJewelry.addedCountFour +=
            obj.value - state.enhanceJewelry.countFour;
        } else {
          state.enhanceJewelry.startCountFour = obj.value;
        }
        state.enhanceJewelry.countFour = obj.value;

        break;

      default:
        break;
    }
  },
  setCountInputArmor(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        if (state.enhanceArmor.readyCalculate) {
          state.enhanceArmor.addedCountZero +=
            obj.value - state.enhanceArmor.countZero;
        } else {
          state.enhanceArmor.startCountZero = obj.value;
        }
        state.enhanceArmor.countZero = obj.value;
        break;
      case 1:
        if (state.enhanceArmor.readyCalculate) {
          state.enhanceArmor.addedCountOne +=
            obj.value - state.enhanceArmor.countOne;
        } else {
          state.enhanceArmor.startCountOne = obj.value;
        }
        state.enhanceArmor.countOne = obj.value;
        break;
      case 2:
        if (state.enhanceArmor.readyCalculate) {
          state.enhanceArmor.addedCountTwo +=
            obj.value - state.enhanceArmor.countTwo;
        } else {
          state.enhanceArmor.startCountTwo = obj.value;
        }
        state.enhanceArmor.countTwo = obj.value;
        break;
      case 3:
        if (state.enhanceArmor.readyCalculate) {
          state.enhanceArmor.addedCountThree +=
            obj.value - state.enhanceArmor.countThree;
        } else {
          state.enhanceArmor.startCountThree = obj.value;
        }
        state.enhanceArmor.countThree = obj.value;
        break;
      case 4:
        if (state.enhanceArmor.readyCalculate) {
          state.enhanceArmor.addedCountFour +=
            obj.value - state.enhanceArmor.countFour;
        } else {
          state.enhanceArmor.startCountFour = obj.value;
        }
        state.enhanceArmor.countFour = obj.value;
        break;

      default:
        break;
    }
  },
  setCountInputBlackstar(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        if (state.enhanceBlackstar.readyCalculate) {
          state.enhanceBlackstar.addedCountZero +=
            obj.value - state.enhanceBlackstar.countZero;
        } else {
          state.enhanceBlackstar.startCountZero = obj.value;
        }
        state.enhanceBlackstar.countZero = obj.value;
        break;
      case 1:
        if (state.enhanceBlackstar.readyCalculate) {
          state.enhanceBlackstar.addedCountOne +=
            obj.value - state.enhanceBlackstar.countOne;
        } else {
          state.enhanceBlackstar.startCountOne = obj.value;
        }
        state.enhanceBlackstar.countOne = obj.value;
        break;
      case 2:
        if (state.enhanceBlackstar.readyCalculate) {
          state.enhanceBlackstar.addedCountTwo +=
            obj.value - state.enhanceBlackstar.countTwo;
        } else {
          state.enhanceBlackstar.startCountTwo = obj.value;
        }
        state.enhanceBlackstar.countTwo = obj.value;
        break;
      case 3:
        if (state.enhanceBlackstar.readyCalculate) {
          state.enhanceBlackstar.addedCountThree +=
            obj.value - state.enhanceBlackstar.countThree;
        } else {
          state.enhanceBlackstar.startCountThree = obj.value;
        }
        state.enhanceBlackstar.countThree = obj.value;
        break;
      case 4:
        if (state.enhanceBlackstar.readyCalculate) {
          state.enhanceBlackstar.addedCountFour +=
            obj.value - state.enhanceBlackstar.countFour;
        } else {
          state.enhanceBlackstar.startCountFour = obj.value;
        }
        state.enhanceBlackstar.countFour = obj.value;
        break;

      default:
        break;
    }
  },
  setCountInputArmorGod(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        if (state.enhanceArmorGod.readyCalculate) {
          state.enhanceArmorGod.addedCountZero +=
            obj.value - state.enhanceArmorGod.countZero;
        } else {
          state.enhanceArmorGod.startCountZero = obj.value;
        }
        state.enhanceArmorGod.countZero = obj.value;
        break;
      case 1:
        if (state.enhanceArmorGod.readyCalculate) {
          state.enhanceArmorGod.addedCountOne +=
            obj.value - state.enhanceArmorGod.countOne;
        } else {
          state.enhanceArmorGod.startCountOne = obj.value;
        }
        state.enhanceArmorGod.countOne = obj.value;
        break;
      case 2:
        if (state.enhanceArmorGod.readyCalculate) {
          state.enhanceArmorGod.addedCountTwo +=
            obj.value - state.enhanceArmorGod.countTwo;
        } else {
          state.enhanceArmorGod.startCountTwo = obj.value;
        }
        state.enhanceArmorGod.countTwo = obj.value;
        break;
      case 3:
        if (state.enhanceArmorGod.readyCalculate) {
          state.enhanceArmorGod.addedCountThree +=
            obj.value - state.enhanceArmorGod.countThree;
        } else {
          state.enhanceArmorGod.startCountThree = obj.value;
        }
        state.enhanceArmorGod.countThree = obj.value;
        break;
      case 4:
        if (state.enhanceArmorGod.readyCalculate) {
          state.enhanceArmorGod.addedCountFour +=
            obj.value - state.enhanceArmorGod.countFour;
        } else {
          state.enhanceArmorGod.startCountFour = obj.value;
        }
        state.enhanceArmorGod.countFour = obj.value;
        break;

      default:
        break;
    }
  },
  setCountInputManos(state, obj) {
    if (obj.value == '') obj.value = 0;
    switch (obj.level) {
      case 0:
        if (state.enhanceManos.readyCalculate) {
          state.enhanceManos.addedCountZero +=
            obj.value - state.enhanceManos.countZero;
        } else {
          state.enhanceManos.startCountZero = obj.value;
        }
        state.enhanceManos.countZero = obj.value;
        break;
      case 1:
        if (state.enhanceManos.readyCalculate) {
          state.enhanceManos.addedCountOne +=
            obj.value - state.enhanceManos.countOne;
        } else {
          state.enhanceManos.startCountOne = obj.value;
        }
        state.enhanceManos.countOne = obj.value;
        break;
      case 2:
        if (state.enhanceManos.readyCalculate) {
          state.enhanceManos.addedCountTwo +=
            obj.value - state.enhanceManos.countTwo;
        } else {
          state.enhanceManos.startCountTwo = obj.value;
        }
        state.enhanceManos.countTwo = obj.value;
        break;
      case 3:
        if (state.enhanceManos.readyCalculate) {
          state.enhanceManos.addedCountThree +=
            obj.value - state.enhanceManos.countThree;
        } else {
          state.enhanceManos.startCountThree = obj.value;
        }
        state.enhanceManos.countThree = obj.value;
        break;
      case 4:
        if (state.enhanceManos.readyCalculate) {
          state.enhanceManos.addedCountFour +=
            obj.value - state.enhanceManos.countFour;
        } else {
          state.enhanceManos.startCountFour = obj.value;
        }
        state.enhanceManos.countFour = obj.value;
        break;

      default:
        break;
    }
  },
  setMagicStone(state, value) {
    if (value == '') value = 0;
    if (state.enhanceArmor.readyCalculate) {
      state.enhanceArmor.addedCountMagicStone +=
        value - state.enhanceArmor.countMagicStone;
    } else {
      state.enhanceArmor.countMagicStone = value;
    }
    state.enhanceArmor.countMagicStone = value;
  },
  setIntegrityStone(state, value) {
    if (value == '') value = 0;
    if (state.enhanceBlackstar.readyCalculate) {
      state.enhanceBlackstar.addedCountMagicStone +=
        value - state.enhanceBlackstar.countMagicStone;
    } else {
      state.enhanceBlackstar.countMagicStone = value;
    }
    state.enhanceBlackstar.countMagicStone = value;
  },
  setChaosStone(state, value) {
    if (value == '') value = 0;
    if (state.enhanceArmorGod.readyCalculate) {
      state.enhanceArmorGod.addedCountMagicStone +=
        value - state.enhanceArmorGod.countMagicStone;
    } else {
      state.enhanceArmorGod.countMagicStone = value;
    }
    state.enhanceArmorGod.countMagicStone = value;
  },
  setManosStone(state, value) {
    if (value == '') value = 0;
    if (state.enhanceManos.readyCalculate) {
      state.enhanceManos.addedCountMagicStone +=
        value - state.enhanceManos.countMagicStone;
    } else {
      state.enhanceManos.countMagicStone = value;
    }
    state.enhanceManos.countMagicStone = value;
  },
  setInputGeneralFailstack(state, value) {
    switch (state.typeOfEnhance) {
      case 1:
        switch (state.enhanceJewelry.level) {
          case 1:
            state.enhanceJewelry.startFailstackto1 = value;
            state.enhanceJewelry.currentFailstackto1 = value;
            break;
          case 2:
            state.enhanceJewelry.startFailstackto2 = value;
            state.enhanceJewelry.currentFailstackto2 = value;
            break;
          case 3:
            state.enhanceJewelry.startFailstackto3 = value;
            state.enhanceJewelry.currentFailstackto3 = value;
            break;
          case 4:
            state.enhanceJewelry.startFailstackto4 = value;
            state.enhanceJewelry.currentFailstackto4 = value;
            break;
          case 5:
            state.enhanceJewelry.startFailstackto5 = value;
            state.enhanceJewelry.currentFailstackto5 = value;
            break;
        }
        break;
      case 2:
        switch (state.enhanceArmor.level) {
          case 1:
            state.enhanceArmor.startFailstackto1 = value;
            state.enhanceArmor.currentFailstackto1 = value;
            break;
          case 2:
            state.enhanceArmor.startFailstackto2 = value;
            state.enhanceArmor.currentFailstackto2 = value;
            break;
          case 3:
            state.enhanceArmor.startFailstackto3 = value;
            state.enhanceArmor.currentFailstackto3 = value;
            break;
          case 4:
            state.enhanceArmor.startFailstackto4 = value;
            state.enhanceArmor.currentFailstackto4 = value;
            break;
          case 5:
            state.enhanceArmor.startFailstackto5 = value;
            state.enhanceArmor.currentFailstackto5 = value;
            break;
        }
        break;
      case 3:
        switch (state.enhanceBlackstar.level) {
          case 1:
            state.enhanceBlackstar.startFailstackto1 = value;
            state.enhanceBlackstar.currentFailstackto1 = value;
            break;
          case 2:
            state.enhanceBlackstar.startFailstackto2 = value;
            state.enhanceBlackstar.currentFailstackto2 = value;
            break;
          case 3:
            state.enhanceBlackstar.startFailstackto3 = value;
            state.enhanceBlackstar.currentFailstackto3 = value;
            break;
          case 4:
            state.enhanceBlackstar.startFailstackto4 = value;
            state.enhanceBlackstar.currentFailstackto4 = value;
            break;
          case 5:
            state.enhanceBlackstar.startFailstackto5 = value;
            state.enhanceBlackstar.currentFailstackto5 = value;
            break;
        }
        break;
      case 4:
        switch (state.enhanceArmorGod.level) {
          case 1:
            state.enhanceArmorGod.startFailstackto1 = value;
            state.enhanceArmorGod.currentFailstackto1 = value;
            break;
          case 2:
            state.enhanceArmorGod.startFailstackto2 = value;
            state.enhanceArmorGod.currentFailstackto2 = value;
            break;
          case 3:
            state.enhanceArmorGod.startFailstackto3 = value;
            state.enhanceArmorGod.currentFailstackto3 = value;
            break;
          case 4:
            state.enhanceArmorGod.startFailstackto4 = value;
            state.enhanceArmorGod.currentFailstackto4 = value;
            break;
          case 5:
            state.enhanceArmorGod.startFailstackto5 = value;
            state.enhanceArmorGod.currentFailstackto5 = value;
            break;
        }
        break;
      case 5:
        switch (state.enhanceManos.level) {
          case 1:
            state.enhanceManos.startFailstackto1 = value;
            state.enhanceManos.currentFailstackto1 = value;
            break;
          case 2:
            state.enhanceManos.startFailstackto2 = value;
            state.enhanceManos.currentFailstackto2 = value;
            break;
          case 3:
            state.enhanceManos.startFailstackto3 = value;
            state.enhanceManos.currentFailstackto3 = value;
            break;
          case 4:
            state.enhanceManos.startFailstackto4 = value;
            state.enhanceManos.currentFailstackto4 = value;
            break;
          case 5:
            state.enhanceManos.startFailstackto5 = value;
            state.enhanceManos.currentFailstackto5 = value;
            break;
        }
        break;
    }
  },
  setCountCron(state, value) {
    switch (state.typeOfEnhance) {
      case 1:
        switch (state.enhanceJewelry.level) {
          case 1:
            state.enhanceJewelry.countCron1 = value;
            break;
          case 2:
            state.enhanceJewelry.countCron2 = value;
            break;
          case 3:
            state.enhanceJewelry.countCron3 = value;
            break;
          case 4:
            state.enhanceJewelry.countCron4 = value;
            break;
          case 5:
            state.enhanceJewelry.countCron5 = value;
            break;
        }
        break;
      case 2:
        switch (state.enhanceArmor.level) {
          case 1:
            state.enhanceArmor.countCron1 = value;
            break;
          case 2:
            state.enhanceArmor.countCron2 = value;
            break;
          case 3:
            state.enhanceArmor.countCron3 = value;
            break;
          case 4:
            state.enhanceArmor.countCron4 = value;
            break;
          case 5:
            state.enhanceArmor.countCron5 = value;
            break;
        }
        break;
      case 3:
        switch (state.enhanceBlackstar.level) {
          case 1:
            state.enhanceBlackstar.countCron1 = value;
            break;
          case 2:
            state.enhanceBlackstar.countCron2 = value;
            break;
          case 3:
            state.enhanceBlackstar.countCron3 = value;
            break;
          case 4:
            state.enhanceBlackstar.countCron4 = value;
            break;
          case 5:
            state.enhanceBlackstar.countCron5 = value;
            break;
        }
        break;
      case 4:
        switch (state.enhanceArmorGod.level) {
          case 1:
            state.enhanceArmorGod.countCron1 = value;
            break;
          case 2:
            state.enhanceArmorGod.countCron2 = value;
            break;
          case 3:
            state.enhanceArmorGod.countCron3 = value;
            break;
          case 4:
            state.enhanceArmorGod.countCron4 = value;
            break;
          case 5:
            state.enhanceArmorGod.countCron5 = value;
            break;
        }
        break;
      case 5:
        switch (state.enhanceManos.level) {
          case 1:
            state.enhanceManos.countCron1 = value;
            break;
          case 2:
            state.enhanceManos.countCron2 = value;
            break;
          case 3:
            state.enhanceManos.countCron3 = value;
            break;
          case 4:
            state.enhanceManos.countCron4 = value;
            break;
          case 5:
            state.enhanceManos.countCron5 = value;
            break;
        }
        break;
    }
  }
};

const actions = {
  setLevel({ commit }, level) {
    commit('setLevel', level);
  },
  refreshInterfaceState({ commit }) {
    commit('resetState');
  },
  updateCount({ commit }) {
    commit('updateCount');
  },
  nextTypeOfEnhance({ commit }) {
    commit('nextTypeOfEnhance');
  },
  backTypeOfEnhance({ commit }) {
    commit('backTypeOfEnhance');
  },
  failEnhanceTo1({ commit }) {
    commit('failEnhanceTo1');
  },
  successEnhanceTo1({ commit }) {
    commit('successEnhanceTo1');
  },
  failEnhanceTo2({ commit }) {
    commit('failEnhanceTo2');
  },
  successEnhanceTo2({ commit }) {
    commit('successEnhanceTo2');
  },
  failEnhanceTo3({ commit }) {
    commit('failEnhanceTo3');
  },
  successEnhanceTo3({ commit }) {
    commit('successEnhanceTo3');
  },
  failEnhanceTo4({ commit }) {
    commit('failEnhanceTo4');
  },
  successEnhanceTo4({ commit }) {
    commit('successEnhanceTo4');
  },
  failEnhanceTo5({ commit }) {
    commit('failEnhanceTo5');
  },
  successEnhanceTo5({ commit }) {
    commit('successEnhanceTo5');
  },
  refreshGeneralChanceAndFailstack({ commit }) {
    commit('refreshGeneralChanceAndFailstack');
  },
  triggerStreamingEnhance({ commit }) {
    commit('triggerStreamingEnhance');
  },
  failstackStepDown({ commit }) {
    commit('failstackStepDown');
  },
  failstackStepUp({ commit }) {
    commit('failstackStepUp');
  },
  setCountInputArmor({ commit }, obj) {
    commit('setCountInputArmor', obj);
  },
  setCountInputJewelry({ commit }, obj) {
    commit('setCountInputJewelry', obj);
  },
  setCountInputBlackstar({ commit }, obj) {
    commit('setCountInputBlackstar', obj);
  },
  setCountInputArmorGod({ commit }, obj) {
    commit('setCountInputArmorGod', obj);
  },
  setCountInputManos({ commit }, obj) {
    commit('setCountInputManos', obj);
  },
  setMagicStone({ commit }, value) {
    commit('setMagicStone', value);
  },
  setIntegrityStone({ commit }, value) {
    commit('setIntegrityStone', value);
  },
  setChaosStone({ commit }, value) {
    commit('setChaosStone', value);
  },
  setManosStone({ commit }, value) {
    commit('setManosStone', value);
  },
  setInputGeneralFailstack({ commit }, value) {
    commit('setInputGeneralFailstack', value);
  },
  setCron({ commit }) {
    commit('setCron');
  },
  setCountCron({ commit }, value) {
    commit('setCountCron', value);
  },
  cronOff({ commit }) {
    commit('cronOff');
  },
  nextPageOfInventory({ commit }) {
    commit('nextPageOfInventory');
  },
  backPageOfInventory({ commit }) {
    commit('backPageOfInventory');
  },
  goToCalculate({ commit }) {
    commit('goToCalculate');
  }
};
import graph from './graph';
import statistics from './statistics';
import result from './result';

export default {
  namespaced: true,
  statistics,
  state,
  graph,
  result,
  actions,
  mutations,
  getters
};
