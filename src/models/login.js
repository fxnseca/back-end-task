const mongoose = require('../database/conection');

const LoginSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;