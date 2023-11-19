import type { Swiper } from 'swiper';
import type { Component } from 'vue';

export interface PageTab {
  label: string;
  key: string;
  component: Component;
}

export class SwiperTabVM {
  constructor(pageTabList: PageTab[]) {
    this.pageTabList = pageTabList;
  }

  /**
   * 頁面清單
   */
  pageTabList: PageTab[];

  /**
   * 當前 index
   */
  currentIndex = ref(0);

  /**
   * swiper 主體
   */
  private swiper = ref<Swiper | null>(null);

  /**
   * swiper 初始化事件
   */
  async onInitSwiper(sw: Swiper) {
    await nextTick();
    this.swiper.value = sw;
    this.swiper.value.on('slideChange', () => {
      this.currentIndex.value = this.swiper.value?.activeIndex ?? 0;
    });
  }

  /**
   * 滑動至 (index)
   */
  slideTo(index: number) {
    if (!this.swiper.value) return;

    this.swiper.value.slideTo(index);
    this.currentIndex.value = index;
  }

  /**
   * 更新 swiper
   */
  update() {
    if (!this.swiper.value) return;

    this.swiper.value.update();

    const scrollbar = this.swiper.value?.scrollbar;
    if (!scrollbar) return;

    scrollbar.setTranslate();
    scrollbar.updateSize();
  }

  /**
   * destroy swiper
   */
  destroy() {
    if (!this.swiper.value) return;

    this.swiper.value.destroy();
  }
}
