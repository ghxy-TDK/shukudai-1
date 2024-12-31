// pages/mods/mods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://s1.imagehub.cc/images/2024/12/23/c4f74e8cdd3154b4be3883ba5f01173a.png",
    image002:"https://s1.imagehub.cc/images/2024/12/23/594df7cffdba28dbff3a4d10d74f8130.webp",
    image003:"https://s1.imagehub.cc/images/2024/12/23/f7797ddd2e7026afcc4bfd7ec58305bf.webp",
    image004:"https://s1.imagehub.cc/images/2024/12/23/65765c8b53f496562fe95250605aaedd.webp",
    image005:"https://s1.imagehub.cc/images/2024/12/23/d5eecb96b4ee2a7e1e6eb511867c3ea4.webp"
  },
  onFavoriteTap: function () {
        const app = getApp(); // 获取全局应用实例
        const currentArticle = {
          id: 717001, // 文章ID
          title: 'JEI管理器', //文章标题
          url:'/pages/MOD/mods/Cmod001/mod001', // 文章路径
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
  onReady:function() {
    wx.setNavigationBarTitle({
   title: '模组推荐',
    })
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
  onPullDownRefresh: function() {
    this.setData({
      count: 0
    })
    wx.stopPullDownRefresh()
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