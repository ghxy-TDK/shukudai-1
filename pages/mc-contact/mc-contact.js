Page({
  data: {
    messages: [],
    inputContent: '',
  },

  onInputChange(e) {
    this.setData({
      inputContent: e.detail.value
    });
  },

  sendMessage() {
    if (this.data.inputContent.trim() === '') {
      return;
    }

    const newMessage = {
      type: 'user',
      content: this.data.inputContent,
    };

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputContent: '',
    });

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: '你好',
      };
      this.setData({
        messages: [...this.data.messages, botResponse],
      });
    }, 1000);
  },
});