const express = require('express');
const consultorioController = require('../controllers/consultorioController');

const router = express.Router();

router.get('/', consultorioController.getAllConsultorios);
router.post('/', consultorioController.createConsultorio);
router.get('/:id', consultorioController.getConsultorioById);
router.put('/:id', consultorioController.updateConsultorio);
router.delete('/:id', consultorioController.deleteConsultorio);

module.exports = router;
