import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CreateNotePage from '../views/CreateNotePage.vue';
import SettingPage from '../views/SettingPage.vue';
import TabRouteWrapper from '@/components/TabRouteWrapper.vue';
import { HOME_PAGE, CREATE_NOTE_PAGE, SETTING_PAGE } from '@/config/constants';

export const tabPage: RouteRecordRaw = {
  path: '/',
  component: TabRouteWrapper,
  children: [
    {
      path: '',
      redirect: HOME_PAGE,
    },
    {
      path: HOME_PAGE,
      component: HomePage,
    },
    {
      path: CREATE_NOTE_PAGE,
      component: CreateNotePage,
    },
    {
      path: SETTING_PAGE,
      component: () => SettingPage,
    },
  ],
};
