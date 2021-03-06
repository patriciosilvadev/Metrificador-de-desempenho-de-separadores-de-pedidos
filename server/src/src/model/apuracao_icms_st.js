/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_icms_st', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mov: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    DataInicial: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Saldo_Anterior: {
      type: "DOUBLE",
      allowNull: false
    },
    Debitos: {
      type: "DOUBLE",
      allowNull: false
    },
    Creditos: {
      type: "DOUBLE",
      allowNull: false
    },
    Saldo_Devedor: {
      type: "DOUBLE",
      allowNull: false
    },
    Saldo_Credor: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    E250_CODOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    E250_VLROR: {
      type: "DOUBLE",
      allowNull: true
    },
    E250_VENC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    E250_CODREC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E250_NUMPROC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E250_INDPROC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    E250_PROC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    E250_TXTCOMPL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Credito_Devolucao: {
      type: "DOUBLE",
      allowNull: true
    },
    E250_MESANO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    OutrosDebitos: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    OutrosCreditos: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'apuracao_icms_st'
  });
};
