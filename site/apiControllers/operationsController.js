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
  findById: async (req, res) => {
    const result = await db.Operation.findOne({
      where: { id: req.params.id },
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
      where: { user_id: req.params.id },
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
      where: { op_type_id: req.params.id, user_id: req.params.userid },
      include: [{ association: "category" }, { association: "operation_type" }],
    });
    res.json(result);
  },
  findAllByCategory: async (req, res) => {
    const result = await db.Operation.findAll({
      where: { user_id: req.params.userid, category_id: req.params.id },
      include: [{ association: "category" }, { association: "operation_type" }],
    });
    res.json(result);
  },
  totalBalance: async (req, res) => {
    const ingresos = await db.Operation.sum("amount", {
      where: { op_type_id: 1, user_id: req.params.userid },
    });
    const egresos = await db.Operation.sum("amount", {
      where: { op_type_id: 2, user_id: req.params.userid },
    });
    const balance = ingresos - egresos;
    res.json(balance);
  },
  create: async (req, res) => {
    const operationToCreate = await db.Operation.create({ ...req.body });
    res.json(operationToCreate);
  },
  edit: async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    const operationToEdit = await db.Operation.update(
      {
        amount: req.body.amount,
        concept: req.body.concept,
        op_date: req.body.op_date,
      },
      { where: { id: req.params.id } }
    );
    res.json(operationToEdit);
  },
  delete: async (req, res) => {
    const operationToDestroy = db.Operation.destroy({
      where: { id: req.params.id },
    });
    res.json(operationToDestroy);
  },
  categories: async (req, res) => {
    const totalCategories = await db.Category.findAll({
      where: { op_type_id: req.params.type_id },
    });
    res.json(totalCategories);
  },
};
module.exports = OpController;
