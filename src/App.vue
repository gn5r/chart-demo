<template>
  <v-app>
    <header-bar v-model="drawer" />
    <drawer v-model="component" :active.sync="drawer" :items="items" />
    <v-main>
      <component :is="component" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Navigation } from "types";
import HeaderBar from "@/components/HeaderBar.vue";
import Drawer from "@/components/Drawer.vue";
import RadarChart from "@/views/RadarChart.vue";

export default Vue.extend({
  name: "app",
  model: {},
  mixins: [],
  props: {},
  data: () => ({
    drawer: false,
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
    this.drawer = !this.isMobile;
  },
  computed: {
    isMobile(): boolean {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  watch: {},
  components: {
    HeaderBar,
    Drawer,
    RadarChart,
  },
});
</script>

<style scoped></style>
