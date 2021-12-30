import { createApp } from 'vue'
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import App from './App.vue'

// library.add(fas);
// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");



// createApp(App).mount('#app')
