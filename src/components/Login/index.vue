<script setup lang="ts">
  import BasePageLayout from '@/components/layout/BasePageLayout.vue';
  import { HOME_PAGE } from '@/config/constants';
  import { useToast } from '@/service/ToastService';
  import { LoginVM } from '@/viewModel/LoginVM';
  import { useIonRouter } from '@ionic/vue';

  const { toast } = useToast();
  const ionRouter = useIonRouter();
  const loginVM = new LoginVM();

  const login = () => {
    const successCallback: Api.Options['successCallback'] = () => {
      toast.open({ msg: '登入成功' });
      ionRouter.replace(HOME_PAGE);
    };

    loginVM.login({ successCallback });
  };
</script>

<template>
  <BasePageLayout>
    <template #pageTitle>登入</template>
    <div class="w-full px-[15px] pt-[120px] pb-[40px] flex flex-col i-center">
      <IonInput
        :value="loginVM.loginData.account"
        label="帳號"
        labelPlacement="floating"
        class="border-b border-b-gray-200 mb-[20px]"
        @ionInput="(e) => loginVM.updateField('account', e.target.value as string)"
      />
      <IonInput
        :value="loginVM.loginData.password"
        type="password"
        label="密碼"
        labelPlacement="floating"
        class="border-b border-b-gray-200 mb-[40px]"
        @ionInput="(e) => loginVM.updateField('password', e.target.value as string)"
      />

      <IonButton :disabled="!loginVM.isDataCompleted.value" color="primary" class="w-full h-[40px]" @click="login">
        登入
      </IonButton>

      <IonLoading :isOpen="loginVM.apiLoading.isLoading.value" />
    </div>
  </BasePageLayout>
</template>
