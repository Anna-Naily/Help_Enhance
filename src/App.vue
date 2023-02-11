<template>
  <div class="app">
    <div class="wrapper">
      <div class="help-window" v-show="getHelper">
        <HelperComp />
      </div>
      <NavigationComp />
      <div class="center-block">
        <div class="center-block__elements container">
          <ChoiceBarComp />
          <div class="interface-block">
            <InterfaceComp />
          </div>
          <InventoryComp />
        </div>
        <div class="history-block">
          <StatisticsComp />
        </div>
      </div>
      <GraphComp />
      <ResultComp />
    </div>
    <footer class="footer-block">
      <FooterComp />
    </footer>
  </div>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import ChoiceBarComp from '@/components/ChoiceBarComp.vue';
import InterfaceComp from '@/components/InterfaceComp.vue';
import InventoryComp from '@/components/InventoryComp.vue';
import StatisticsComp from '@/components/StatisticsComp.vue';
import GraphComp from '@/components/GraphComp.vue';
import ResultComp from '@/components/ResultComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import HelperComp from '@/components/HelperComp.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    NavigationComp,
    InterfaceComp,
    InventoryComp,
    ChoiceBarComp,
    StatisticsComp,
    GraphComp,
    ResultComp,
    FooterComp,
    HelperComp,
  },
  computed: {
    ...mapGetters('helper', ['getHelper']),
  },
};
</script>

<style>
@import '@/assets/style/main.scss';
@import '@/assets/style/responsive.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  margin: 0;
}
.app {
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif !important;
}
.center-block {
  background: url('@/assets/img/main-background.png') no-repeat;
  background-size: auto;
  background-position: center;
}
.center-block__elements {
  display: flex;
  justify-content: space-between;
}
.wrapper {
  background-image: url('@/assets/img/pattern.png');
  height: 100%;
  min-height: calc(100vh - 50px);
}
.help-window {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}

.footer-block {
  height: 50px;
  background-color: tomato;
}
</style>
