import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { tabPage } from './tabPage';
import NoteContentPage from '@/views/NoteContentPage.vue';
import { HOME_PAGE, NOTE_CONTENT_PAGE } from '@/config/constants';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: HOME_PAGE }, //
  {
    path: `${NOTE_CONTENT_PAGE}/:id`,
    component: NoteContentPage,
  },
  tabPage,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
