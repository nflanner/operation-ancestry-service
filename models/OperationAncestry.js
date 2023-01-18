// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

// class OperationAncestry extends Model {}

// OperationAncestry.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     ancestor_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'operation-ancestry',
//         key: 'id',
//         unique: false,
//       }
//     },
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     wo_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     ver_id: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     rev_id: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     op_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'operation-ancestry',
//   }
// );

// module.exports = OperationAncestry;