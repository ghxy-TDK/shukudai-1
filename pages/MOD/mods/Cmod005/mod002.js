// pages/MOD/mods/Cmod005/mod002.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://618-1333697173.cos.ap-guangzhou.myqcloud.com/001.png",
    image002:"https://618-1333697173.cos.ap-guangzhou.myqcloud.com/002.png",
    image003:"https://618-1333697173.cos.ap-guangzhou.myqcloud.com/003.png"
  },
  onFavoriteTap: function () {
        const app = getApp(); // 获取全局应用实例
        const currentArticle = {
          id: 717014, // 文章ID
          title: '建筑小帮手' ,//文章标题
          url:'/pages/MOD/mods/Cmod005/mod002', // 文章路径
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