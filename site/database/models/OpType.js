module.exports = function (sequelize, dataTypes) {
  const alias = "OpType";
  const cols = {
    id: { type: dataTypes.INTEGER(), allownull: false, autoIncrement: true },
    name: { type: dataTypes.STRING(255), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "op_type",
  };
  const OpType = sequelize.define(alias, cols, config);

  OpType.associate = function (model) {
    OpType.belonsTo(model.Category, {
      as: "categories",
      foreignkey: "op_type_id",
    });
    OpType.hasMany(model.Operation, {
      as: "operations",
      foreignkey: "op_type_id",
    });
  };
  return OpType;
};
