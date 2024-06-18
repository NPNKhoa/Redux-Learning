const express = require('express');
const router = express.Router();
const hobbyController = require('../controllers/hobbyController');

router.get('/', hobbyController.getHobbies);

router.get('/:id', hobbyController.getHobbyById);

router.post('/', hobbyController.createHobby);

router.put('/:id', hobbyController.updateHobby);

router.delete('/:id', hobbyController.deleteHobby);

module.exports = router;