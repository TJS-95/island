/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 14:43:08
 * @LastEditTime: 2019-10-21 17:26:05
 * @LastEditors: Please set LastEditors
 */
const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('@db')


const classicFields = {
  image: {
    type: Sequelize.STRING,
    // get() {
    //   return global.config.host + this.getDataValue('image')
    // }
  },
  content: Sequelize.STRING,
  pubdate: Sequelize.DATEONLY,
  fav_nums: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  title: Sequelize.STRING,
  type: Sequelize.STRING,
}
class Movie extends Model {

}

Movie.init(classicFields, {
  sequelize,
  tableName: 'movie'
})
class Sentence extends Model {
  
}

Sentence.init(classicFields, {
  sequelize,
  tableName: 'sentence'
})

class Music extends Model {

}

const musicFields = Object.assign({
  url: Sequelize.STRING
}, classicFields)

Music.init(musicFields, {
  sequelize,
  tableName: 'music'
})

module.exports = {
  Movie,
  Sentence,
  Music
}