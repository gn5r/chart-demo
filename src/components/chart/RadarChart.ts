import Vue from "vue";
import { Radar } from "vue-chartjs";

export default Vue.extend({
  extends: Radar,
  name: "radar-chart",
  props: {},
});
