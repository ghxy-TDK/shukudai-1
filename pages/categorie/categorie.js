Page({
  data: {
    active: 0, // 当前激活的一级菜单索引
    showSubmenu: null, // 当前显示的二级菜单索引
    menu: [
      {
        title: '一级菜单1',
        icon: 'path/to/icon1',
        submenu: [
          { title: '二级菜单1-1' },
          { title: '二级菜单1-2' },
        ],
      },
      // ...更多一级菜单
    ],
  },
  onChange(e) {
    this.setData({
      active: e.detail,
      // 重置二级菜单显示状态
      showSubmenu: null,
    });
  },
  toggleSubmenu(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      showSubmenu: index === this.data.showSubmenu ? null : index,
    });
  },
  onSubmenuItemTap(e) {
    const submenuItem = e.currentTarget.dataset.submenuItem;
    // 处理二级菜单项点击事件
    console.log('点击了二级菜单项：', submenuItem.title);
    // 根据需要执行导航或其他操作
    // 例如：wx.navigateTo({ url: `/pages/somePage?item=${submenuItem.title}` });
  },
});