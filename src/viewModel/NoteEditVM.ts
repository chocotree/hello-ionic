import { ApiLoading, doApi, sleep } from '@/utils';

interface NoteData {
  title: string;
  content: string;
}

export class NoteEditVM {
  /**
   * loading
   */
  apiLoading = new ApiLoading();

  /**
   * 筆記資料
   */
  noteData = reactive({
    title: '',
    content: '',
  });

  /**
   * 能否送出
   */
  canSubmit = computed(() => {
    const title = this.noteData.title.trim();
    const content = this.noteData.content.trim();
    return title && content;
  });

  /**
   * 輸入更新筆記資料
   */
  handleInput(key: keyof NoteData, val: string) {
    this.noteData[key] = val;
  }

  /**
   * 建立筆記
   */
  async createNote(options?: Api.Options) {
    if (!this.canSubmit.value) return { isSuccess: false };

    const fn = async () => {
      console.log('noteData:', this.noteData);
      await sleep(800);
    };

    const successCallback: Api.Options['successCallback'] = () => {
      this.resetNoteData();
      options?.successCallback?.();
    };

    await doApi(fn, this.apiLoading, 'submit note error', { successCallback, errorCallback: options?.errorCallback });
  }

  /**
   * 清除筆記資料
   */
  private resetNoteData() {
    this.noteData.title = '';
    this.noteData.content = '';
  }

  /**
   * 清除
   */
  reset() {
    this.resetNoteData();
    this.apiLoading.stopLoading();
  }
}
