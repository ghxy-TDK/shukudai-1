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
        content: '您好！我是人机王悟，请问有什么可以帮助您的？',
      };
      this.setData({
        messages: [...this.data.messages, botResponse],
      });
    }, 1000);
  },
});