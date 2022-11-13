var util = require('../../../util.js');
// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_time: '',
    height: 0,
    width: 0,
    forms: {
      commany: '',
      name: '',
      tel: '',
      comment: '',
      date: ''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    });

    // 请求网络时间
    wx.request({
      url: 'https://sapi.k780.com/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json',
      method: 'get',
      success: (res) => {
        console.log(res)
        this.setData({
          now_time: res.data.result.datetime_1.toString()
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 提交留言
  formSubmit(e) {
    e.detail.value.date = this.data.now_time
    if (e.detail.value.company.length === 0) {
      wx.showToast({
        title: '请填写公司',
        icon: 'none',
        duration: 2000
      })
    } else if (e.detail.value.name.length === 0) {
      wx.showToast({
        title: '请填写称呼',
        icon: 'none',
        duration: 2000
      })
    } else if (e.detail.value.tel.length === 0) {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none',
        duration: 2000
      })
    } else if (!(/^1[3456789]\d{9}$/.test(e.detail.value.tel))) {
      wx.showToast({
        title: '手机号码有误',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showLoading({
        title: '加载中',
      })
      const db = wx.cloud.database();
      db.collection('my_resume_comment').add({
        data: e.detail.value,
        success: (res) => {
          wx.hideLoading()
          this.setData({
            forms: {
              commany: '',
              name: '',
              tel: '',
              comment: '',
            }
          })
          wx.showToast({
            title: '留言成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  },
})