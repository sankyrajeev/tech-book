const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
            attributes: { exclude: ['password'] },
            
        
        });
        
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log( posts );
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        if (postData) {
            const post = postData.get({ plain: true });
            console.log(post); 
            res.render('post', { post });
        }
        else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            // attributes: { exclude: ['password'] },
            // include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        const postData = await Post.findAll({
            where: { user_id: req.session.user_id, },

        },
            {
                include: [{ model: User }]
            });
        const posts = postData.map(post => {
            return post.get({ plain: true })
        });
        console.log(posts);

        res.render('dashboard', {
            user,
            posts,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/edit/:id", withAuth, async (req, res) =>  {
    try {
        const postData = await Post.findByPk(req.params.id)

        const post = postData.get({ plain: true })
        res.render('edit', {
            layout: 'main',
            logged_in: true,
             post  });
    } catch (err) {
        res.status(500).json(err);
    }

}); 


router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render("login");

})


module.exports = router; 