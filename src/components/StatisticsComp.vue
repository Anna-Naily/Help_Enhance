<template>
  <div class="statistic-wrapper container">
    <div class="statistic-window">
      <div class="statistic-window__item" v-for="item in getInfoData" :key="item.index">
        <span class="statistic-window__text">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StatisticsComp',
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters('statistics', ['getInfoData']),
  },
};
</script>

<style lang="scss" scoped>
.statistic-wrapper {
  display: flex;
  justify-content: center;
  .statistic-window {
    margin: 95px 0 68px -80px;
    width: 500px;
    height: 150px;
    overflow: auto;
    background-color: #22191698;
    border-radius: 15px;
    .statistic-window__item {
      margin: 3px 0px 0px 13px;
      .statistic-window__text {
        color: rgba(250, 235, 215, 0.904);
        font-size: 13px;
      }
    }
  }
}
</style>