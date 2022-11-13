var util = require('../../../util.js');

// pages/info/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    personalInfo: {
      name: '黄世龙',
      age: 28,
      schoolBackground: '本科',
      jobYear: util.jsGetAge('2017-07-01').toString() + '年',
      tel: '17606536286',
      email: 'shilong.native@foxmail.com',
      address: '广东-深圳',
      intention: '前端工程师|python程序开发',
      projectsInfo: [{
        projectName: 'elemro电器世家前端页面',
        timeSlot: '2020/01-2020/03',
        job: '前端/数据对接',
        projectUrl: 'http://www.elemro.com',
        introduce: '使用vue/elementUi cdn模式完成个别前端页面设计、样式优化',
        // imgList: [{
        //   imgTitle: '首页',
        //   imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro1.png'
        // },
        // {
        //   imgTitle: '关于我们',
        //   imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro2.png'
        // }, {
        //   imgTitle: '检索列表',
        //   imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro3.png'
        // }, {
        //   imgTitle: '联系我们',
        //   imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro4.png'
        // }, {
        //   imgTitle: '在线消息',
        //   imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro5.png'
        // }
        // ]
      },
        {
          projectName: 'elemro电器世家前端页面',
          timeSlot: '2020/01-2020/03',
          job: '前端/数据对接',
          projectUrl: 'http://www.elemro.com',
          introduce: '使用vue/elementUi cdn模式完成个别前端页面设计、样式优化',
        //   imgList: [{
        //     imgTitle: '首页',
        //     imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro1.png'
        //   },
        //   {
        //     imgTitle: '关于我们',
        //     imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro2.png'
        //   }, {
        //     imgTitle: '检索列表',
        //     imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro3.png'
        //   }, {
        //     imgTitle: '联系我们',
        //     imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro4.png'
        //   }, {
        //     imgTitle: '在线消息',
        //     imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/elemro5.png'
        //   }
        //   ]
        }],
      schoolsInfo: [{
        schoolName: '轻工职业技术学院',
        specialty: '会计电算化',
        timeSlot: '2015-2018',
      }],
      skillsInfo: [{
          skillName: 'finereport报表',
          progress: '85%'
        },
        {
          skillName: 'html/css/jq',
          progress: '75%'
        },
        {
          skillName: 'Python',
          progress: '70%'
        },
        {
          skillName: 'Orale/Mysql/mongo/redis',
          progress: '65%'
        },
        {
          skillName: 'Scrapy/Django 框架',
          progress: '65%'
        },
        {
          skillName: 'LayUi/Aui/小程序',
          progress: '60%'
        },
        {
          skillName: 'Vue全家桶',
          progress: '60%'
        },
        {
          skillName: 'Linux',
          progress: '50%'
        },
        {
          skillName: 'Docker',
          progress: '40%'
        }
      ],
      experiencesInfo: [{
          companyName: '青岛海瑞达网络科技有限公司',
          job: 'ERP实施/报表工程师',
          timeSlot: '2019/01-至今',
          introduce: '负责海信ERP升级、维护，日常工作为 修改流程、数据错误、前端界面优化、制作报表等'

        },
        {
          companyName: '新疆智慧城市空间信息产业有限公司',
          job: '前端/原型设计师',
          timeSlot: '2018/12-2019/01',
          introduce: '负责昌吉州一家亲平台页面调试优化、小程序UI制作 民族宗教管理系统AXURE原型设计'
        }
      ],
    //   certificatesInfo:[
    //     {
    //       imgTitle: 'FCRA',
    //       imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/FCRA.jpg'
    //     },
    //     {
    //       imgTitle: 'FCRP',
    //       imgUrl: 'cloud://hx-095a2.6878-hx-095a2-1257900252/FCRP.png'
    //     }],
      selfAssessment:'学习能力很好,在校期间自学SQL，html等语言,能短时间在团队中找到自己的位置,具有独立完成工作的能力,后端精通python爬虫，django框架，前端精通vue全家桶、LayUi框架等，对所学知识有自己的理解，在网页采集、数据分析这块可胜任大部分工作，能做出各类图形展示报表。理解能力、需求分析这块在日常的ERP实施工作中得到了充分的锻炼，能短时间得到很好的沟通结果.'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 去留言
  to_comment_page: () => {
    wx.navigateTo({
      url: '../comment/comment'
    })
  },
  // 全屏预览图片
  previewImg: function(e) {
    var img_urls = [];
    for (let i in e.currentTarget.dataset.imgUrls){
      img_urls.push(e.currentTarget.dataset.imgUrls[i].imgUrl)
    }
    wx.previewImage({
      current: e.currentTarget.dataset.item.imgUrl, // 当前显示图片的http链接
      urls: img_urls // 需要预览的图片http链接列表
    })

  }
})