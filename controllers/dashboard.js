const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('edit');
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
  
  module.exports = router;