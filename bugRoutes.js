const express = require('express');
const router = express.Router();
const {
  createBug,
  getAllBugs,
  updateBugStatus,
} = require('../controllers/bugController');

router.post('/bugs', createBug);
router.get('/bugs', getAllBugs);
router.put('/bugs/:id/status', updateBugStatus);

module.exports = router;



