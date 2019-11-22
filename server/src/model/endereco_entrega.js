/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco_entrega', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeEndereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ent_Endereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Ent_Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Ent_CodIbge: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ent_Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Ent_CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Ent_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Ent_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Ent_Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Website: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ent_Telefone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ent_CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ent_IE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ent_Filial: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NumIncra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ent_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'endereco_entrega'
  });
};
