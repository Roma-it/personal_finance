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
      order: [["op_date", "DESC"]],
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
  totalBalance: async (req, res) => {
    const ingresos = await db.Operation.sum("amount", {
      where: { op_type_id: 1 },
    });
    const egresos = await db.Operation.sum("amount", {
      where: { op_type_id: 2 },
    });
    const balance = ingresos - egresos;
    console.log(balance);
    res.json(balance);
  },
  create: async (req, res) => {
    console.log(req.body);
    const operationToCreate = await db.Operation.create({ ...req.body });
    res.json(operationToCreate);
  },
  categories: async (req, res) => {
    const totalCategories = await db.Category.findAll({
      where: { op_type_id: req.params.type_id },
    });
    res.json(totalCategories);
  },
};
module.exports = OpController;
