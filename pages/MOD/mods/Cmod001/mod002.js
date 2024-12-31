// pages/MAP/MAP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://s1.imagehub.cc/images/2024/12/21/b0d09749930b46aa19fe5672a9777257.jpg",
    image002:"https://s1.imagehub.cc/images/2024/12/23/fb39a36565e619850ea77297ec015a3d.jpeg",
    image003:"https://s1.imagehub.cc/images/2024/12/23/d4aa4b1ffafc84e4808fac4073d519bd.jpeg",
    image004:"https://s1.imagehub.cc/images/2024/12/23/295aecaa8c53def347f9603ea4de5546.jpeg",
  
  },
  onFavoriteTap: function () {
        const app = getApp(); // 获取全局应用实例
        const currentArticle = {
          id: 717002, // 文章ID
          title: '连锁采集' ,//文章标题
          url:'/pages/MOD/mods/Cmod001/mod002', // 文章路径
        };
    
        // 将文章添加到全局收藏列表
        const favorites = app.globalData.favorites;
        const existingArticle = favorites.find(article => article.id === currentArticle.id);
        if (!existingArticle) { // 避免重复添加
          favorites.push(currentArticle);
          app.globalData.favorites = favorites;
    
          // 将更新后的收藏列表保存到本地存储
          wx.setStorageSync('favorites', favorites);
    
          // 可以显示一个提示或者进行其他操作
          wx.showToast({
            title: '收藏成功',
            icon: 'success'
          });
        } else {
          wx.showToast({
            title: '已收藏',
            icon: 'none'
          });
        }
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})