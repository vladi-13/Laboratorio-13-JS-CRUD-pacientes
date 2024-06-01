'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultorio = sequelize.define('Consultorio', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medicoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Medicos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {});
  
  Consultorio.associate = function(models) {
    Consultorio.belongsTo(models.Medico, {
      foreignKey: 'medicoId',
      as: 'medico'
    });
  };
  
  return Consultorio;
};
