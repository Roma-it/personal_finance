module.exports = (sequelize, dataTypes) => {
  const alias = "User";
  const cols = {
    id: { type: dataTypes.INTEGER(), allownull: false, autoIncrement: true },
    name: { type: dataTypes.STRING(255), allownull: false },
    last_name: { type: dataTypes.STRING(255), allownull: false },
    email: { type: dataTypes.STRING(255), allownull: false },
    pass: { type: dataTypes.STRING(255), allownull: false },
    avatar: { type: dataTypes.STRING(255) },
  };
  const config = {
    timestamps: false,
    tableName: "users",
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (model) {};
  return User;
};
