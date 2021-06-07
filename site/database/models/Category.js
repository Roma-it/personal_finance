module.exports = (sequelize, dataTypes) => {
  const alias = "Category";
  const cols = {
    id: { type: dataTypes.INTEGER(), allownull: false, autoIncrement: true },
    op_type_id: { type: dataTypes.INTEGER(), allownull: false },
    name: { type: dataTypes.STRING(255), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "categories",
  };
  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (model) {
    Category.belongsTo(model.OpType, {
      as: "op_types",
      foreignkey: "op_type_id",
    });
    Category.hasMany(model.Operation, {
      as: "operation_categories",
      foreignkey: "categories_id",
    });
  };
  return Category;
};
