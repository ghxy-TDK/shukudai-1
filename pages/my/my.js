// import Toast_A from '@vant/weapp/toast/toast';
// Toast_A('请提供头像');
// import Toast_U from '@vant/weapp/toast/toast';
// Toast_U('请提供昵称');
// import Toast_AU from '@vant/weapp/toast/toast';
// Toast_AU('请提供头像和昵称');

Page({
  data:{
    show: false,
    nickName:'',
    avatarUrl:'',
    loginButtonShow:true,
    logAreaShow:false,
  },
  //获取用户昵称
  getName(e){
    console.log(e)
    this.setData({
      nickName:e.detail.value
    })
  },
  //获取用户头像
  getAvatar(e){
    console.log(e)
    this.setData({
      avatarUrl:e.detail.avatarUrl
    })
  },
  //登出
  logout(){
    this.setData({
      nickName:'',
      avatarUrl:'',
      loginButtonShow:true,
      logAreaShow:false,
    })
  },
  //弹出层
  showPopup(){
    this.setData({show:true,loginButtonShow:false})
  },
  onCloseN() {
    this.setData({
      show:false,
      nickName:'',
      avatarUrl:'',
      loginButtonShow:true,
    })
  },
  onCloseY() {
    this.setData({
      show:false,
      logAreaShow:true,
    })
  },
  
  about_us(){
    const res = wx.showModal({
      title: '关于我们',
      content: '作者：王悟 陈泓宇 罗俊超 翟炬承',
   })
  },

  contact(){
    const res = wx.showModal({
      title: '联系客服',
      content: '是否跳转到外部界面',
      success(res) {
        if (res.confirm) {
          // 用户点击了确定按钮
          wx.showLoading({
            title: '加载中...',
            mask:true
          })
          wx.navigateTo({
            url: '/pages/contact/contact' // 跳转的页面的路径
          });
          wx.hideLoading()
        } 
        else if (res.cancel) {
          // 用户点击了取消按钮
          wx.showToast({
            title: '取消执行',
            icon:'error',
            duration:2000
          })
        }
      }
    })
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