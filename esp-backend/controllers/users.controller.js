const usersModel = require('../models/users')


exports.getAllUsers = async (req, res) => {
    const users = await usersModel.find({});

    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.createUser = async (req, res) => {
    console.log(req)
    const user = await usersModel.create(req.body);

    try {
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}