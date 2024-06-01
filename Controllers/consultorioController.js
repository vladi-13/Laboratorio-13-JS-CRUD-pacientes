const { Consultorio, Medico } = require('../models');

exports.getAllConsultorios = async (req, res) => {
  try {
    const consultorios = await Consultorio.findAll({ include: 'medico' });
    res.json(consultorios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.create(req.body);
    res.status(201).json(consultorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getConsultorioById = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id, { include: 'medico' });
    if (consultorio) {
      res.json(consultorio);
    } else {
      res.status(404).json({ error: 'Consultorio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id);
    if (consultorio) {
      await consultorio.update(req.body);
      res.json(consultorio);
    } else {
      res.status(404).json({ error: 'Consultorio no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteConsultorio = async (req, res) => {
  try {
    const consultorio = await Consultorio.findByPk(req.params.id);
    if (consultorio) {
      await consultorio.destroy();
      res.json({ message: 'Consultorio eliminado' });
    } else {
      res.status(404).json({ error: 'Consultorio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
