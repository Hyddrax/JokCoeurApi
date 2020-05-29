const Emot = require("../models").Emot
const { Op } = require("sequelize");

module.exports = {
    create(req, res) {
        return Emot.create({
            lib: req.body.lib,
            color: req.body.color
        }).then(emot => {
            res.status(201).send(emot);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    getAllEmot(req, res) {
        return Emot.findAll().then(emots => {
            res.status(201).send(emots);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    getEmotById(req, res) {
        return Emot.findAll({
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(emot => {
            res.status(201).send(emot);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    deleteEmotById(req, res) {
        return Emot.destroy({
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(emot => {
            res.sendStatus(201);
        }).catch(error => {
            res.status(400).send(error)
        })
    },
    updateEmotById(req, res) {
        return Emot.update({
            lib: req.body.lib,
            color: req.body.color
        }, {
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(emot => {
            res.status(201).send(emot);
        }).catch(error => {
            res.status(400).send(error)
        })
    }
}