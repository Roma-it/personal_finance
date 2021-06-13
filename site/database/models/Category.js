module.exports = (sequelize, dataTypes) => {
  const alias = "Category";
  const cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allownull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    op_type_id: { type: dataTypes.INTEGER(11), allownull: false },
    name: { type: dataTypes.STRING(255), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "categories",
  };
  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (model) {
    Category.belongsTo(model.OpType, {
      as: "op_type",
      foreignKey: "op_type_id",
    });
    Category.hasMany(model.Operation, {
      as: "operation_categories",
      foreignKey: "category_id",
    });
  };
  return Category;
};
