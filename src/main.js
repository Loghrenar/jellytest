import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import CharactersListVue from "./components/characters/CharactersList.vue";
import CharacterCardVue from "./components/characters/character-card/CharacterCard.vue";
import CharacterPageVue from "./components/characters/character/CharacterPage.vue";

const app = createApp(App);
app.component("CharactersList", CharactersListVue);
app.component("CharacterPage", CharacterPageVue);
app.component("CharacterCard", CharacterCardVue);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
