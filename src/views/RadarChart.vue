<template>
  <v-container class="fill-height" fluid>
    <v-card height="100%" width="100%" flat>
      <v-row justify="start" aling="center">
        <v-col cols="2">
          <v-btn color="info" @click="setChartData">データ取得</v-btn>
        </v-col>
      </v-row>
      <v-row justify="start" align="center">
        <v-col cols="12" lg="6" sm="6">
          <v-card :height="height" :width="width">
            <radar
              v-if="show"
              :chart-data="chartData"
              :height="height"
              :width="width"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-loading :active="loading" is-full-page />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Radar from "@/components/chart/RadarChart";

export default Vue.extend({
  name: "radar-chart",
  model: {},
  mixins: [],
  props: {},
  data: () => ({
    chartData: null as any,
    height: 400,
    width: 400,
    loading: false,
    show: false,
  }),
  methods: {
    createRandomData(n = 5) {
      const random = () => Math.floor(Math.random() * 100) + 1;
      return Array.from(Array(n), () => random());
    },
    setChartData() {
      this.loading = true;
      // ajax風
      setTimeout(() => {
        this.loading = false;
        this.chartData = {
          labels: ["国語", "数学", "理科", "英語", "社会"],
          datasets: [
            {
              label: "点数",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: this.createRandomData(),
            },
          ],
        };
        this.show = true;
      }, 3000);
    },
  },
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {
    // eslint-disable-next-line
    Radar,
  },
});
</script>

<style scoped></style>