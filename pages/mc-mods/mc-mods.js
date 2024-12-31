// pages/mods/mods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images1:'https://s1.imagehub.cc/images/2024/12/22/71256d8241f56d07971178cb90d783da.webp',
    images2:'https://s1.imagehub.cc/images/2024/12/21/cf6db8076ca8e9d9e8f7f672c5231a42.jpg',
    images3:'https://s1.imagehub.cc/images/2024/12/02/bca7523efb88f3deb6a5faf53ca1912f.jpg',
    images4:'https://s1.imagehub.cc/images/2024/12/02/9345b52ba2d48c652d537259fc5cfbd5.jpg',
    images5:'https://s1.imagehub.cc/images/2024/12/21/4f89a139ddc719d94a55d1365b4bce95.webp',
    images6:'https://s1.imagehub.cc/images/2024/12/02/54e02cc9091ba82cfe159b610f744fec.jpg',
    images7:'https://s1.imagehub.cc/images/2024/12/21/1ddd9c5eb50b48f62e6a90792dfb2ad6.webp', 
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