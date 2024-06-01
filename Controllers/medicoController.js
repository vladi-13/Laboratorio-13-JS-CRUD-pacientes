const medicoService = require('../services/medicoService');

exports.getAllMedicos = async (req, res) => {
  try {
    const medicos = await medicoService.getAllMedicos();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMedico = async (req, res) => {
  try {
    const medico = await medicoService.createMedico(req.body);
    res.status(201).json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMedicoById = async (req, res) => {
  try {
    const medico = await medicoService.getMedicoById(req.params.id);
    if (medico) {
      res.json(medico);
    } else {
      res.status(404).json({ error: 'Médico no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMedico = async (req, res) => {
  try {
    const medico = await medicoService.updateMedico(req.params.id, req.body);
    if (medico) {
      res.json(medico);
    } else {
      res.status(404).json({ error: 'Médico no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMedico = async (req, res) => {
  try {
    const result = await medicoService.deleteMedico(req.params.id);
    if (result) {
      res.json({ message: 'Médico eliminado' });
    } else {
      res.status(404).json({ error: 'Médico no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
