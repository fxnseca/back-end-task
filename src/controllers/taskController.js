const Task = require('../models/task');

module.exports = {
    async create(request, response) {
        try {

            const { nome, descricao, quadro } = request.body;

            await Task.create({
                nome,
                descricao,
                quadro
            });

            return response.status(200).json({ message: 'Tarefa adicionada com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao adicionar tarefa' });
        }
    },

    async index(request, response) { //listar as tarefas
        try {
            const tarefas = await Tarefa.find(); //todas as tarefas listadas

            return response.status(200).json(tarefas)
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar tarefas' });
        }
    },

    async destroy(request, response) {
        try {
            const id = request.params.id
            const tarefa = await Tarefa.findOne({ _id: id });

            if (!tarefa)
                return response.status(400).json({ message: 'Erro: Não existe tarefa com essa ID!' });

            await Tarefa.deleteOne({ _id: id });

            return response.status(200).json({ message: 'Tarefa deletada com sucesso!' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao deletar tarefa' });
        }
    },
}



//  async update(request, response) {
//         try {
//             const id = request.params.id;
//             const produto = await Produto.findOne({ _id: id });

//             if (!produto)
//                 return response.status(400).json({ message: 'Erro: Não existe produto cadastrado com esse ID' });

//             const { nome, descricao, qtdEstoque } = request.body;

//             await Produto.FindOneAndUpdate({ _id: id }, {
//                 nome,
//                 descricao,
//                 qtdEstoque,
//             });

//             return response.status(200).json({ message: 'Produto editado com sucesso!' });
//         } catch (error) {
//             return response.status(400).json({ message: 'Erro ao editar produto' });
//         }
//     },
//         async show(request, response) {
//         try {
//             const id = request.params.id
//             const produto = await Produto.findOne({ _id: id })

//             if (!produto)
//                 return response.status(400).json({ message: 'Erro: Não existe produto cadastrado com esse ID!' });

//             return response.status(200).json(produto)
//         } catch (error) {
//             return response.status(400).json({ message: 'Erro ao buscar produto' })
//         }
//     }