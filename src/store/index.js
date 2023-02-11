import Vue from 'vue';
import Vuex from 'vuex';
import App from '../App.vue';

Vue.use(Vuex);
import data from './data';
import graph from './graph';
import statistics from './statistics';
import result from './result';
import helper from './helper';

export default new Vuex.Store({
  modules: {
    namespaced: true,
    data,
    statistics,
    graph,
    result,
    helper,
    App
  }
});
