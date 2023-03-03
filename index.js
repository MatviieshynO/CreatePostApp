const express = require('express')
const expHBS = require('express-handlebars')
const addPost = require('./routes/addPost')
const posts = require('./routes/posts')
const index = require('./routes/index')

const server = express()

//Settings handlebars
const hbs = expHBS.create({
  defaultLayout: 'main',
  extname: 'hbs',
})
//Settings express-handlebars
server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', 'pages')

//Pages
server.use('/', index)
server.use('/posts', posts)
server.use('/addpost', addPost)

server.use(express.static('public'))

server.listen(5000, () => {
  console.log('Server is runing on 3000 port')
})
