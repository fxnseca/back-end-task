const express = require('express');

const router = express.Router();

const taskController = require('./controllers/taskController');
const quadroController = require('./controllers/quadroController');
const loginController = require('./controllers/loginController');


//===============ROTAS DO TASK==================

router.post('/task', taskController.create);
router.get('/task', taskController.index);
// router.put('/produtosconst express = require('express');


//===============ROTAS DO TASK==================

// router.put('/produtos/:id', produtoController.update);
router.delete('/task/:id', taskController.destroy);
// router.get('/produtos/:id', produtoController.show);


//===============ROTAS DO QUADRO==================
router.post('/quadro', quadroController.create);
router.get('/quadro', quadroController.index);

router.delete('/quadro/id', quadroController.destroy);

//===============ROTAS DO LOGIN==================
router.post('/login', loginController.create);
module.exports = router;