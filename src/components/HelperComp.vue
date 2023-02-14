<template>
  <div class="help-wrapper">
    <transition name="fade">
      <div class="tooltip choice-bar left" v-show="getStage==1">
        <p class="tooltip-text">Выберите уровень и тип усиливаемой группы предметов</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip inventory-bar right" v-show="getStage==2">
        <p
          class="tooltip-text"
        >Проверьте, хватает ли в инвентаре ресурсов для усиления. Если нет - введите необходимое количество</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip enhance-bar_top bottom" v-show="getStage==3">
        <p
          class="tooltip-text"
        >Здесь указан шанс успешного усиления, а под ним - количество фейлов, которое можно ввести вручную</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip enhance-bar_bottom left" v-show="getStage==4">
        <p
          class="tooltip-text"
        >Нажмите на кнопку, чтобы использовать кроны для заточки. Переключив тумблер ниже, Вы можете включить режим потокового усиления</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip statistic-bar right" v-show="getStage==5">
        <p class="tooltip-text">В данном блоке подводится итоговая статистика усиления</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip history-bar bottom" v-show="getStage==6">
        <p class="tooltip-text">Пронаблюдайте историю Вашей заточки</p>
        <button class="tooltip-button" @click="nextStage">Далее</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="tooltip refresh-button right" v-show="getStage==7">
        <p class="tooltip-text">Эта кнопка обнулит весь Ваш прогресс</p>
        <button class="tooltip-button" @click="helperOff">Завершить</button>
      </div>
    </transition>
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HelperComp',
  data() {
    return {};
  },
  methods: {
    ...mapActions('helper', ['helperOff', 'nextStage']),
  },
  computed: {
    ...mapGetters('helper', ['getHelper', 'getStage']),
  },
};
</script>
  
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.help-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .tooltip {
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 1;
    background-color: #fff;
    padding: 8px 16px;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
      0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
    .tooltip-button {
      background-color: #04aa6d;
      color: white;
      border-radius: 25px;
      width: 120px;
      font-size: 14px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      padding: 8px 16px;
      transition: 0.2s;
      margin-top: 10px;
      &:hover {
        background-color: #048b5a;
      }
    }
    .tooltip-text {
      color: #192229;
      font-size: 14px;
      width: 250px;
    }
  }
}

.choice-bar {
  left: 350px;
  top: 193px;
}

.inventory-bar {
  left: 1066px;
  top: 130px;
}
.enhance-bar_top {
  left: 765px;
  top: 185px;
}
.enhance-bar_bottom {
  left: 1021px;
  top: 421px;
}

.statistic-bar {
  left: 1069px;
  top: 450px;
}
.history-bar {
  left: 772px;
  top: 617px;
}
.refresh-button {
  left: 1404px;
  top: 106px;
}

%position-content {
  content: ' ';
  position: absolute;
  border-width: 10px;
  border-style: solid;
}
.left::after {
  @extend %position-content;
  top: 50%;
  right: 100%;
  margin-top: -10px;
  border-color: transparent white transparent transparent;
}
.right::after {
  @extend %position-content;
  top: 50%;
  left: 100%;
  margin-top: -10px;
  border-color: transparent transparent transparent white;
}
.top::after {
  @extend %position-content;
  bottom: 100%;
  left: 50%;
  margin-left: -10px;
  border-color: transparent transparent white transparent;
}
.bottom::after {
  @extend %position-content;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-color: white transparent transparent transparent;
}

// //для Гугл Хрома
// @supports (-webkit-appearance: none) and (not (overflow: -webkit-marquee)) and
//   (not (-ms-ime-align: auto)) and (not (-moz-appearance: none)) {
//   .choice-bar {
//     left: 350px;
//     top: 193px;
//   }
//   .inventory-bar {
//     left: 1066px;
//     top: 130px;
//   }
//   .enhance-bar_top {
//     left: 765px;
//     top: 167px;
//   }
//   .enhance-bar_bottom {
//     left: 1021px;
//     top: 421px;
//   }

//   .statistic-bar {
//     left: 1060px;
//     top: 597px;
//   }
//   .history-bar {
//     left: 772px;
//     top: 617px;
//   }
//   .refresh-button {
//     left: 1408px;
//     top: 106px;
//   }
// }
</style>
  