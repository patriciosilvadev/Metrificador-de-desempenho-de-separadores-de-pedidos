/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('retornoboletos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    IDBLQ: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BANCO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeTitulos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalTitulos: {
      type: "DOUBLE",
      allowNull: true
    },
    NRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'retornoboletos'
  });
};
