// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redOrange: 0,
    blueOrange: 0,
    towerOrange: 0,
    redGreen: 0,
    blueGreen: 0,
    towerGreen: 0,
    redPurple: 0,
    bluePurple: 0,
    towerPurple: 0,
    orangeDif: 0,
    greenDif: 0,
    purpleDif: 0,
    redS: 0,
    blueS: 0,
    redAuto: 0,
    blueAuto: 0,
    towerTotal: 0,
    orangeTotal: 0,
    greenTotal: 0,
    purpleTotal: 0,
    warning: "",
    orangeMax: false,
    greenMax: false,
    purpleMax: false,
    items: [{
        name: 'red',
        value: '红胜'
      },
      {
        name: 'blue',
        value: '蓝胜'
      },
      {
        name: 'black',
        value: '打平'
      }
    ]
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
    this.check();
    if (!this.data.orangeMax) {
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
      this.check();
    }
  },

  addRG(e) {
    this.check();
    if (!this.data.greenMax) {
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
      this.check();
    }
  },

  addRP(e) {
    this.check();
    if (!this.data.purpleMax) {
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
      this.check();
    }
  },

  addBO(e) {
    this.check();
    if (!this.data.orangeMax) {
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
      this.check();
    }
  },

  addBG(e) {
    this.check();
    if (!this.data.greenMax) {
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
      this.check();
    }
  },

  addTO(e) {
    this.check();
    if (!this.data.orangeMax) {
      if (this.data.towerTotal >= 7) {
        this.setData({
          warning: "所有Tower都已经被占领了"
        })
      } else {
        this.setData({
          towerOrange: this.data.towerOrange + 1
        })
        this.update();
      }
    }
  },

  subTO(e) {
    if (this.data.towerOrange > 0) {
      this.setData({
        towerOrange: this.data.towerOrange - 1
      })
      this.update();
      this.check();
    }
  },

  addTG(e) {
    this.check();
    if (!this.data.greenMax) {
      if (this.data.towerTotal >= 7) {
        this.setData({
          warning: "所有Tower都已经被占领了"
        })
      } else {
        this.setData({
          towerGreen: this.data.towerGreen + 1
        })
        this.update();
      }
    }
  },

  subTG(e) {
    this.check();
    if (this.data.towerGreen > 0) {
      this.setData({
        towerGreen: this.data.towerGreen - 1
      })
      this.update();
      this.check();
    }
  },

  addBP(e) {
    this.check();
    if (!this.data.purpleMax) {
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
      this.check();
    }
  },

  addTP(e) {
    this.check();
    if (!this.data.purpleMax) {
      if (this.data.towerTotal >= 7) {
        this.setData({
          warning: "所有Tower都已经被占领了"
        })
      } else {
        this.setData({
          towerPurple: this.data.towerPurple + 1
        })
        this.update();
      }
    }
  },

  subTP(e) {
    if (this.data.towerPurple > 0) {
      this.setData({
        towerPurple: this.data.towerPurple - 1
      })
      this.update();
    }
  },

  update() {
    this.setData({
      orangeTotal: this.data.blueOrange + this.data.redOrange + this.data.towerOrange,
      greenTotal: this.data.blueGreen + this.data.redGreen + this.data.towerGreen,
      purpleTotal: this.data.bluePurple + this.data.redPurple + this.data.towerPurple,
      towerTotal: this.data.towerGreen + this.data.towerOrange + this.data.towerPurple,
      redS: this.data.redGreen * (this.data.towerGreen + 1) +
        this.data.redOrange * (this.data.towerOrange + 1) +
        this.data.redPurple * (this.data.towerPurple + 1) + this.data.redAuto,
      blueS: this.data.blueGreen * (this.data.towerGreen + 1) +
        this.data.blueOrange * (this.data.towerOrange + 1) +
        this.data.bluePurple * (this.data.towerPurple + 1) + this.data.blueAuto
    })
  },

  check() {
    if (this.data.orangeTotal >= 22) {
      this.setData({
        orangeMax:true,
        warning: "橙色Cube已经用完了"
      })
    } else if (this.data.greenTotal >= 22) {
      this.setData({
        greenMax:true,
        warning: "绿色Cube已经用完了"
      })
    } else if (this.data.purpleTotal >= 22) {
      this.setData({
        purpleMax:true,
        warning: "紫色Cube已经用完了"
      })
    } else {
      this.setData({
        orangeMax: false,
        greenMax: false,
        purpleMax: false,
        warning: ""
      })
    }

  },

  radioChange: function(e) {
    if (e.detail.value == "red") {
      this.setData({
        redAuto: 6,
        blueAuto: 0
      })
    } else if (e.detail.value == "blue") {
      this.setData({
        redAuto: 0,
        blueAuto: 6
      })
    } else {
      this.setData({
        redAuto: 3,
        blueAuto: 3
      })
    }
    this.update();
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }

})