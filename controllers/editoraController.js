const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Editora
const Editora = require('../models').Editora;
//Busca Editoras (GET)
router.get('/', async (req, res) => {
const editoras = await Editora.findAll();
res.status(200).json(editoras);
});
//Cadastra Editoras (POST)
router.post('/', async (req, res) => {
const {descricao} = req.body;
const newEdit = await Editora.create({descricao})
res.status(200).json({message: 'Cadastrado com sucesso'});
});
//Busca Por id a Editora (GET)
router.get('/:id', async (req, res) => {
const id=req.params;
const editora = await Editora.findByPk(req.params.id);
res.status(200).json(editora);
});
//Deleta editora por id (DELETE)
router.delete('/:id', async (req, res) =>{
await Editora.destroy({
where:{
id: req.params.id,
},
});
res.status(200).json({message:'Excluído com sucesso'})
});
//Altera Editora por ID (PUT)
router.put('/:id', async (req, res) =>{
const {descricao} = req.body;
await Editora.update(
{ descricao},
{
where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso'});
});
module.exports=router;