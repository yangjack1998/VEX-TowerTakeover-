Page({
  //导航栏点击事件
  home_selected: function () {
    this.setData({
      homeIsSelect: true,
      gameIsSelect: false,
      scoreIsSelect: false
    })
  },
  game_selected: function () {
    this.setData({
      homeIsSelect: false,
      gameIsSelect: true,
      scoreIsSelect: false
    })
  },
  score_selected: function () {
    this.setData({
      homeIsSelect: false,
      gameIsSelect: false,
      scoreIsSelect: true
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    homeIsSelect: false,
    gameIsSelect: true,
    scoreIsSelect: false,
    redOrange: 0,
    blueOrange: 0,
    redGreen: 0,
    blueGreen: 0,
    redPurple: 0,
    bluePurple: 0,
    orangeDif: 0,
    greenDif: 0,
    purpleDif: 0,
    orangeTotal: 0,
    greenTotal: 0,
    purpleTotal: 0,
    putTextColor: "#c8c8c8",
    takeTextColor: "#c8c8c8"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  bindKeyInput(e) {
    this.setData({
      number: e.detail.value
    })
  },

  calculate(e) {
    this.setData({
      number: "SUCCESS"
    })
  },

  addRO(e) {
    if (this.data.orangeTotal <= 21) {
      this.setData({
        redOrange: this.data.redOrange + 1,
      })
      this.update();
    }
  },

  subRO(e) {
    if (this.data.redOrange > 0) {
      this.setData({
        redOrange: this.data.redOrange - 1
      })
      this.update();
    }
  },

  addRG(e) {
    if (this.data.greenTotal <= 21) {
      this.setData({
        redGreen: this.data.redGreen + 1
      })
      this.update();
    }
  },

  subRG(e) {
    if (this.data.redGreen > 0) {
      this.setData({
        redGreen: this.data.redGreen - 1
      })
      this.update();
    }
  },

  addRP(e) {
    if (this.data.purpleTotal <= 21) {
      this.setData({
        redPurple: this.data.redPurple + 1
      })
      this.update();
    }
  },

  subRP(e) {
    if (this.data.redPurple > 0) {
      this.setData({
        redPurple: this.data.redPurple - 1
      })
      this.update();
    }
  },

  addBO(e) {
    if (this.data.orangeTotal <= 21) {
      this.setData({
        blueOrange: this.data.blueOrange + 1
      })
      this.update();
    }
  },

  subBO(e) {
    if (this.data.blueOrange > 0) {
      this.setData({
        blueOrange: this.data.blueOrange - 1
      })
      this.update();
    }
  },

  addBG(e) {
    if (this.data.greenTotal <= 21) {
      this.setData({
        blueGreen: this.data.blueGreen + 1
      })
      this.update();
    }
  },

  subBG(e) {
    if (this.data.blueGreen > 0) {
      this.setData({
        blueGreen: this.data.blueGreen - 1
      })
      this.update();
    }
  },

  addBP(e) {
    if (this.data.purpleTotal <= 21) {
      this.setData({
        bluePurple: this.data.bluePurple + 1
      })
      this.update();
    }
  },

  subBP(e) {
    if (this.data.bluePurple > 0) {
      this.setData({
        bluePurple: this.data.bluePurple - 1
      })
      this.update();
    }
  },

  update() {
    this.setData({
      orangeDif: this.data.redOrange - this.data.blueOrange,
      greenDif: this.data.redGreen - this.data.blueGreen,
      purpleDif: this.data.redPurple - this.data.bluePurple,
      orangeTotal: this.data.blueOrange + this.data.redOrange,
      greenTotal: this.data.blueGreen + this.data.redGreen,
      purpleTotal: this.data.bluePurple + this.data.redPurple,
    })
    if (this.data.orangeDif > this.data.greenDif && this.data.orangeDif > this.data.purpleDif && this.data.orangeDif > 0) {
      this.setData({
        putTextColor: "#ffa500"
      })
    } else if (this.data.greenDif > this.data.orangeDif && this.data.greenDif > this.data.purpleDif && this.data.greenDif > 0) {
      this.setData({
        putTextColor: "#008000"
      })
    } else if (this.data.purpleDif > this.data.greenDif && this.data.purpleDif > this.data.orangeDif && this.data.purpleDif > 0) {
      this.setData({
        putTextColor: "#800080"
      })
    } else {
      this.setData({
        putTextColor: "#c8c8c8"
      })
    }

    if (this.data.orangeDif < this.data.greenDif && this.data.orangeDif < this.data.purpleDif && this.data.orangeDif < 0) {
      this.setData({
        takeTextColor: "#ffa500"
      })
    } else if (this.data.greenDif < this.data.orangeDif && this.data.greenDif < this.data.purpleDif && this.data.greenDif < 0) {
      this.setData({
        takeTextColorss: "#008000"
      })
    } else if (this.data.purpleDif < this.data.greenDif && this.data.purpleDif < this.data.orangeDif && this.data.purpleDif < 0) {
      this.setData({
        takeTextColor: "#800080"
      })
    } else {
      this.setData({
        takeTextColor: "#c8c8c8"
      })
    }
  }
})