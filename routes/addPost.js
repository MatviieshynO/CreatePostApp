const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'addPost',
    isAddpost: true,
  })
  router.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/posts')
  })
})

module.exports = router
