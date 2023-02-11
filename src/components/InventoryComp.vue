<template>
  <div class="inventory-wrapper">
    <div class="main-window">
      <div class="buttons">
        <i class="fas fa-question-circle main-window__button" @click="helperOn"></i>
        <i class="fas fa-sync main-window__button" @click="toRefresh"></i>
      </div>
      <div class="block-form">
        <form class="form-input" v-if="getPageOfInventory==1">
          <img class="form-input__img" src="../assets/img/inventoryJwlry.png" alt />
          <div class="form-input__bottom">
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countZero"
              @input="setJewelryCount($event, 0)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countOne"
              @input="setJewelryCount($event, 1)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countTwo"
              @input="setJewelryCount($event, 2)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countThree"
              @input="setJewelryCount($event, 3)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countFour"
              @input="setJewelryCount($event, 4)"
            />
            <input
              disabled
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceJewelry.countFive"
            />
            <input disabled class="form-input__element" maxlength="5" />
          </div>
        </form>
        <form class="form-input" v-if="getPageOfInventory==2">
          <img class="form-input__img" src="../assets/img/inventoryArmor.png" alt />
          <div class="form-input__bottom">
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countZero"
              @input="setArmorCount($event, 0)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countOne"
              @input="setArmorCount($event, 1)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countTwo"
              @input="setArmorCount($event, 2)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countThree"
              @input="setArmorCount($event, 3)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countFour"
              @input="setArmorCount($event, 4)"
            />
            <input
              disabled
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countFive"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmor.countMagicStone"
              @input="setMagicStoneCount"
            />
          </div>
        </form>
        <form class="form-input" v-if="getPageOfInventory==3">
          <img class="form-input__img" src="../assets/img/inventoryBs.png" alt />
          <div class="form-input__bottom">
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countZero"
              @input="setBlackstarCount($event, 0)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countOne"
              @input="setBlackstarCount($event, 1)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countTwo"
              @input="setBlackstarCount($event, 2)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countThree"
              @input="setBlackstarCount($event, 3)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countFour"
              @input="setBlackstarCount($event, 4)"
            />
            <input
              disabled
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countFive"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceBlackstar.countMagicStone"
              @input="setIntegrityStoneCount"
            />
          </div>
        </form>
        <form class="form-input" v-if="getPageOfInventory==4">
          <img class="form-input__img" src="../assets/img/inventoryArmorGod.png" alt />
          <div class="form-input__bottom">
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countZero"
              @input="setArmorGodCount($event, 0)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countOne"
              @input="setArmorGodCount($event, 1)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countTwo"
              @input="setArmorGodCount($event, 2)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countThree"
              @input="setArmorGodCount($event, 3)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countFour"
              @input="setArmorGodCount($event, 4)"
            />
            <input
              disabled
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countFive"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceArmorGod.countMagicStone"
              @input="setChaosStoneCount"
            />
          </div>
        </form>
        <form class="form-input" v-if="getPageOfInventory==5">
          <img class="form-input__img" src="../assets/img/inventoryManos.png" alt />
          <div class="form-input__bottom">
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countZero"
              @input="setManosCount($event, 0)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countOne"
              @input="setManosCount($event, 1)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countTwo"
              @input="setManosCount($event, 2)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countThree"
              @input="setManosCount($event, 3)"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countFour"
              @input="setManosCount($event, 4)"
            />
            <input
              disabled
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countFive"
            />
            <input
              class="form-input__element"
              maxlength="5"
              :value="getEnhanceManos.countMagicStone"
              @input="setManosStoneCount"
            />
          </div>
        </form>
        <div class="arrows">
          <font-awesome-icon
            class="arrow-item"
            icon="fa-solid fa-arrow-left"
            @click="backInventoryPage"
          />
          <font-awesome-icon
            class="arrow-item"
            icon="fa-solid fa-arrow-right"
            @click="nextInventoryPage"
          />
        </div>
      </div>
    </div>
    <div class="statistic-box">
      <img
        class="statistic-box__img"
        src="../assets/img/ogrIcon.png"
        alt
        v-if="getTypeOfEnhance==1"
      />
      <img
        class="statistic-box__img"
        src="../assets/img/bossIcon.png"
        alt
        v-if="getTypeOfEnhance==2"
      />
      <img
        class="statistic-box__img"
        src="../assets/img/blackstar.png"
        alt
        v-if="(getTypeOfEnhance==3)"
      />
      <img
        class="statistic-box__img"
        src="../assets/img/armorgodicon.png"
        alt
        v-if="(getTypeOfEnhance==4)"
      />
      <img
        class="statistic-box__img"
        src="../assets/img/manosicon.png"
        alt
        v-if="(getTypeOfEnhance==5)"
      />
      <div class="statistic-box__item jewelry" v-if="getTypeOfEnhance==1">
        <span
          class="statistic-box__el"
        >Итоговый шанс на I: {{getStatisticalDataJewelry.countSuccessTo1}}/{{getStatisticalDataJewelry.countTryTo1}} &nbsp;&nbsp;{{getStatisticalDataJewelry.finalChanceTo1.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на II: {{getStatisticalDataJewelry.countSuccessTo2}}/{{getStatisticalDataJewelry.countTryTo2}} &nbsp;&nbsp;{{getStatisticalDataJewelry.finalChanceTo2.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на III: {{getStatisticalDataJewelry.countSuccessTo3}}/{{getStatisticalDataJewelry.countTryTo3}} &nbsp;&nbsp;{{getStatisticalDataJewelry.finalChanceTo3.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на IV: {{getStatisticalDataJewelry.countSuccessTo4}}/{{getStatisticalDataJewelry.countTryTo4}} &nbsp;&nbsp;{{getStatisticalDataJewelry.finalChanceTo4.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на V: {{getStatisticalDataJewelry.countSuccessTo5}}/{{getStatisticalDataJewelry.countTryTo5}} &nbsp;&nbsp;{{getStatisticalDataJewelry.finalChanceTo5.toFixed(2)}}%</span>
      </div>
      <div class="statistic-box__item" v-if="getTypeOfEnhance==2">
        <span
          class="statistic-box__el"
        >Итоговый шанс на I: {{getStatisticalDataArmor.countSuccessTo1}}/{{getStatisticalDataArmor.countTryTo1}} &nbsp;&nbsp;{{getStatisticalDataArmor.finalChanceTo1.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на II: {{getStatisticalDataArmor.countSuccessTo2}}/{{getStatisticalDataArmor.countTryTo2}} &nbsp;&nbsp;{{getStatisticalDataArmor.finalChanceTo2.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на III: {{getStatisticalDataArmor.countSuccessTo3}}/{{getStatisticalDataArmor.countTryTo3}} &nbsp;&nbsp;{{getStatisticalDataArmor.finalChanceTo3.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на IV: {{getStatisticalDataArmor.countSuccessTo4}}/{{getStatisticalDataArmor.countTryTo4}} &nbsp;&nbsp;{{getStatisticalDataArmor.finalChanceTo4.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на V: {{getStatisticalDataArmor.countSuccessTo5}}/{{getStatisticalDataArmor.countTryTo5}} &nbsp;&nbsp;{{getStatisticalDataArmor.finalChanceTo5.toFixed(2)}}%</span>
      </div>
      <div class="statistic-box__item" v-if="getTypeOfEnhance==3">
        <span
          class="statistic-box__el"
        >Итоговый шанс на I: {{getStatisticalDataBlackstar.countSuccessTo1}}/{{getStatisticalDataBlackstar.countTryTo1}} &nbsp;&nbsp;{{getStatisticalDataBlackstar.finalChanceTo1.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на II: {{getStatisticalDataBlackstar.countSuccessTo2}}/{{getStatisticalDataBlackstar.countTryTo2}} &nbsp;&nbsp;{{getStatisticalDataBlackstar.finalChanceTo2.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на III: {{getStatisticalDataBlackstar.countSuccessTo3}}/{{getStatisticalDataBlackstar.countTryTo3}} &nbsp;&nbsp;{{getStatisticalDataBlackstar.finalChanceTo3.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на IV: {{getStatisticalDataBlackstar.countSuccessTo4}}/{{getStatisticalDataBlackstar.countTryTo4}} &nbsp;&nbsp;{{getStatisticalDataBlackstar.finalChanceTo4.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на V: {{getStatisticalDataBlackstar.countSuccessTo5}}/{{getStatisticalDataBlackstar.countTryTo5}} &nbsp;&nbsp;{{getStatisticalDataBlackstar.finalChanceTo5.toFixed(2)}}%</span>
      </div>
      <div class="statistic-box__item" v-if="getTypeOfEnhance==4">
        <span
          class="statistic-box__el"
        >Итоговый шанс на I: {{getStatisticalDataArmorGod.countSuccessTo1}}/{{getStatisticalDataArmorGod.countTryTo1}} &nbsp;&nbsp;{{getStatisticalDataArmorGod.finalChanceTo1.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на II: {{getStatisticalDataArmorGod.countSuccessTo2}}/{{getStatisticalDataArmorGod.countTryTo2}} &nbsp;&nbsp;{{getStatisticalDataArmorGod.finalChanceTo2.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на III: {{getStatisticalDataArmorGod.countSuccessTo3}}/{{getStatisticalDataArmorGod.countTryTo3}} &nbsp;&nbsp;{{getStatisticalDataArmorGod.finalChanceTo3.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на IV: {{getStatisticalDataArmorGod.countSuccessTo4}}/{{getStatisticalDataArmorGod.countTryTo4}} &nbsp;&nbsp;{{getStatisticalDataArmorGod.finalChanceTo4.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на V: {{getStatisticalDataArmorGod.countSuccessTo5}}/{{getStatisticalDataArmorGod.countTryTo5}} &nbsp;&nbsp;{{getStatisticalDataArmorGod.finalChanceTo5.toFixed(2)}}%</span>
      </div>
      <div class="statistic-box__item" v-if="getTypeOfEnhance==5">
        <span
          class="statistic-box__el"
        >Итоговый шанс на I: {{getStatisticalDataManos.countSuccessTo1}}/{{getStatisticalDataManos.countTryTo1}} &nbsp;&nbsp;{{getStatisticalDataManos.finalChanceTo1.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на II: {{getStatisticalDataManos.countSuccessTo2}}/{{getStatisticalDataManos.countTryTo2}} &nbsp;&nbsp;{{getStatisticalDataManos.finalChanceTo2.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на III: {{getStatisticalDataManos.countSuccessTo3}}/{{getStatisticalDataManos.countTryTo3}} &nbsp;&nbsp;{{getStatisticalDataManos.finalChanceTo3.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на IV: {{getStatisticalDataManos.countSuccessTo4}}/{{getStatisticalDataManos.countTryTo4}} &nbsp;&nbsp;{{getStatisticalDataManos.finalChanceTo4.toFixed(2)}}%</span>
        <span
          class="statistic-box__el"
        >Итоговый шанс на V: {{getStatisticalDataManos.countSuccessTo5}}/{{getStatisticalDataManos.countTryTo5}} &nbsp;&nbsp;{{getStatisticalDataManos.finalChanceTo5.toFixed(2)}}%</span>
      </div>
      <div class="statistic-box__item-bottom">
        <p class="statistic-box__item-bottom-heading">Затрачено:</p>
        <div class="statistic-box__item-bottom-text jewelry-text" v-if="getTypeOfEnhance==1">
          <span
            class="statistic-box__text"
          >Нулевая бижутерия: {{getStatisticalDataJewelry.countLostJewelry}}</span>
          <span class="statistic-box__text">Кроны: {{getStatisticalDataJewelry.countLostCron}}</span>
        </div>
        <div class="statistic-box__item-bottom-text" v-if="getTypeOfEnhance==2">
          <span class="statistic-box__text">Камни: {{getStatisticalDataArmor.countLostStone}}</span>
          <span class="statistic-box__text">Печеньки: {{getStatisticalDataArmor.countLostCookie}}</span>
          <span class="statistic-box__text">Кроны: {{getStatisticalDataArmor.countLostCron}}</span>
        </div>
        <div class="statistic-box__item-bottom-text" v-if="getTypeOfEnhance==3">
          <span class="statistic-box__text">Камни: {{getStatisticalDataBlackstar.countLostStone}}</span>
          <span
            class="statistic-box__text"
          >Печеньки: {{getStatisticalDataBlackstar.countLostCookie}}</span>
          <span class="statistic-box__text">Кроны: {{getStatisticalDataBlackstar.countLostCron}}</span>
        </div>
        <div class="statistic-box__item-bottom-text" v-if="getTypeOfEnhance==4">
          <span class="statistic-box__text">Камни: {{getStatisticalDataArmorGod.countLostStone}}</span>
          <span class="statistic-box__text">Печеньки: {{getStatisticalDataArmorGod.countLostCookie}}</span>
          <span class="statistic-box__text">Кроны: {{getStatisticalDataArmorGod.countLostCron}}</span>
        </div>
        <div class="statistic-box__item-bottom-text" v-if="getTypeOfEnhance==5">
          <span
            class="statistic-box__text"
            v-if="getTypeOfEnhance==5"
          >Камни: {{getStatisticalDataManos.countLostStone}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'InventoryComp',
  data() {
    return {
      show: false,
      soundClick: {},
      soundRefresh: {},
    };
  },
  mounted() {
    this.soundClick = new Audio(require('../assets/sound/click.wav'));
    this.soundRefresh = new Audio(require('../assets/sound/refresh.wav'));
    this.soundClick.volume = 0.3;
    this.soundRefresh.volume = 0.2;
  },
  created() {
    this.updateCount();
  },
  methods: {
    ...mapActions('data', [
      'refreshInterfaceState',
      'setCountInputJewelry',
      'setCountInputArmor',
      'setCountInputBlackstar',
      'setCountInputArmorGod',
      'setCountInputManos',
      'setIntegrityStone',
      'setChaosStone',
      'setManosStone',
      'setMagicStone',
      'updateCount',
      'nextPageOfInventory',
      'backPageOfInventory',
    ]),
    ...mapActions('statistics', ['refreshStatWindow']),
    ...mapActions('graph', ['refreshGraph']),
    ...mapActions('result', ['setChanger', 'refreshCalculation']),
    ...mapActions('helper', ['helperOn']),
    toRefresh() {
      this.soundStop(this.soundRefresh);
      this.soundRefresh.play();
      this.refreshInterfaceState();
      this.refreshStatWindow();
      this.refreshGraph();
      this.updateCount();
      this.refreshCalculation();
    },
    createOutputObj(e, level) {
      let valueObj = {};
      valueObj.level = level;
      valueObj.value = e.target.value;
      return valueObj;
    },
    setJewelryCount(e, level) {
      this.setCountInputJewelry(this.createOutputObj(e, level));
      this.setChanger(); //метод для отслеживания изменений
    },
    setArmorCount(e, level) {
      this.setCountInputArmor(this.createOutputObj(e, level));
      this.setChanger();
    },
    setBlackstarCount(e, level) {
      this.setCountInputBlackstar(this.createOutputObj(e, level));
      this.setChanger();
    },
    setArmorGodCount(e, level) {
      this.setCountInputArmorGod(this.createOutputObj(e, level));
      this.setChanger();
    },
    setManosCount(e, level) {
      this.setCountInputManos(this.createOutputObj(e, level));
      this.setChanger();
    },
    setMagicStoneCount(e) {
      this.setMagicStone(e.target.value);
      this.setChanger();
    },
    setIntegrityStoneCount(e) {
      this.setIntegrityStone(e.target.value);
      this.setChanger();
    },
    setChaosStoneCount(e) {
      this.setChaosStone(e.target.value);
      this.setChanger();
    },
    setManosStoneCount(e) {
      this.setManosStone(e.target.value);
      this.setChanger();
    },
    nextInventoryPage() {
      this.soundStop(this.soundClick);
      this.soundClick.play();
      this.nextPageOfInventory();
    },
    backInventoryPage() {
      this.soundStop(this.soundClick);
      this.soundClick.play();
      this.backPageOfInventory();
    },
    soundStop(obj) {
      obj.pause();
      obj.currentTime = 0;
    },
  },
  computed: {
    ...mapGetters('data', [
      'getEnhanceJewelry',
      'getEnhanceArmor',
      'getTypeOfEnhance',
      'getEnhanceBlackstar',
      'getEnhanceArmorGod',
      'getEnhanceManos',
      'getPageOfInventory',
    ]),
    ...mapGetters('statistics', [
      'getStatisticalDataJewelry',
      'getStatisticalDataArmor',
      'getStatisticalDataBlackstar',
      'getStatisticalDataArmorGod',
      'getStatisticalDataManos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/responsive.scss';
.inventory-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-window {
    background: url('../assets/img/inventoryBcg.png') no-repeat;
    width: 401px;
    height: 186px;
    margin-top: 15%;
    box-shadow: -2px -2px 26px 11px rgba(110, 177, 228, 0.2);
  }
  .buttons {
    display: flex;
    .main-window__button {
      margin-top: 3%;
      font-size: 25px;
      color: #ffeed5;
      cursor: pointer;
      transition: 0.1s;
      &:hover {
        color: #f8d095;
      }
      &:active {
        color: #f5b85d;
      }
    }
  }
}

.fa-sync {
  margin-left: 5%;
}
.fa-question-circle {
  margin-left: 76.5%;
}
.form-input__element {
  width: 34px;
  padding: 2px 3px;
  height: 10px;
  background: none;
  color: #ffefd4;
  border: none;
  text-align: center;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 13px;
}

.block-form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-input__img {
      width: 378px;
    }
    .form-input__bottom {
      display: flex;
      justify-content: space-between;
      width: 370px;
      margin-top: 2px;
    }
  }
  .arrows {
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
    width: 80px;
    .arrow-item {
      color: #ffeed5;
      font-size: 20px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: #f8d095;
      }
      &:active {
        color: #f5b85d;
      }
    }
  }
}
.floor__el {
  margin-right: 20px;
}

.statistic-box {
  width: 397px;
  height: 242px;
  margin-top: 40px;
  background: url('../assets/img/statWindowUpdate.png');

  .statistic-box__img {
    margin-left: 44.09%;
    margin-top: 10.5px;
  }
}
.statistic-box__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  .statistic-box__el {
    color: #ffeed5;
    font-size: 15px;
    margin-bottom: 3px;
  }
}
.statistic-box__item-bottom {
  width: 392px;
  display: flex;
  flex-direction: column;

  .statistic-box__item-bottom-heading {
    color: #ffeed5;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    margin: 3px 0 1px 0;
  }
  .statistic-box__item-bottom-text {
    margin: 0 20px 0 20px;
    display: flex;
    justify-content: space-around;
    .statistic-box__text {
      color: #ffeed5;
      font-size: 13px;
    }
  }
  .jewelry-text {
    margin: 0 -10px 0 -50px;
  }
}
</style>