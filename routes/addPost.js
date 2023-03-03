const { Router } = require('express')
const Post = require('../model/post')
const router = Router()

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'addPost',
    isAddpost: true,
  })
  router.post('/', async (req, res) => {
    const post = new Post(
      req.body.FirstName,
      req.body.LastName,
      req.body.TitlePost,
      req.body.BodyPost
    )
    await post.save()

    res.redirect('/posts')
  })
})

module.exports = router
