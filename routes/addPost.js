const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('addpost', {
    title: 'addPost',
    isAddpost: true,
  })
})

module.exports = router
