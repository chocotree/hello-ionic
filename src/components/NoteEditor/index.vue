<script setup lang="ts">
  import { IonInput, IonTextarea } from '@ionic/vue';
  import { NoteEditVM } from '@/viewModel/NoteEditVM';
  import { useToast } from '@/service/ToastService';
  import { useAppStore } from '@/stores';

  const { appStore } = useAppStore();
  const { swiperTabVM } = appStore.getSwiperTabVM();

  const { toast } = useToast();
  const noteEditVM = new NoteEditVM();

  /**
   * 建立筆記
   */
  const createNote = async () => {
    const successCallback = async () => {
      swiperTabVM.slideTo(0);
      toast.open({ msg: '已建立筆記' });
    };

    const errorCallback = () => {
      toast.open({ msg: '建立筆記失敗', colorType: 'danger' });
    };

    await noteEditVM.createNote({ successCallback, errorCallback });
  };
</script>

<template>
  <div>
    <div>
      <IonInput
        :value="noteEditVM.noteData.title"
        type="text"
        placeholder="輸入標題"
        class="text-[20px]"
        @ionInput="(e) => noteEditVM.handleInput('title', e.target.value as string)"
      />
    </div>

    <IonTextarea
      :value="noteEditVM.noteData.content"
      placeholder="輸入內容"
      autoGrow
      class="mb-[40px]"
      @ionInput="(e) => noteEditVM.handleInput('content', e.target.value as string)"
    />

    <IonButton :disabled="!noteEditVM.canSubmit.value" class="w-full" @click="createNote">儲存筆記</IonButton>

    <!-- 
      請使用 v-if，不要使用 isOpen
      因為會造成 swiper slideTo 離開這個 slide 時，loading 組件還在，會造成 slide 順序錯亂
     -->
    <IonLoading v-if="noteEditVM.apiLoading.isLoading.value" :isOpen="true" />
  </div>
</template>
