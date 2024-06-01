const express = require('express');
const medicoController = require('../controllers/medicoController');

const router = express.Router();

router.get('/', medicoController.getAllMedicos);
router.post('/', medicoController.createMedico);
router.get('/:id', medicoController.getMedicoById);
router.put('/:id', medicoController.updateMedico);
router.delete('/:id', medicoController.deleteMedico);

module.exports = router;
