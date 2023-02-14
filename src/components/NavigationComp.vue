<template>
  <div>
    <div class="navigation-block container">
      <a href="https://www.helpenhance.ru/" class="navigation-block__link">
        <img class="img-logo" src="../assets/img/MainLogo.png" />
      </a>
      <nav class="navigation-block__links">
        <span class="navigation-block__link link-block" v-scroll-to="'#graph'">График</span>
        <span class="navigation-block__link link-block" v-scroll-to="'#result'">Расчет</span>
        <span class="navigation-block__link link-block modal-comp_link">
          <ModalInfoComp />
        </span>
      </nav>
    </div>
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
  align-items: center;
  padding: 3px;
  .navigation-block__links {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    width: 45%;
    .link-block {
      display: block;
      padding: 18px;
    }
    .modal-comp_link {
      padding: 0;
    }
  }
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