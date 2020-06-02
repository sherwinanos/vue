import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ninjas: [
      { name: "Kakashi", speciality: "Lightning", show: false },
      { name: "Naruto", speciality: "Wind", show: false },
      { name: "Sasuke", speciality: "Fire", show: false },
    ],
  },
});
