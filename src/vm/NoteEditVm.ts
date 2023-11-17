export class NoteEditVm {
  noteData = reactive({
    title: '',
    content: '',
  });

  canSubmit = computed(() => {
    const title = this.noteData.title.trim();
    const content = this.noteData.content.trim();
    return title && content;
  });

  handleInput(key: 'title' | 'content', val: string) {
    this.noteData[key] = val;
  }

  async handleSubmit() {
    if (!this.canSubmit.value) return;

    console.log('noteData:', this.noteData);
  }
}
