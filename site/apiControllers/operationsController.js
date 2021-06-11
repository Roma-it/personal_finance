const db = require("../database/models");

const OpController = {
  findAll: async (req, res) => {
    const result = await db.Operation.findAll({
      include: [
        { association: "category", attributes: ["name"] },
        { association: "operation_type", attributes: ["name"] },
        { association: "user" },
      ],
    });
    res.json(result);
  },
  lastOps: async (req, res) => {
    const result = await db.Operation.findAll({
      limit: 10,
      include: [
        { association: "category", attributes: ["name"] },
        { association: "operation_type", attributes: ["name"] },
      ],
    });
    res.json(result);
  },
  findAllByType: async (req, res) => {
    const result = await db.Operation.findAll({
      where: { op_type_id: req.params.id },
      include: [{ association: "category" }, { association: "operation_type" }],
    });
    res.json(result);
  },
  findAllByCategory: async (req, res) => {
    const result = await db.Operation.findAll({
      where: { categories_id: req.params.id },
      include: [{ association: "category" }, { association: "operation_type" }],
    });
    res.json(result);
  },
};
module.exports = OpController;
