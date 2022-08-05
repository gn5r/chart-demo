import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { ja } from "vuetify/src/locale";

Vue.use(Vuetify);

const osTheme = window.matchMedia("(prefers-color-scheme: dark)");

const vuetify = new Vuetify({
  lang: {
    locales: { ja },
    current: "ja",
  },
  theme: {
    dark: osTheme.matches,
  }
});

osTheme.addEventListener("change", (e) => (vuetify.framework.theme.dark = e.matches));

export default vuetify;