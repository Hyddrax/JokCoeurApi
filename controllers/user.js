const User = require("../models").User
const { Op } = require("sequelize");

module.exports = {
    create(req, res) {
        return User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            profession: req.body.profession
        }).then(user => {
            res.status(201).send(user);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    getAllUsers(req, res) {
        return User.findAll().then(users => {
            res.status(201).send(users);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    getUsersByEmail(req, res) {
        return User.findAll({
            where: {
                email: {
                    [Op.eq]: req.params.email
                }
            }
        }).then(user => {
            res.status(201).send(user);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    deleteUserByEmail(req, res) {
        return User.destroy({
            where: {
                email: {
                    [Op.eq]: req.params.email
                }
            }
        }).then(user => {
            res.sendStatus(201);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    updateUserByEmail(req, res) {
        return User.update({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            profession: req.body.profession
        }, {
            where: {
                email: {
                    [Op.eq]: req.params.email
                }
            }
        }).then(user => {
            res.status(201).send(user);
        }).catch(error => {
            res.status(400).send(error)
        })
    }
}