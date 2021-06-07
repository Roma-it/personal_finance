module.exports = (sequelize, dataTypes) => {
  const alias = "Operation";
  const cols = {
    id: {
      type: dataTypes.INTEGER(),
      allownull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    concept: { type: dataTypes.STRING(255), allownull: false },
    amount: { type: dataTypes.DECIMAL(11, 2), allownull: false },
    op_date: { type: dataTypes.DATE, allownull: false },
    category_id: { type: dataTypes.INTEGER, allownull: false },
    op_type_id: { type: dataTypes.INTEGER, allownull: false },
    user_id: { type: dataTypes.INTEGER, allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "operations",
  };
  const Operation = sequelize.define(alias, cols, config);

  Operation.associate = function (model) {
    Operation.belongsTo(model.OpType, {
      as: "operation_type",
      foreignKey: "op_type_id",
    });
    Operation.belongsTo(model.Category, {
      as: "category",
      foreignKey: "category_id",
    });
    Operation.belongsTo(model.User, {
      as: "user",
      foreignKey: "user_id",
    });
  };
  return Operation;
};
