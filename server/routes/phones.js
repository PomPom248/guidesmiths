const express = require('express');
const phoneRouter = express.Router();
const Phones = require('../models/Phones')
/* GET home page */

phoneRouter.get('/', (req, res, next) => {
    Phones.find()
        .then((phone) => {
            res.status(200).json({ phone });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error finding phones", err });
        });
});

phoneRouter.post('/', (req, res, next) => {
    const {
        model,
        brand,
        firstRelease,
        dimensions: {
            height,
            width,
            mass
        },
        memory,
        storage,
        battery
    } = req.body

    const newPhone = new Phones({
        model,
        brand,
        firstRelease,
        dimensions: {
            height,
            width,
            mass
        },
        memory,
        storage,
        battery
    })
    newPhone.save()
        .then((phone) => {
            res.status(200).json({ message: "Phone saved", phone })
        })
        .catch(e => res.status(500).json({ e }))
});

phoneRouter.delete('/', (req, res, next) => {
    Phones.deleteMany()
        .then(() => { res.status(200).json({ message: 'deleted all phones' }) })
        .catch((e) => { res.status(500).json(e) })
})

module.exports = phoneRouter;
