var util = require('../../../util.js');
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current:0,
    motto: 'Hello World',
    baseInfo: {
      name:'黄世龙',
      age:28,
      schoolBackground: '本科',
      jobYear: util.jsGetAge('2017-7-1').toString()+'年',
      tel:'17606536286',
      email: 'shilong.native@foxmail.com',
      address:'广东-深圳',
      intention:'Linux驱动工程师|嵌入式开发'
    },
    width: 0,
    height: 0,
    // home
    circle1_show_locations: [{
      top: '1000rpx'
    }, {
      top: '220rpx'
    }],
    circle2_show_locations: [{
      top: '700rpx'
    }, {
      top: '220rpx'
    }],
    circle3_show_locations: [{
      top: '1100rpx'
    }, {
      top: '820rpx'
    }, ],
    // info
    infoBase_show_locations: [{
        top: '1000rpx'
      },
      {
        top: '35rpx'
      },
    ],
    infoSchool_show_locations: [{
      top: '990rpx'
      },
      {
        top: '400rpx'
      },
    ],
    infoExperience_show_locations: [{
      top: '980rpx'
      },
      {
        top: '800rpx'
      },
    ],
    hasUserInfo: false,
    
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    this.homeAnimate(this.data.circle1_show_locations, this.data.circle2_show_locations, this.data.circle3_show_locations);
  },
  onShow: function() {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width: width,
      height: height
    })
  },
  // 首页动画
  homeAnimate(circle1Arr, circle2Arr, circle3Arr) {
    /*
    guide-title-circle1
    guide-title-circle2
    guide-title-circle3
     */
    // guide-title-circle1 的动画
    this.animate('.guide-title-circle1', circle1Arr, 3000, function() {
      this.clearAnimation('.guide-title-circle1', {
        opacity: true,
        rotate: true
      }, () => {
        console.log("guide-title-circle1 加载完成")
      })
    }.bind(this));
    // guide-title-circle2 的动画
    this.animate('.guide-title-circle2', circle2Arr, 2300, function() {
      this.clearAnimation('.guide-title-circle2', {
        opacity: true,
        rotate: true
      }, () => {
        console.log("guide-title-circle2 加载完成")
      })
    }.bind(this));
    // guide-title-circle3 的动画
    this.animate('.guide-title-circle3', circle3Arr, 2300, function() {
      this.clearAnimation('.guide-title-circle3', {
        opacity: true,
        rotate: true
      }, ()=> {
        console.log("guide-title-circle3 加载完成")
      })
    }.bind(this));
  },
  // 详情页动画
  infoAnimate(infoBaseArr, infoSchoolArr, infoExperienceArr) {
    /*
    info-card-baseInfo
      info-card-school
      info-card-experience 
    */
    // info-card-base 的动画
    this.animate('.info-card-base', infoBaseArr, 1000, function() {
      this.clearAnimation('.info-card-base', {
        opacity: true,
        rotate: true
      }, () => {
        console.log("info-card-base 加载完成")
      })
    }.bind(this));

    // info-card-school 的动画
    this.animate('.info-card-school', infoSchoolArr, 1000, function() {
      this.clearAnimation('.info-card-school', {
        opacity: true,
        rotate: true
      }, () => {
        console.log("info-card-school 加载完成")
      })
    }.bind(this));

    // info-card-experience 的动画
    this.animate('.info-card-experience', infoExperienceArr, 1000, function() {
      this.clearAnimation('.info-card-experience', {
        opacity: true,
        rotate: true
      }, () => {
        console.log("info-card-experience 加载完成")
      })
    }.bind(this));

  },
  // 切换Swiper事件
  handleSwiperChange({
    detail
  }) {
    if (detail.currentItemId === 'info') {
      this.infoAnimate(this.data.infoBase_show_locations,
        this.data.infoSchool_show_locations,
        this.data.infoExperience_show_locations
      );
    } else if (detail.currentItemId === 'home') {
      this.homeAnimate(this.data.circle1_show_locations,
        this.data.circle2_show_locations,
        this.data.circle3_show_locations
      );
    }
  },
  // 跳转详情页面
  to_info: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  }
})