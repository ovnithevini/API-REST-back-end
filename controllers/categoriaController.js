const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Categoria
const Categoria = require('../models').Categoria;
//Busca Categorias (GET)
router.get('/', async (req, res) => {
const categorias = await Categoria.findAll();
res.status(200).json(categorias);
});
//Cadastra Categorias (POST)
router.post('/', async (req, res) => {
const {descricao} = req.body;
const newEdit = await Categoria.create({descricao})
res.status(200).json({message: 'Cadastrado com sucesso'});
});
//Busca Por id a Categoria (GET)
router.get('/:id', async (req, res) => {
const id=req.params;
const categoria = await Categoria.findByPk(req.params.id);
res.status(200).json(categoria);
});
//Deleta categoria por id (DELETE)
router.delete('/:id', async (req, res) =>{
await Categoria.destroy({
where:{
id: req.params.id,
},
});
res.status(200).json({message:'Excluído com sucesso'})
});
//Altera Categoria por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {descricao} = req.body;
await Categoria.update(
{ descricao},
{
where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso'});
});
module.exports=router;