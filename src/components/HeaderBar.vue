<template>
  <v-app-bar
    class="v-bar--underline"
    :color="dark ? undefined : color"
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click="internalValue = !internalValue"
    />

    <v-spacer />
    <v-toolbar-items>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon @click="dark = !dark">
            <v-icon v-if="dark">mdi-brightness-3</v-icon>
            <v-icon v-else>mdi-brightness-7</v-icon>
          </v-btn>
        </template>
        <span>テーマ</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>fa-brands fa-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "header-bar",
  model: {
    prop: "drawer",
    event: "click",
  },
  mixins: [],
  props: {
    drawer: Boolean,
    color: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      lazyValue: this.drawer,
    };
  },
  methods: {},
  created() {
    //
  },
  computed: {
    internalValue: {
      set(val: boolean) {
        this.lazyValue = val;
        this.$emit("click", val);
      },
      get(): boolean {
        return this.lazyValue;
      },
    },
    dark: {
      set(val: boolean) {
        this.$vuetify.theme.dark = val;
      },
      get(): boolean {
        return this.$vuetify.theme.dark;
      },
    },
  },
  watch: {
    drawer(val: boolean) {
      this.internalValue = val;
    },
  },
  components: {},
});
</script>

<style scoped></style>