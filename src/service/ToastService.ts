import { InjectionKey } from 'vue';
import { toastController } from '@ionic/vue';
import { closeCircle } from 'ionicons/icons';
import type { ToastOptions, IonicSafeString } from '@ionic/vue';

interface ToastOpenOption {
  /** default true */
  isShowDismiss?: boolean; //
  msg: string | IonicSafeString;
  /** default undefined */
  colorType?:
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning'
    | undefined;
}

export class ToastService {
  async open(options: ToastOpenOption) {
    const isShowDismiss = options.isShowDismiss ?? true;
    const toastOptions: ToastOptions = {
      duration: 1500,
      position: 'top',
      message: options.msg,
      color: options.colorType,
    };

    if (isShowDismiss) {
      toastOptions['buttons'] = [
        { role: 'cancel', icon: closeCircle }, //
      ];
    }

    const toast = await toastController.create(toastOptions);

    toast.present();
  }
}

/**
 * toast service
 */
export const toastService = new ToastService();

/**
 * app provide injection key
 */
export const TOAST_INJECTION_KEY = Symbol('toastService') as InjectionKey<ToastService>;

/**
 * inject the toast service
 */
export const useToast = () => {
  const toast = inject(TOAST_INJECTION_KEY, toastService);
  return { toast };
};
