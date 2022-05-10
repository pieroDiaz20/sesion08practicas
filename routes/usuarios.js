const {Router}=require('express');
const { getUsuarios,PutUsuarios,PostUsuarios,DeleteUsuarios } = require('../controller/usuarios.controller');
const router = Router();
//const controller = require('.usuarios.controller');




router.get('/',getUsuarios);
router.post('/',PostUsuarios);
router.put('/:id',PutUsuarios);
router.delete('/',DeleteUsuarios);

module.exports = router;