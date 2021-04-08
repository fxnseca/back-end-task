const Login = require('../models/login');

module.exports = {
    async create(request, response) {
        try {

            const { user, password } = request.body;

            await Login.create({
                user,
                password
            });

            return response.status(200).json({ message: 'Login realizado com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao realizar login' });
        }
    },
}