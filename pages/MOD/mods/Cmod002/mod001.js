// pages/MOD/mods/Cmod002/mod001.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://s1.imagehub.cc/images/2024/12/24/3ab74687e54a644cd3e49e6fe979605a.jpeg",
    image002:"https://s1.imagehub.cc/images/2024/12/24/bd5ebd4b919f057fcefd8e44835cd408.jpeg",
    image003:"https://s1.imagehub.cc/images/2024/12/24/dd2d22a6dc0ef06b8461148d260c9005.jpeg",
    image004:"https://s1.imagehub.cc/images/2024/12/24/ac361cccbd7141be47be2f3df1fafe6d.jpeg"
  
  },
  onFavoriteTap: function () {
        const app = getApp(); // 获取全局应用实例
        const currentArticle = {
          id: 717004, // 文章ID
          title: '高清修复' ,//文章标题
          url:'/pages/MOD/mods/Cmod002/mod001', // 文章路径
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