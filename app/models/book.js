/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 16:57:20
 * @LastEditTime: 2019-10-21 11:29:20
 * @LastEditors: Please set LastEditors
 */
const { Sequelize, Model, Op } = require('sequelize')
const util = require('util')
const axios = require('axios')
const { sequelize } = require('@db')
const { Favor } = require('./favor')

class Book extends Model {
  // constructor(id) {
  //   super()
  //   this.id = id
  // }
 async detail(id) {
    const url = util.format(global.config.yushu.detailUrl, id)
    const detail = await axios.get(url)
    return detail.data
  }

  static async getMyFavorBookCount(uid) {
    const count = await Favor.count({
      where: {
        type: 400,
        uid
      }
    })
    return count
  }
  static async searchFromYuShu(q, start, count, summary = 1) {
    const url = util.format(
      global.config.yushu.keywordUrl, encodeURI(q), count, start, summary
    )
    const result = await axios.get(url)
    return result.data
  }
}

Book.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  fav_nums: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  tableName: 'book'
})

module.exports = {
  Book
}