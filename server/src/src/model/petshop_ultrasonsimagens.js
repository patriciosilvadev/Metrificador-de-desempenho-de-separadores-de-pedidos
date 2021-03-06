/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_ultrasonsimagens', {
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigoUltrason: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Imagens: {
      type: "LONGBLOB",
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'petshop_ultrasonsimagens'
  });
};
