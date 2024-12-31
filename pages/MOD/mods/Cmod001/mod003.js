// pages/MOD/mods/mod003.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://s1.imagehub.cc/images/2024/12/23/ae079e02d1dcbc55f9199a962ffa4f1f.jpeg",
    image002:"https://s1.imagehub.cc/images/2024/12/23/9add24a5d2bc17ac3b409477166c29fc.jpeg",
    image003:"https://s1.imagehub.cc/images/2024/12/23/88a6b932c3ea2ebc9dbc9e070fabc454.jpeg"
    
  },
  onFavoriteTap: function () {
        const app = getApp(); // 获取全局应用实例
        const currentArticle = {
          id: 717003, // 文章ID
          title: '血量显示' ,//文章标题
          url:'/pages/MOD/mods/Cmod001/mod003', // 文章路径
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