// app.js
App({
  onLaunch () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onLaunch: function () {
    // 检查本地是否有收藏列表，如果没有则初始化一个空数组
    const favorites = wx.getStorageSync('favorites') || [];
    this.globalData.favorites = favorites;
  },
  globalData: {
    favorites: [] // 全局变量，用于存储收藏列表
  },
  onLoad: function() {
    // 假设您的数据位于一个名为https://mock.presstime.cn/mock/673aa72f7b9eaf4c817a889c/test/shukudai_1_main的URL上
    wx.request({
      url: 'https://mock.presstime.cn/mock/673aa72f7b9eaf4c817a889c/test/shukudai_1_main', 
      method: 'GET', // 用于获取数据
      success: function(res) {
        // 检查响应状态码
        if (res.statusCode === 200) {
          // 更新页面的数据
          this.setData({
            mods: res.data.data.mods,
            modpacks: res.data.data.modpacks,
            maps: res.data.data.maps,
            tips: res.data.data.tips,
            wiki: res.data.data.wiki,
            servers: res.data.data.servers,
          });
        } else {
          // 处理错误
          console.error('Failed to fetch data:', res.statusCode);
        }
      }.bind(this), // 使用bind确保this指向当前页面实例
      fail: function(err) {
        // 处理请求失败
        console.error('Request failed:', err);
      }
    });
  },
  globalData: {
    userInfo: null,
    mods: [],
    modpacks: [],
    tips: [],
    maps: [],
    servers: [],
    wiki: []
  },
})

  
