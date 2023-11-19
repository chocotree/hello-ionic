import { doApi, ApiLoading, sleep } from '@/utils';

export class LoginVM {
  apiLoading = new ApiLoading();

  /**
   * 登入資料
   */
  loginData: LoginData = reactive({
    account: '',
    password: '',
  });

  /**
   * 是否填寫完成
   */
  isDataCompleted = computed(() => {
    const account = this.loginData.account.trim();
    const password = this.loginData.password.trim();
    return account && password;
  });

  /**
   * 更新欄位資料
   */
  updateField(fieldName: keyof LoginData, val: string) {
    this.loginData[fieldName] = val;
  }

  /**
   * 執行登入
   */
  async login(options?: Api.Options) {
    if (!this.isDataCompleted.value) return;

    const fn = async () => {
      console.log('post login data:', this.loginData);
      await sleep(800);
    };

    await doApi(fn, this.apiLoading, 'login error:', options);
  }
}
