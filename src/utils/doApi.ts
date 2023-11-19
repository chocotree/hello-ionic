export class ApiLoading {
  isLoading = ref(false);

  startLoading() {
    this.isLoading.value = true;
  }

  stopLoading() {
    this.isLoading.value = false;
  }
}

export const doApi = async (
  fn: () => Promise<void>, //
  apiLoading: ApiLoading,
  errMsg: string,
  options?: Api.Options
) => {
  if (apiLoading.isLoading.value) return;

  apiLoading.startLoading();
  try {
    await fn();
    await options?.successCallback?.();
  } catch (error) {
    console.error(errMsg);
    options?.errorCallback?.(error);
  } finally {
    apiLoading.stopLoading();
  }
};
