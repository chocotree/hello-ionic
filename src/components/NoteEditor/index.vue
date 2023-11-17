<script setup lang="ts">
  import { IonInput, IonTextarea } from '@ionic/vue';
  import { NoteEditVm } from '@/vm/NoteEditVm';

  const props = withDefaults(
    defineProps<{
      onSubmitSuccess?: () => Promise<void> | void;
    }>(),
    {
      onSubmitSuccess: () => {},
    }
  );

  const noteEditVm = new NoteEditVm();

  const submit = async () => {
    await noteEditVm.handleSubmit();
    await props.onSubmitSuccess();
  };
</script>

<template>
  <div class="pt-[8px]">
    <div>
      <IonInput
        :value="noteEditVm.noteData.title"
        type="text"
        placeholder="輸入標題"
        class="text-[20px]"
        @ionInput="(e) => noteEditVm.handleInput('title', e.target.value)"
      />
    </div>

    <IonTextarea
      :value="noteEditVm.noteData.content"
      placeholder="輸入內容"
      autoGrow
      @ionInput="(e) => noteEditVm.handleInput('content', e.target.value)"
    />

    <IonButton :disabled="!noteEditVm.canSubmit.value" class="w-full" @click="submit">儲存筆記</IonButton>
  </div>
</template>
