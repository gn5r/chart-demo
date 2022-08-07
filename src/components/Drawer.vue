<template>
  <v-navigation-drawer v-model="drawer" :width="width" dark app floating>
    <template v-slot:prepend>
      <v-toolbar class="v-bar--underline" color="light-green" flat>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5">Chart-Demo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-toolbar>
    </template>
    <v-list dense nav expand flat>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :value="true"
        active-class="light-blue--text"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="text-h6" v-text="item.title" />
          </v-list-item-content>
        </template>
        <v-list-item-group v-model="internalValue" class="pl-4" mandatory>
          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :value="child.component"
            active-class="light-green--text"
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
  </v-navigation-drawer>
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
      default: "256",
    },
    color: {
      type: String,
      default: "light-blue lighten-3",
    },
    active: Boolean,
  },
  data() {
    return {
      lazyValue: this.value,
      drawer: this.active,
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
    dark: {
      get(): boolean {
        return this.$vuetify.theme.dark;
      },
    },
  },
  watch: {
    active(val: boolean) {
      this.drawer = val;
    },
    drawer(val: boolean) {
      this.$emit("update:active", val);
    },
  },
  components: {},
});
</script>

<style scoped></style>
