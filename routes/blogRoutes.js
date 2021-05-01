
const express = require('express')
const blogController = require('../controller/blogController');
const router = express.Router();

// all blog routers
router.post('/create', blogController.createBlog);
router.get('/allblogs', blogController.getAllblogs);
router.patch('/update/:id', blogController.updateBlog);
router.delete('/delete/:id', blogController.deleteBlog);

// export the router
module.exports = router;