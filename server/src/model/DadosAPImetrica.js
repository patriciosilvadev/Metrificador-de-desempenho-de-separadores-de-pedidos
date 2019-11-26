/* jshint indent: 2 */

const { Model, DataTypes } = require('sequelize');

class produtosapi extends Model {
    static init(sequelize) {
        super.init({ 

          CodigoPedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
          },
          Codigo_produto: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: '0'
          },
          Referencia: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          Descricao: {
            type: DataTypes.STRING(120),
            allowNull: true
          },
          Fabricante: {
            type: DataTypes.STRING(30),
            allowNull: true
          },
          Prateleira: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          UNVenda: {
            type: DataTypes.STRING(3),
            allowNull: true
          },
          Quantidade: {
            type: "DOUBLE",
            allowNull: true
          },
             
        }, {
            sequelize,
            tableName: 'produtosapi',
            timestamps: false
        })
    }
}

module.exports = produtosapi;
