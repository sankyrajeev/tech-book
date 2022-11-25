
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
module.exports = router; 