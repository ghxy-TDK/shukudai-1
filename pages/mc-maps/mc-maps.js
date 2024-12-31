// pages/MAP/MAP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_1:'https://zh.minecraft.wiki/images/thumb/Adventure_menu_icon_%28MCE%29.png/150px-Adventure_menu_icon_%28MCE%29.png?ff20e',

    image_2:'https://zh.minecraft.wiki/images/thumb/MCE_buildplate_icon.png/150px-MCE_buildplate_icon.png?f289d',

    image_3:'https://zh.minecraft.wiki/images/thumb/Journal_Icon_Open.png/150px-Journal_Icon_Open.png?db5ee',

    image_4:'https://pic.imgdb.cn/item/676983f2d0e0a243d4e8abac.png',

    image_5:'https://zh.minecraft.wiki/images/thumb/Friends_%28MCE%29.png/150px-Friends_%28MCE%29.png?7c82d',
    
    image_6:'https://zh.minecraft.wiki/images/thumb/Make_Stuff_icon_%28MCE%29.png/150px-Make_Stuff_icon_%28MCE%29.png?edf6f',

    
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
   title: '地图推荐',
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