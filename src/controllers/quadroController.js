const Quadro = require('../models/quadro');

module.exports = {
    async create(request, response) {
        try {

            const { nomeQuadro, tasksQuadro, cor } = request.body;
            await Quadro.create({
                nomeQuadro,
                tasksQuadro,
                cor,
            });
            return response.status(200).json({ message: 'Quadro Criado com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro na criação do Quadro' });
        }

    },

    async index(request, response) {
        try {
            const quadros = await Quadro.find();
            return response.status(200).json(tarefas)

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar Quadros' });
        }
    },

    async destroy(request, response) {
        try {
            const id = request.params.id;
            const quadro = await Quadro.findOne({ _id: id });

            if (!quadro)
                return response.status(400).json({ message: 'Erro: Não existe Quadro com esse ID!' });
            await Quadro.deleteOne({ _id: id });

            return response.status(200).json({ message: 'Quadro apagado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao deletar Quadro' });
        }
    },

    async update(request, response) {
        try {
            const id = request.params.id;
            const quadro = await Quadro.findOne({ _id: id });

            if (!quadro)
                return response.status(400).json({ message: 'ERROR Não existe produto com esse ID' });

            const { nomeQuadro, tasksQuadro, cor } = request.body;

            await Quadro.findOneAndUpdate({ _id: id }, {
                nomeQuadro,
                tasksQuadro,
                cor,
            });

            return response.status(200).json({ message: 'Quadro Editado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao atualizar Quadro' });
        }
    }

}