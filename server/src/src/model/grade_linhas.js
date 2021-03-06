/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade_linhas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'grade_linhas'
  });
};
