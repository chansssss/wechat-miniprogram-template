Page({
  camera: null,
  onReady() {},

  onPhotoTap: function (e) {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles);
      },
    });
  },
});
