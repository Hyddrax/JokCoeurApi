const EmotStats = require("../models").EmotStats
const Emot = require("../models").Emot
const { Op } = require("sequelize");
const Sequelize = require('sequelize');
const HashMap = require('hashmap');

module.exports = {
    create(req, res) {
        return EmotStats.create({
            userId: req.body.userId,
            emotId: req.body.emotId,
            emotValue: req.body.emotValue,
        }).then(stat => {
            res.status(201).send(stat);
        }).catch(error => {
            res.status(400).send(error)
        })
    },

    getStats(req, res) {
        return EmotStats.findAll().then(stats => {
            res.status(201).send(stats);
        }).catch(error => {
            res.status(400).send(error)
        })
    },

    getStatById(req, res) {
        return EmotStats.findAll({
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(stat => {
            res.status(201).send(stat);
        }).catch(error => {
            res.status(400).send(error)
        })
    },

    getStatsByUserId(req, res) {
        return EmotStats.findAll({
            where: {
                userId: {
                    [Op.eq]: req.params.userId
                }
            }
        }).then(stats => {
            res.status(201).send(stats);
        }).catch(error => {
            res.status(400).send(error)
        })
    },

    getStatsByUserIdAndDate(req, res) {
        startDate = req.query.startDate ? new Date(req.query.startDate) : new Date().setFullYear(1);
        endDate = req.query.endDate ? new Date(req.query.endDate) : Date.now();

        return EmotStats.findAll({
            where: {
                userId: {
                    [Op.eq]: req.params.userId
                },
                createdAt: {
                    [Op.lt]: endDate,
                    [Op.gt]: startDate
                }
            },
            include: [Emot]
        }).then(stats => {
            Emot.findAll({
                attributes: ['lib']
            }).then(libs => {
                var map = new HashMap();
                libs.forEach(lib => {
                    map.set(lib.dataValues.lib, 0);
                });

                stats.forEach(stat => {
                    key = stat.dataValues.Emot.dataValues.lib
                    value = map.get(key) == 0 ? parseInt(stat.dataValues.emotValue) : (parseInt(stat.dataValues.emotValue) + parseInt(map.get(key))) / 2

                    map.set(key, value);
                });

                ret = []
                map.forEach(function (value, key) {
                    ret = [...ret, { value: value, label: key }]
                });

                res.status(201).send(ret);

            }).catch(error => {
                res.status(401).send(error)
            })
        }).catch(error => {
            console.log(error);

            res.status(400).send(error)
        })
    },

    deleteStatById(req, res) {
        return EmotStats.destroy({
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(stat => {
            res.sendStatus(201);
        }).catch(error => {
            res.status(400).send(error)
        })
    },

    updateStatById(req, res) {
        return EmotStats.update({
            userId: req.body.userId,
            emotId: req.body.emotId,
            emotValue: req.body.emotValue,
        }, {
            where: {
                id: {
                    [Op.eq]: req.params.id
                }
            }
        }).then(stat => {
            res.status(201).send(stat);
        }).catch(error => {
            res.status(400).send(error)
        })
    }
}