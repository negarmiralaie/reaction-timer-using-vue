import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");



// createApp(App).mount('#app')
