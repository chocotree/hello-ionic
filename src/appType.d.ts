interface LoginData {
  account: string;
  password: string;
}

namespace Api {
  interface Options {
    successCallback?: () => Promise<void> | void;
    errorCallback?: (error: any) => Promise<void> | void;
  }
}
