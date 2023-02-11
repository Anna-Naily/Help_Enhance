<template>
  <div class="choice-bar-wrapper">
    <div class="left-main-bar">
      <p class="left-main-bar__heading">Выбор уровня усиления</p>
      <div class="left-main-bar__items" v-show="this.getTypeOfEnhance==1">
        <img src="../assets/img/zero.png" alt @click="setLevelEnhance(1)" class="item" />
        <img src="../assets/img/one.png" alt @click="setLevelEnhance(2)" class="item" />
        <img src="../assets/img/two.png" alt @click="setLevelEnhance(3)" class="item" />
        <img src="../assets/img/three.png" alt @click="setLevelEnhance(4)" class="item" />
        <img src="../assets/img/four.png" alt @click="setLevelEnhance(5)" class="item" />
      </div>
      <div class="left-main-bar__items" v-show="this.getTypeOfEnhance==2">
        <img src="../assets/img/bosszero.png" alt @click="setLevelEnhance(1)" class="item" />
        <img src="../assets/img/bossone.png" alt @click="setLevelEnhance(2)" class="item" />
        <img src="../assets/img/bosstwo.png" alt @click="setLevelEnhance(3)" class="item" />
        <img src="../assets/img/bossthree.png" alt @click="setLevelEnhance(4)" class="item" />
        <img src="../assets/img/bossfour.png" alt @click="setLevelEnhance(5)" class="item" />
      </div>
      <div class="left-main-bar__items" v-show="(this.getTypeOfEnhance==3)">
        <img src="../assets/img/blackstar15.png" alt @click="setLevelEnhance(1)" class="item" />
        <img src="../assets/img/blackstar16.png" alt @click="setLevelEnhance(2)" class="item" />
        <img src="../assets/img/blackstar17.png" alt @click="setLevelEnhance(3)" class="item" />
        <img src="../assets/img/blackstar18.png" alt @click="setLevelEnhance(4)" class="item" />
        <img src="../assets/img/blackstar19.png" alt @click="setLevelEnhance(5)" class="item" />
      </div>
      <div class="left-main-bar__items" v-show="(this.getTypeOfEnhance==4)">
        <img src="../assets/img/armorgodzero.png" alt @click="setLevelEnhance(1)" class="item" />
        <img src="../assets/img/armorgod16.png" alt @click="setLevelEnhance(2)" class="item" />
        <img src="../assets/img/armorgod17.png" alt @click="setLevelEnhance(3)" class="item" />
        <img src="../assets/img/armorgod18.png" alt @click="setLevelEnhance(4)" class="item" />
        <img src="../assets/img/armorgod19.png" alt @click="setLevelEnhance(5)" class="item" />
      </div>
      <div class="left-main-bar__items" v-show="(this.getTypeOfEnhance==5)">
        <img src="../assets/img/manoszero.png" alt @click="setLevelEnhance(1)" class="item" />
        <img src="../assets/img/manosone.png" alt @click="setLevelEnhance(2)" class="item" />
        <img src="../assets/img/manostwo.png" alt @click="setLevelEnhance(3)" class="item" />
        <img src="../assets/img/manosthree.png" alt @click="setLevelEnhance(4)" class="item" />
        <img src="../assets/img/manosfour.png" alt @click="setLevelEnhance(5)" class="item" />
      </div>
      <div class="arrows">
        <i class="arrow-item fas fa-chevron-circle-left" @click="backType"></i>
        <i class="arrow-item fas fa-chevron-circle-right" @click="nextType"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChoiceBarComp',
  data() {
    return {
      soundClick: {},
      soundItem: {},
    };
  },
  mounted() {
    this.soundClick = new Audio(require('../assets/sound/click.wav'));
    this.soundItem = new Audio(require('../assets/sound/item.wav'));
    this.soundClick.volume = 0.3;
    this.soundItem.volume = 0.3;
  },
  methods: {
    ...mapActions('data', [
      'setLevel',
      'nextTypeOfEnhance',
      'backTypeOfEnhance',
      'refreshGeneralChanceAndFailstack',
      'cronOff',
    ]),
    setLevelEnhance(num) {
      this.soundStop(this.soundItem);
      this.soundItem.play();
      this.setLevel(num);
      this.refreshGeneralChanceAndFailstack();
    },
    nextType() {
      this.soundStop(this.soundClick);
      this.soundClick.play();
      this.nextTypeOfEnhance();
      this.refreshGeneralChanceAndFailstack();
      this.cronOff();
    },
    backType() {
      this.soundStop(this.soundClick);
      this.soundClick.play();
      this.backTypeOfEnhance();
      this.refreshGeneralChanceAndFailstack();
      this.cronOff();
    },
    soundStop(obj) {
      obj.pause();
      obj.currentTime = 0;
    },
  },
  computed: {
    ...mapGetters('data', ['getTypeOfEnhance']),
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/style/main.scss';
@import '../assets/style/responsive.scss';
$color-alpha: #b78846;

.choice-bar-wrapper {
  border: 2px solid $color-alpha;
  padding: 5px;
  box-sizing: border-box;
  height: fit-content;
  margin-top: 4%;
  background-color: #231c19a8;
}
.left-main-bar {
  border: 2px solid $color-alpha;
  padding: 40px;
  box-sizing: border-box;
  width: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  height: fit-content;
  .left-main-bar__heading {
    color: #e5d8c5;
    font-size: 14px;
    font-weight: 600;
    font-style: bold;
  }
  .left-main-bar__items {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .item {
      margin-top: 16px;
      cursor: pointer;
      transition: 0.2s;
      border: 1px solid #231c1900;
      &:hover {
        border: 1px solid #e5d8c5;
      }
      &:active {
        outline: 1.2px solid #e5d8c5;
        transition: 0s;
      }
    }
  }
}

.arrows {
  display: flex;
  justify-content: space-around;
  width: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  .arrow-item {
    color: #ffeed5;
    font-size: 25px;
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

.item-alone {
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid #231c1900;
  &:hover {
    border: 1px solid #e5d8c5;
  }
}

.box-left {
  transform: translate3d(0%, 0%, 0);
  background-color: rgba(#000, 0.5);
  padding: 5px;
  border: 2px solid $color-alpha;
  &:before,
  &:after {
    content: '•';
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: $color-alpha;
    border: 2px solid $color-alpha;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }
  &:before {
    left: 5px;
  }
  &:after {
    right: 5px;
  }
  .box-inner-left {
    position: relative;
    border: 2px solid $color-alpha;
    padding: 40px;
    box-sizing: border-box;
    &:before,
    &:after {
      content: '•';
      position: absolute;
      width: 18px;
      height: 18px;
      font-size: 14px;
      color: $color-alpha;
      border: 2px solid $color-alpha;
      line-height: 12px;
      bottom: -1.5px;
      text-align: center;
      box-sizing: border-box;
    }
    &:before {
      left: -2px;
    }
    &:after {
      right: -2px;
    }
  }
}
</style>