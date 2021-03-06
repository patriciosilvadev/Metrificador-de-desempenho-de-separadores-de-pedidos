/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imp_venda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imp_Cab: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    imp_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Porta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'imp_venda'
  });
};
