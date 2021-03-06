import Vue from "vue";
import Vuex from "vuex";

import company from "@/store/company";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    company
  }
});
