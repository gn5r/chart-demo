import Vue from "vue";
import { Radar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default Vue.extend({
  extends: Radar,
  name: "radar-chart",
  model: {},
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: false,
      }),
    },
    chartId: {
      type: String,
      default: "radar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
  methods: {},
  computed: {},
  watch: {},
  mounted() {
    (this as any).renderChart(this.chartData, this.options);
  },
});
