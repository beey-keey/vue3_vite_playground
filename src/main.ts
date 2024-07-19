import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
const vuetify = createVuetify(); // Create Vuetify instance

app.use(vuetify);
app.mount("#app");
