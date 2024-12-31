// pages/MOD/mods002.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image001:"https://s1.imagehub.cc/images/2024/12/24/3ab74687e54a644cd3e49e6fe979605a.jpeg",
    image002:"https://s1.imagehub.cc/images/2024/12/24/0d055ac975296052e78ba2486f10286b.jpeg",
    image003:"https://s1.imagehub.cc/images/2024/12/24/c377ad7d56255dd87535cccf8b48b8ab.jpeg"
  },
  navigateToDetail: function() {
    wx.navigateTo({
      url: '/pages/MOD/mods/Cmod001/mod002' 
    });
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