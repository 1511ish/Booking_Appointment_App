const User = require('../models/User');

async function addUser(req, res, next) {
    try {

        if (!req.body.name) {
            throw new Error('Username is mandatory');
        }
        if (!req.body.phone) {
            throw new Error('Phone number is mandatory');
        }
        if (!req.body.email) {
            throw new Error('Email is mandatory');
        }
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const data = await User.create({ name: name, email: email, phone_number: phone });
        res.status(201).json({ newUserDetail: data });
        console.log('SUCCESSFULLY ADDED');

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


async function getUser(req, res, next) {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    } catch (err) {
        console.log("GET USER IS FAILING", JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}


async function deleteUser(req, res, next) {
    try {
        if (req.params.id == 'undefined') {
            console.log('Id is missing');
            return res.status(400).json({ err: 'ID is missing' });
        }
        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}



module.exports = {addUser,getUser,deleteUser};