<template>
  <div>
    <nav class="navigation-block container">
      <a href="#" class="navigation-block__link">
        <img class="img-logo" src="../assets/img/MainLogo.png" />
      </a>
      <a href="#" class="navigation-block__link" v-scroll-to="'#graph'">График</a>
      <a href="#" class="navigation-block__link" v-scroll-to="'#result'">Расчет</a>
      <span class="navigation-block__link">
        <ModalInfoComp />
      </span>
    </nav>
  </div>
</template>

<script>
import ModalInfoComp from './ModalInfoComp.vue';

export default {
  name: 'NavigationComp',
  data() {
    return {};
  },
  methods: {},
  components: { ModalInfoComp },
};
</script>

<style lang="scss" scoped>
div {
  background-color: #222222;
}
.navigation-block {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 3px;
  align-items: center;
  .navigation-block__link {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #e6bd89;
    }
    .img-logo {
      width: 58px;
      height: 58px;
    }
  }
}
</style>