const { Medico } = require('../models');

exports.getAllMedicos = async () => {
  return await Medico.findAll();
};

exports.createMedico = async (data) => {
  return await Medico.create(data);
};

exports.getMedicoById = async (id) => {
  return await Medico.findByPk(id);
};

exports.updateMedico = async (id, data) => {
  const medico = await Medico.findByPk(id);
  if (medico) {
    return await medico.update(data);
  }
  return null;
};

exports.deleteMedico = async (id) => {
  const medico = await Medico.findByPk(id);
  if (medico) {
    await medico.destroy();
    return true;
  }
  return false;
};
