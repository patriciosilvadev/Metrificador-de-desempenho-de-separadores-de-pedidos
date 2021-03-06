/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_departamento', {
    dep_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dep_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dep_est_codigo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'mp_departamento'
  });
};
