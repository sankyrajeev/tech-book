const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
   
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },

        });

        if (!postData) {
            res.status(404).json({ message: 'doesnt exist' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    console.log('here'); 
    try {
        console.log(req.body); 
        const [postData] = await Post.update(
          req.body,
             {
            where: {
                id: req.params.id
            },
        });
        if (postData > 0) {
            res.status(200).end();
          } else {
            res.status(404).end();
          }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;  
