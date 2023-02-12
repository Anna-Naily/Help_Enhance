<template>
  <div class="interface-block">
    <div class="interface-block__elements">
      <div class="img-block">
        <div class="img-block__elementary">
          <img class="img-block__el" src="../assets/img/windowForItem.png" />
          <img
            src="../assets/img/zero.png"
            alt
            class="img-block__increase-item"
            v-if="this.getEnhanceJewelry.level>0 && this.getTypeOfEnhance==1 && this.getEnhanceJewelry.level<=5"
          />
          <img
            src="../assets/img/magicstone.png"
            alt
            class="img-block__increase-item"
            v-if="this.getEnhanceArmor.level>0 && this.getTypeOfEnhance==2 && this.getEnhanceArmor.level<=5"
          />
          <img
            src="../assets/img/integrityStone.png"
            alt
            class="img-block__increase-item"
            v-if="this.getEnhanceBlackstar.level>0 && this.getTypeOfEnhance==3 && this.getEnhanceBlackstar.level<=5"
          />
          <img
            src="../assets/img/chaosStone.png"
            alt
            class="img-block__increase-item"
            v-if="this.getEnhanceArmorGod.level>0 && this.getTypeOfEnhance==4 && this.getEnhanceArmorGod.level<=5"
          />
          <img
            src="../assets/img/stoneManos.png"
            alt
            class="img-block__increase-item"
            v-if="this.getEnhanceManos.level>0 && this.getTypeOfEnhance==5 && this.getEnhanceManos.level<=5"
          />
        </div>
        <div class="img-block__chance">
          <div class="img-block__item-chance">
            <img class="img-block__el" src="../assets/img/windowPercent.png" />
            <p
              v-if="this.getTypeOfEnhance==4 && this.getEnhanceArmorGod.level==5"
              class="img-block__percent"
            >{{(getShowChance*100).toFixed(3)}}&nbsp;%</p>
            <p v-else class="img-block__percent">{{(getShowChance*100).toFixed(2)}}&nbsp;%</p>
          </div>
        </div>
        <div class="img-block__mix">
          <img class="img-block__el" src="../assets/img/windowResult.png" />
          <div class="jewelry-block" v-if="this.getTypeOfEnhance==1">
            <img
              src="../assets/img/zero.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==1"
            />
            <img
              src="../assets/img/one.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==2"
            />
            <img
              src="../assets/img/two.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==3"
            />
            <img
              src="../assets/img/three.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==4"
            />
            <img
              src="../assets/img/four.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==5"
            />
            <img
              src="../assets/img/five.png"
              class="img-block__item"
              v-if="this.getEnhanceJewelry.level==6"
              alt
            />
          </div>
          <div class="armor-block" v-if="this.getTypeOfEnhance==2">
            <img
              src="../assets/img/bosszero.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==1"
            />
            <img
              src="../assets/img/bossone.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==2"
            />
            <img
              src="../assets/img/bosstwo.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==3"
            />
            <img
              src="../assets/img/bossthree.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==4"
            />
            <img
              src="../assets/img/bossfour.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==5"
            />
            <img
              src="../assets/img/bossfive.png"
              class="img-block__item"
              v-if="this.getEnhanceArmor.level==6"
              alt
            />
          </div>
          <div class="armor-block" v-if="this.getTypeOfEnhance==3">
            <img
              src="../assets/img/blackstar15.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==1"
            />
            <img
              src="../assets/img/blackstar16.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==2"
            />
            <img
              src="../assets/img/blackstar17.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==3"
            />
            <img
              src="../assets/img/blackstar18.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==4"
            />
            <img
              src="../assets/img/blackstar19.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==5"
            />
            <img
              src="../assets/img/blackstar20.png"
              class="img-block__item"
              v-if="this.getEnhanceBlackstar.level==6"
              alt
            />
          </div>
          <div class="armor-block" v-if="this.getTypeOfEnhance==4">
            <img
              src="../assets/img/armorgodzero.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==1"
            />
            <img
              src="../assets/img/armorgod16.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==2"
            />
            <img
              src="../assets/img/armorgod17.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==3"
            />
            <img
              src="../assets/img/armorgod18.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==4"
            />
            <img
              src="../assets/img/armorgod19.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==5"
            />
            <img
              src="../assets/img/armorgod20.png"
              class="img-block__item"
              v-if="this.getEnhanceArmorGod.level==6"
              alt
            />
          </div>
          <div class="armor-block" v-if="this.getTypeOfEnhance==5">
            <img
              src="../assets/img/manoszero.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceManos.level==1"
            />
            <img
              src="../assets/img/manosone.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceManos.level==2"
            />
            <img
              src="../assets/img/manostwo.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceManos.level==3"
            />
            <img
              src="../assets/img/manosthree.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceManos.level==4"
            />
            <img
              src="../assets/img/manosfour.png"
              alt
              class="img-block__item"
              v-if="this.getEnhanceManos.level==5"
            />
            <img
              src="../assets/img/manosfive.png"
              class="img-block__item"
              v-if="this.getEnhanceManos.level==6"
              alt
            />
          </div>
        </div>
      </div>
      <div class="failstack-block">
        <button class="input-number__minus" @click="stepDown">-</button>
        <input
          class="input-number__input"
          type="text"
          pattern="^[0-9]+$"
          :value="this.getShowFailstack"
          @input="setInputFailstack"
          v-bind:class="{inputOff:getUseManos}"
        />
        <button class="input-number__plus" @click="stepUp">+</button>
      </div>
      <div v-bind:class="{toggle: !getUseCron, toggleTwo : getUseCron, toggleLock: lockCron }">
        <input
          type="text"
          class="toggle-item__input"
          :value="getCountCron"
          ref="cronInput"
          @input="setCountCronTarget"
        />
        <img
          class="toggle-item__img"
          src="../assets/img/cron.png"
          alt="cron stone"
          v-if="getUseCron==false"
          @click="focusInput"
        />
        <img
          class="toggle-item__img"
          src="../assets/img/without_cron.png"
          alt="cron stone"
          v-if="getUseCron==true"
          @click="focusInput"
        />
      </div>
      <div class="checkbox-block">
        <label class="toggle-control">
          <input
            class="checkbox-input"
            type="checkbox"
            v-model="toggleControl"
            @click="triggerStreamingEnhance"
          />
          <span for="checkbox" class="control"></span>
        </label>
        <span class="checkbox-label">Потоковое усиление</span>
      </div>
      <button class="btn-enhance-hover btn-enhance" @click="toEnhance">Усиление</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'InterfaceComp',
  data() {
    return {
      toggleControl: false,
      soundSuccess: {},
      soundFailed: {},
      outResources: {},
    };
  },
  mounted() {
    this.refreshGeneralChanceAndFailstack();
    this.soundSuccess = new Audio(require('../assets/sound/success.wav'));
    this.soundFailed = new Audio(require('../assets/sound/fail.wav'));
    this.outResources = new Audio(require('../assets/sound/outResources.wav'));
    this.soundSuccess.volume = 0.3;
    this.soundFailed.volume = 0.3;
    this.outResources.volume = 0.3;
  },
  methods: {
    ...mapActions('data', [
      'failEnhanceTo1',
      'successEnhanceTo1',
      'failEnhanceTo2',
      'successEnhanceTo2',
      'failEnhanceTo3',
      'successEnhanceTo3',
      'failEnhanceTo4',
      'successEnhanceTo4',
      'failEnhanceTo5',
      'successEnhanceTo5',
      'refreshGeneralChanceAndFailstack',
      'triggerStreamingEnhance',
      'failstackStepDown',
      'failstackStepUp',
      'setInputGeneralFailstack',
      'setCron',
      'setCountCron',
      'goToCalculate',
    ]),
    ...mapActions('statistics', [
      'addData',
      'countStatisticJewelry',
      'countStatisticArmor',
      'countStatisticManos',
      'countStatisticBlackstar',
      'countStatisticArmorGod',
    ]),
    ...mapActions('graph', ['addToDatabase']),
    ...mapActions('result', ['setChanger']),
    focusInput() {
      this.setCron();
      this.$refs.cronInput.focus();
    },
    soundStop(obj) {
      obj.pause();
      obj.currentTime = 0;
    },
    outRes() {
      this.soundStop(this.outResources);
      this.outResources.play();
      alert('Недостаточно ресурсов');
    },
    toEnhance() {
      this.soundStop(this.soundSuccess);
      this.soundStop(this.soundFailed);
      this.goToCalculate();
      switch (this.getTypeOfEnhance) {
        case 1:
          this.toEnhanceJewelry();
          break;
        case 2:
          this.toEnhanceArmor();
          break;
        case 3:
          this.toEnhanceBlackstar();
          break;
        case 4:
          this.toEnhanceArmorGod();
          break;
        case 5:
          this.toEnhanceManos();
          break;
        default:
          break;
      }
      this.refreshGeneralChanceAndFailstack();
      this.setChanger(); //метод для отслеживания изменений
    },
    toEnhanceJewelry() {
      let gotChance = Math.random();

      let outputStatisticObj = {
        level: this.getEnhanceJewelry.level,
        result: false,
        lostCron: 0,
        usingCron: this.getUseCron,
      };
      switch (this.getEnhanceJewelry.level) {
        case 1:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceJewelry.countCron1;
          if (this.getEnhanceJewelry.countZero >= 2) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceJewelry.currentChanceto1) {
              this.soundSuccess.play();
              this.successEnhanceTo1();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии на +1 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo1();
              this.addData('Усиление бижутерии на +1 не удалось');
            }
          } else this.outRes();
          break;
        case 2:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceJewelry.countCron2;
          if (
            this.getEnhanceJewelry.countZero >= 1 &&
            this.getEnhanceJewelry.countOne >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceJewelry.currentChanceto2) {
              this.soundSuccess.play();
              this.successEnhanceTo2();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии на +2 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo2();
              this.addData('Усиление бижутерии на +2 не удалось');
            }
          } else this.outRes();
          break;
        case 3:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceJewelry.countCron3;
          if (
            this.getEnhanceJewelry.countZero >= 1 &&
            this.getEnhanceJewelry.countTwo >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceJewelry.currentChanceto3) {
              this.soundSuccess.play();
              this.successEnhanceTo3();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии на +3 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo3();

              this.addData('Усиление бижутерии на +3 не удалось');
            }
          } else this.outRes();
          break;
        case 4:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceJewelry.countCron4;
          if (
            this.getEnhanceJewelry.countZero >= 1 &&
            this.getEnhanceJewelry.countThree >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceJewelry.currentChanceto4) {
              this.soundSuccess.play();
              this.successEnhanceTo4();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии на +4 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo4();

              this.addData('Усиление бижутерии на +4 не удалось');
            }
          } else this.outRes();
          break;
        case 5:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceJewelry.countCron5;
          if (
            this.getEnhanceJewelry.countZero >= 1 &&
            this.getEnhanceJewelry.countFour >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceJewelry.currentChanceto5) {
              this.soundSuccess.play();
              this.successEnhanceTo5();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии на +5 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo5();

              this.addData('Усиление бижутерии на +5 не удалось');
            }
          } else this.outRes();
          break;
        default:
          break;
      }
      this.countStatisticJewelry(outputStatisticObj);
    },
    toEnhanceArmor() {
      let gotChance = Math.random();

      let outputStatisticObj = {
        level: this.getEnhanceArmor.level,
        result: false,
        lostCron: 0,
        usingCron: this.getUseCron,
      };
      switch (this.getEnhanceArmor.level) {
        case 1:
          if (
            this.getEnhanceArmor.countMagicStone >= 1 &&
            this.getEnhanceArmor.countZero >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmor.currentChanceto1) {
              this.soundSuccess.play();
              this.successEnhanceTo1();
              outputStatisticObj.result = true;
              this.addData('Усиление брони на +16 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo1();
              this.addData('Усиление брони на +16 не удалось');
            }
          } else this.outRes();
          break;
        case 2:
          if (
            this.getEnhanceArmor.countMagicStone >= 1 &&
            this.getEnhanceArmor.countOne >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmor.currentChanceto2) {
              this.soundSuccess.play();
              this.successEnhanceTo2();
              outputStatisticObj.result = true;
              this.addData('Усиление брони на +17 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo2();
              this.addData('Усиление брони на +17 не удалось');
            }
          } else this.outRes();
          break;
        case 3:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmor.countCron3;
          if (
            this.getEnhanceArmor.countMagicStone >= 1 &&
            this.getEnhanceArmor.countTwo >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmor.currentChanceto3) {
              this.soundSuccess.play();
              this.successEnhanceTo3();
              outputStatisticObj.result = true;
              this.addData('Усиление брони на +18 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo3();
              this.addData('Усиление брони на +18 не удалось');
            }
          } else this.outRes();
          break;
        case 4:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmor.countCron4;
          if (
            this.getEnhanceArmor.countMagicStone >= 1 &&
            this.getEnhanceArmor.countThree >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmor.currentChanceto4) {
              this.soundSuccess.play();
              this.successEnhanceTo4();
              outputStatisticObj.result = true;
              this.addData('Усиление брони на +19 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo4();
              this.addData('Усиление брони на +19 не удалось');
            }
          } else this.outRes();
          break;
        case 5:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmor.countCron5;
          if (
            this.getEnhanceArmor.countMagicStone >= 1 &&
            this.getEnhanceArmor.countFour >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmor.currentChanceto5) {
              this.soundSuccess.play();
              this.successEnhanceTo5();
              outputStatisticObj.result = true;
              this.addData('Усиление брони на +20 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo5();
              this.addData('Усиление брони на +20 не удалось');
            }
          } else this.outRes();
          break;
        default:
          break;
      }
      this.countStatisticArmor(outputStatisticObj);
    },
    toEnhanceBlackstar() {
      let gotChance = Math.random();

      let outputStatisticObj = {
        level: this.getEnhanceBlackstar.level,
        result: false,
        lostCron: 0,
        usingCron: this.getUseCron,
      };
      switch (this.getEnhanceBlackstar.level) {
        case 1:
          if (
            this.getEnhanceBlackstar.countMagicStone >= 1 &&
            this.getEnhanceBlackstar.countZero >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceBlackstar.currentChanceto1) {
              this.soundSuccess.play();
              this.successEnhanceTo1();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление оружия черной звезды на +16 прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo1();
              this.addData('Усиление оружия черной звезды на +16 не удалось');
            }
          } else this.outRes();
          break;
        case 2:
          if (
            this.getEnhanceBlackstar.countMagicStone >= 1 &&
            this.getEnhanceBlackstar.countOne >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceBlackstar.currentChanceto2) {
              this.soundSuccess.play();
              this.successEnhanceTo2();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление оружия черной звезды на +17 прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo2();
              this.addData('Усиление оружия черной звезды на +17 не удалось');
            }
          } else this.outRes();
          break;
        case 3:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceBlackstar.countCron3;
          if (
            this.getEnhanceBlackstar.countMagicStone >= 1 &&
            this.getEnhanceBlackstar.countTwo >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceBlackstar.currentChanceto3) {
              this.soundSuccess.play();
              this.successEnhanceTo3();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление оружия черной звезды на +18 прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo3();
              this.addData('Усиление оружия черной звезды на +18 не удалось');
            }
          } else this.outRes();
          break;
        case 4:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceBlackstar.countCron4;
          if (
            this.getEnhanceBlackstar.countMagicStone >= 1 &&
            this.getEnhanceBlackstar.countThree >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceBlackstar.currentChanceto4) {
              this.soundSuccess.play();
              this.successEnhanceTo4();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление оружия черной звезды на +19 прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo4();
              this.addData('Усиление оружия черной звезды на +19 не удалось');
            }
          } else this.outRes();
          break;
        case 5:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceBlackstar.countCron5;
          if (
            this.getEnhanceBlackstar.countMagicStone >= 1 &&
            this.getEnhanceBlackstar.countFour >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceBlackstar.currentChanceto5) {
              this.soundSuccess.play();
              this.successEnhanceTo5();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление оружия черной звезды на +20 прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo5();
              this.addData('Усиление оружия черной звезды на +20 не удалось');
            }
          } else this.outRes();
          break;
        default:
          break;
      }
      this.countStatisticBlackstar(outputStatisticObj);
    },
    toEnhanceArmorGod() {
      let gotChance = Math.random();

      let outputStatisticObj = {
        level: this.getEnhanceArmorGod.level,
        result: false,
        lostCron: 0,
        usingCron: this.getUseCron,
      };
      switch (this.getEnhanceArmorGod.level) {
        case 1:
          if (
            this.getEnhanceArmorGod.countMagicStone >= 1 &&
            this.getEnhanceArmorGod.countZero >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmorGod.currentChanceto1) {
              this.soundSuccess.play();
              this.successEnhanceTo1();
              outputStatisticObj.result = true;
              this.addData('Усиление брони Мертвого Бога на I прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo1();
              this.addData('Усиление брони Мертвого Бога на I не удалось');
            }
          } else this.outRes();
          break;
        case 2:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmorGod.countCron2;
          if (
            this.getEnhanceArmorGod.countMagicStone >= 1 &&
            this.getEnhanceArmorGod.countOne >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmorGod.currentChanceto2) {
              this.soundSuccess.play();
              this.successEnhanceTo2();
              outputStatisticObj.result = true;
              this.addData('Усиление брони Мертвого Бога на II прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo2();
              this.addData('Усиление брони Мертвого Бога на II не удалось');
            }
          } else this.outRes();
          break;
        case 3:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmorGod.countCron3;
          if (
            this.getEnhanceArmorGod.countMagicStone >= 1 &&
            this.getEnhanceArmorGod.countTwo >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmorGod.currentChanceto3) {
              this.soundSuccess.play();
              this.successEnhanceTo3();
              outputStatisticObj.result = true;
              this.addData(
                'Усиление брони Мертвого Бога на III прошло успешно'
              );
            } else {
              this.soundFailed.play();
              this.failEnhanceTo3();
              this.addData('Усиление брони Мертвого Бога на III не удалось');
            }
          } else this.outRes();
          break;
        case 4:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmorGod.countCron4;
          if (
            this.getEnhanceArmorGod.countMagicStone >= 1 &&
            this.getEnhanceArmorGod.countThree >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmorGod.currentChanceto4) {
              this.soundSuccess.play();
              this.successEnhanceTo4();
              outputStatisticObj.result = true;
              this.addData('Усиление брони Мертвого Бога на IV прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo4();
              this.addData('Усиление брони Мертвого Бога на IV не удалось');
            }
          } else this.outRes();
          break;
        case 5:
          if (this.getUseCron)
            outputStatisticObj.lostCron = this.getEnhanceArmorGod.countCron5;
          if (
            this.getEnhanceArmorGod.countMagicStone >= 1 &&
            this.getEnhanceArmorGod.countFour >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceArmorGod.currentChanceto5) {
              this.soundSuccess.play();
              this.successEnhanceTo5();
              outputStatisticObj.result = true;
              this.addData('Усиление брони Мертвого Бога на V прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo5();
              this.addData('Усиление брони Мертвого Бога на V не удалось');
            }
          } else this.outRes();
          break;
        default:
          break;
      }
      this.countStatisticArmorGod(outputStatisticObj);
    },
    toEnhanceManos() {
      let gotChance = Math.random();

      let outputStatisticObj = {
        level: this.getEnhanceManos.level,
        result: false,
      };
      switch (this.getEnhanceManos.level) {
        case 1:
          if (
            this.getEnhanceManos.countMagicStone >= 10 &&
            this.getEnhanceManos.countZero >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceManos.currentChanceto1) {
              this.soundSuccess.play();
              this.successEnhanceTo1();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии Маноса на +1 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo1();
              this.addData('Усиление бижутерии Маноса на +1 не удалось');
            }
          } else this.outRes();
          break;
        case 2:
          if (
            this.getEnhanceManos.countMagicStone >= 11 &&
            this.getEnhanceManos.countOne >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceManos.currentChanceto2) {
              this.soundSuccess.play();
              this.successEnhanceTo2();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии Маноса на +2 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo2();
              this.addData('Усиление бижутерии Маноса на +2 не удалось');
            }
          } else this.outRes();
          break;
        case 3:
          if (
            this.getEnhanceManos.countMagicStone >= 13 &&
            this.getEnhanceManos.countTwo >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceManos.currentChanceto3) {
              this.soundSuccess.play();
              this.successEnhanceTo3();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии Маноса на +3 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo3();
              this.addData('Усиление бижутерии Маноса на +3 не удалось');
            }
          } else this.outRes();
          break;
        case 4:
          if (
            this.getEnhanceManos.countMagicStone >= 16 &&
            this.getEnhanceManos.countThree >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceManos.currentChanceto4) {
              this.soundSuccess.play();
              this.successEnhanceTo4();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии Маноса на +4 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo4();
              this.addData('Усиление бижутерии Маноса на +4 не удалось');
            }
          } else this.outRes();
          break;
        case 5:
          if (
            this.getEnhanceManos.countMagicStone >= 20 &&
            this.getEnhanceManos.countFour >= 1
          ) {
            this.addToDatabase(Number((gotChance * 100).toFixed(2)));
            if (gotChance < this.getEnhanceManos.currentChanceto5) {
              this.soundSuccess.play();
              this.successEnhanceTo5();
              outputStatisticObj.result = true;
              this.addData('Усиление бижутерии Маноса на +5 прошло успешно');
            } else {
              this.soundFailed.play();
              this.failEnhanceTo5();
              this.addData('Усиление бижутерии Маноса на +5 не удалось');
            }
          } else this.outRes();
          break;
        default:
          break;
      }
      this.countStatisticManos(outputStatisticObj);
    },
    setInputFailstack(e) {
      this.setInputGeneralFailstack(Number(e.target.value));
      this.refreshGeneralChanceAndFailstack();
    },
    stepUp() {
      this.failstackStepUp();
      this.refreshGeneralChanceAndFailstack();
    },
    stepDown() {
      this.failstackStepDown();
      this.refreshGeneralChanceAndFailstack();
    },
    getCronOfLevel(obj) {
      switch (obj.level) {
        case 1:
          return obj.countCron1;
        case 2:
          return obj.countCron2;
        case 3:
          return obj.countCron3;
        case 4:
          return obj.countCron4;
        case 5:
          return obj.countCron5;

        default:
          return 0;
      }
    },
    setCountCronTarget(e) {
      this.setCountCron(Number(e.target.value));
    },
  },
  computed: {
    ...mapGetters('data', [
      'getEnhanceJewelry',
      'getEnhanceArmor',
      'getEnhanceArmorGod',
      'getEnhanceBlackstar',
      'getEnhanceManos',
      'getTypeOfEnhance',
      'getUseCron',
      'getStreamingEnhance',
      'getUseManos',
    ]),
    getShowChance() {
      switch (this.getTypeOfEnhance) {
        case 1:
          return this.getEnhanceJewelry.currentChanceGeneral;
        case 2:
          return this.getEnhanceArmor.currentChanceGeneral;
        case 3:
          return this.getEnhanceBlackstar.currentChanceGeneral;
        case 4:
          return this.getEnhanceArmorGod.currentChanceGeneral;
        case 5:
          return this.getEnhanceManos.currentChanceGeneral;
        default:
          return 0;
      }
    },
    getShowFailstack() {
      switch (this.getTypeOfEnhance) {
        case 1:
          return this.getEnhanceJewelry.currentFailstackGeneral;
        case 2:
          return this.getEnhanceArmor.currentFailstackGeneral;
        case 3:
          return this.getEnhanceBlackstar.currentFailstackGeneral;
        case 4:
          return this.getEnhanceArmorGod.currentFailstackGeneral;
        case 5:
          return this.getEnhanceManos.currentFailstackGeneral;
        default:
          return 0;
      }
    },
    getCountCron() {
      switch (this.getTypeOfEnhance) {
        case 1:
          return this.getCronOfLevel(this.getEnhanceJewelry);
        case 2:
          return this.getCronOfLevel(this.getEnhanceArmor);
        case 3:
          return this.getCronOfLevel(this.getEnhanceBlackstar);
        case 4:
          return this.getCronOfLevel(this.getEnhanceArmorGod);
        case 5:
          return this.getCronOfLevel(this.getEnhanceManos);
        default:
          return 0;
      }
    },
    lockCron() {
      if (
        (this.getTypeOfEnhance == 1 && this.getEnhanceArmor.level < 1) ||
        (this.getTypeOfEnhance == 2 && this.getEnhanceArmor.level < 3) ||
        (this.getTypeOfEnhance == 3 && this.getEnhanceBlackstar.level < 3) ||
        (this.getTypeOfEnhance == 4 && this.getEnhanceArmorGod.level < 2) ||
        this.getTypeOfEnhance == 5
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    getStreamingEnhance() {
      this.toggleControl = this.getStreamingEnhance;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/checkbox.scss';

.interface-block {
  background: url('../assets/img/blackSpirit.png') no-repeat;
  background-position: 183px 70px;
  width: 600px;
  margin-left: 70px;
  .interface-block__elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.img-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  position: relative;
  margin-top: 210px;
  margin-left: 14%;
  .img-block__elementary {
    display: flex;
  }
}
.img-block__item {
  position: absolute;
  right: 11.9%;
  top: 34.6%;
}
.img-block__percent {
  position: absolute;
  color: white;
  font-size: 18px;
  margin: -75px 26px;
}
.img-block__chance {
  position: relative;
  text-align: center;
}

.img-block__increase-item {
  position: absolute;
  margin: 7px;
}
.btn-enhance-hover {
  background: none;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  box-sizing: border-box;
  background-size: 300% 100%;
  border-radius: 50px;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-position: 100% 0;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    outline: none;
  }
}
.btn-enhance-hover.btn-enhance {
  margin-top: 25px;
  background-image: linear-gradient(
    to right,
    #6253e1,
    #852d91,
    #a3a1ff,
    #f24645
  );
  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  &:active {
    background-image: linear-gradient(
      to right,
      #5545e2,
      #852092,
      #8886fc,
      #f53333
    );
  }
}
.checkbox-block {
  margin-top: 25px;
  display: flex;
  width: fit-content;
  background: rgba(35, 28, 25, 0.6588235294);
  border-radius: 15px;
  padding: 5px;
  .checkbox-label {
    color: #ffefd4;
    font-size: 15px;
  }
  .toggle-control {
    width: 50px;
  }
}
.failstack-block {
  display: flex;
  margin-bottom: 25px;
}
.input-number {
  display: flex;
  align-items: center;
  border: 1px solid #e5e8ee;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
  width: calc(33px * 3);
}

.input-number__input {
  background: #ffeed5;
  width: 27px;
  height: 14px;
  border: none;
  padding: 8px;
  text-align: center;
  font-size: 16px;
  color: #2e231d;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif !important;
}
.inputOff {
  pointer-events: none;
  background-color: rgb(119, 119, 119) !important;
}
.input-number__minus,
.input-number__plus {
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: #ffeed5;
  font-size: 16px;
  border: 1px solid #70635b;
  background: radial-gradient(
    circle,
    rgba(98, 61, 48, 1) 0%,
    rgba(63, 49, 46, 1) 35%,
    rgba(33, 26, 24, 1) 100%
  );
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background: radial-gradient(
      circle,
      rgb(65, 40, 31) 0%,
      rgb(44, 34, 32) 35%,
      rgb(26, 20, 19) 100%
    );
  }
  &:active {
    border: 1.5px solid;
  }
}

%toggle-item__input {
  border: 0;
  background: transparent;
  width: 98%;
  outline: none;
  font-family: sans-serif;
  font-size: 18px;
  color: #fff;
  font-style: italic;
  transition: all 0.3s ease;
  &:active {
    width: 98%;
    padding-left: 5px;
    transition: all 0.5s 0.8s ease;
  }
}
%toggle-item__img {
  width: 40px;
  cursor: pointer;
}
.toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    rgb(98, 61, 48) 0%,
    rgb(63, 49, 46) 35%,
    rgb(33, 26, 24) 100%
  );
  line-height: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;

  .toggle-item__input {
    @extend %toggle-item__input;
  }
  .toggle-item__img {
    @extend %toggle-item__img;
  }
}
.toggleTwo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 40px;
  background: radial-gradient(
    circle,
    rgb(98, 61, 48) 0%,
    rgb(63, 49, 46) 35%,
    rgb(33, 26, 24) 100%
  );
  line-height: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;

  .toggle-item__input {
    @extend %toggle-item__input;
  }
  .toggle-item__img {
    @extend %toggle-item__img;
  }
}
.toggleLock {
  pointer-events: none;
  filter: grayscale(90%);
  -webkit-filter: grayscale(90%);
}
</style>