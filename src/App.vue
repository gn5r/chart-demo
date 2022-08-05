<template>
  <v-app>
    <v-main>
      <div class="d-flex" style="height: 100%">
        <side-navigation v-model="component" ref="nav" :items="items" />
        <component :is="component" :style="contentsStyle" />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Navigation } from "types";
import SideNavigation from "@/components/SideNavigation.vue";
import RadarChart from "@/views/RadarChart.vue";

export default Vue.extend({
  name: "app",
  model: {},
  mixins: [],
  props: {},
  data: () => ({
    component: "radar-chart",
    items: [
      {
        title: "Samples",
        group: true,
        items: [
          {
            icon: "mdi-hexagon-outline",
            title: "Radar Chart",
            component: "radar-chart",
          },
        ],
      },
    ] as Array<Navigation>,
  }),
  methods: {},
  created() {
    //
  },
  computed: {
    contentsStyle() {
      const { nav } = this.$refs;
      const navWidth = nav !== undefined ? (nav as any).width : "0px";
      return {
        height: "100%",
        width: `calc(100% - ${navWidth})`,
      };
    },
  },
  watch: {},
  components: {
    SideNavigation,
    RadarChart,
  },
});
</script>

<style scoped></style>
