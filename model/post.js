const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Post {
  constructor(FirstName, LastName, TitlePost, BodyPost) {
    this.FirstName = FirstName
    this.LastName = LastName
    this.TitlePost = TitlePost
    this.BodyPost = BodyPost
    this.id = uuidv4()
  }

  toJSON() {
    return {
      FirstName: this.FirstName,
      LastName: this.LastName,
      TitlePost: this.TitlePost,
      BodyPost: this.BodyPost,
      id: this.id,
    }
  }

  async save() {
    const posts = await Post.getAll()
    posts.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'posts.json'),
        JSON.stringify(posts),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'posts.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }
}

module.exports = Post
