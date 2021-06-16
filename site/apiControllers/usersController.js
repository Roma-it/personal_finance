const db = require("../database/models");

const userController = {
  findByEmail: async (req, res) => {
    const user = await db.User.findOne({
      where: { email: req.body.mail },
      include: [{ association: "operations" }],
    });
    res.json(user);
  },
  create: async (req, res) => {
    const userToCreate = await db.User.create({
      ...req.body,
    });
    res.json(userToCreate);
  },
  login: async (req, res) => {
    console.log(req.body);
    const userToLogin = await db.User.findOne({
      where: { email: req.body.mail },
    });
    console.log(userToLogin);
    if (userToLogin && userToLogin.pass == req.body.pass) {
      return res.json(userToLogin);
    } else {
      res.json("Credenciales incorrectas");
    }
  },
};

module.exports = userController;
