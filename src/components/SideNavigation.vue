<template>
  <v-card :width="width" :height="height" :dark="dark" tile>
    <v-navigation-drawer>
      <v-list-item class="light-green">
        <v-list-item-content>
          <v-list-item-title class="text-h5 text-center"
            >Chart-Demo</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list dense>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :value="true"
          active-class="light-blue--text text--lighten-1"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="text-h6" v-text="item.title" />
            </v-list-item-content>
          </template>
          <v-list-item-group
            v-model="internalValue"
            class="pl-4"
            :color="color"
          >
            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :value="child.component"
            >
              <v-list-item-icon>
                <v-icon v-text="child.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="child.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <v-list-item>
          <div>
            <v-btn icon @click="darkMode = !darkMode">
              <v-icon v-if="darkMode">mdi-brightness-4</v-icon>
              <v-icon v-else>mdi-brightness-5</v-icon>
            </v-btn>
          </div>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "side-navigation",
  model: {
    prop: "value",
    event: "click",
  },
  mixins: [],
  props: {
    value: String,
    items: {
      type: Array,
      default: () => [],
    },
    width: {
      type: String,
      default: "256px",
    },
    height: {
      type: String,
      default: "100%",
    },
    dark: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "light-blue lighten-3",
    },
  },
  data() {
    return {
      lazyValue: this.value,
    };
  },
  methods: {},
  created() {
    //
  },
  computed: {
    internalValue: {
      set(val: string) {
        this.lazyValue = val;
        this.$emit("click", val);
      },
      get(): string {
        return this.lazyValue;
      },
    },
    darkMode: {
      set(val: boolean) {
        this.$vuetify.theme.dark = val;
      },
      get(): boolean {
        return this.$vuetify.theme.dark;
      },
    },
  },
  watch: {},
  components: {},
});
</script>

<style scoped></style>