'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medico = sequelize.define('Medico', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  
  Medico.associate = function(models) {
    Medico.hasMany(models.Consultorio, {
      foreignKey: 'medicoId',
      as: 'consultorios'
    });
  };
  
  return Medico;
};
