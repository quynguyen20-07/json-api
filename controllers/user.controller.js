const jsonServer = require("json-server");
const data_base = jsonServer.router("db.json");

const userController = {
  createUsers: async (req, res) => {
    try {
      const newUser = req.body;
      const createdUser = data_base.db.get("users").insert(newUser).write();
      res.json(createdUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      data_base.db.read();
      const users = data_base.db.get("users").value();
      res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getUser: async (req, res) => {
    try {
      console.log("req", req.params.id);
      const user = data_base.db
        .get("users")
        .find({ id: Number(req.params.id) })
        .value();
      res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = req.body;
      const id = Number(req.params.id);
      const user = data_base.db
        .get("users")
        .find({ id })
        .assign(updatedUser)
        .write();
      res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = Number(req.params.id);
      data_base.db.get("users").remove({ id }).write();
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
