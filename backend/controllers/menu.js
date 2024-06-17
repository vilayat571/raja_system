const Menu = require("../models/menu.js");

const addMenu = async (req, res) => {
  try {
    const { name } = req.body;
    const existingUser = await Menu.findOne({ name });

    if (existingUser) {
      return res.status(500).json({
        message: `${name} adında yemək menyuda mövcuddur`,
      });
    } else {
      const newMenu = await Menu.create(req.body);
      return res.status(201).json({
        status: "OK",
        message: "New menu was added",
        newMenu,
      });
    }
  } catch (error) {
    return res.status(500).json({
      myMessage: error.message,
    });
  }
};

const getMenu = async (req, res) => {
  try {
    const holeMenu = await Menu.find();

    return res.status(200).json({
      status: "OK",
      holeMenu,
      count: holeMenu.length,
    });
  } catch (error) {
    return res.status(500).json({
      myMessage: error.message,
    });
  }
};

module.exports = {
  addMenu,
  getMenu,
};
