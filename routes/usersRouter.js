const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');
const auth = require('../middlewares/auth');


router.get ('/analise', auth, usersController.analise);
router.post('/analise', auth, usersController.criarAnalise )
router.post('/analise/deletar/:id', auth , usersController.deletAnalise)

router.get ('/form-analise', auth, usersController.formAnalise);

router.get ('/meusjogos', auth, usersController.meusJogos);

router.get ('/posts', auth, usersController.posts);
router.post ('/posts', auth, usersController.sendPosts);
router.post('/posts/deletar/:id', auth , usersController.deletPost)

router.get ('/', auth, usersController.usuario);
router.post ('/', auth, usersController.sendConfigUsers);

router.get ('/midias', auth, usersController.userMidias)
router.post('/midias', usersController.criarMidia)
router.post('/midias/deletar/:id', auth , usersController.deletMidia)



module.exports = router