import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';
import { TOAST_INJECTION_KEY, toastService } from '@/service/ToastService';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/**
 * swiper
 */
import 'swiper/css';
import 'swiper/css/scrollbar';
import './theme/customSwiper.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';
import './theme/customIonic.css';

const app = createApp(App).use(IonicVue).use(createPinia()).use(router);

/**
 * dependency injection
 */
app.provide(TOAST_INJECTION_KEY, toastService);

router.isReady().then(() => {
  app.mount('#app');
});
