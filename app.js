// app.js
import updateManager from './common/updateManager';
App({
  onLaunch() {},
  onShow: function () {
    updateManager();
  },
  globalData: {
    userInfo: null,
  },
});
