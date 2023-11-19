import { defineStore } from 'pinia';
import { DarkModeVM } from '@/viewModel/DarkModeVM';
import { SwiperTabVM, PageTab } from '@/viewModel/SwiperTabVM';
import Home from '@/components/homePage/Home.vue';
import Add from '@/components/homePage/Add.vue';
import Setting from '@/components/homePage/Setting.vue';

const useApp = defineStore('app', () => {
  const pageTabList: PageTab[] = [
    { label: '日記', key: 'diary', component: Home }, //
    { label: '新增', key: 'add', component: Add },
    { label: '我的', key: 'mine', component: Setting },
  ];

  const swiperTabVM = new SwiperTabVM(pageTabList);
  const darkModeVM = new DarkModeVM();

  const getDarkModeVM = () => ({ darkModeVM });
  const getSwiperTabVM = () => ({ swiperTabVM });

  return {
    getDarkModeVM,
    getSwiperTabVM,
  };
});

export const useAppStore = () => ({ appStore: useApp() });
