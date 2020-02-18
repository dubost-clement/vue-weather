import Vue from "vue";
import App from "./App.vue";
import VueMoment from "vue-moment";
import moment from "moment";
require('moment/locale/fr');
import FontAwesomeIcon from "./fontAwesome";


Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.use(VueMoment, {
  moment
});

new Vue({
  render: h => h(App)
}).$mount("#app");
