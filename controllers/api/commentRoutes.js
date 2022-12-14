const router = require('express').Router(); 
const { Comment } = require('../../models'); 
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
    console.log('here');
    try {
        const createComment = await Comment.create({
            ...req.body, 
            user_id: req.session.user_id,
        });
        console.log(req.body);
        res.status(200).json(createComment); 
    }catch(err) {
        res.status(400).json(err); 
    }
}); 

module.exports = router; 