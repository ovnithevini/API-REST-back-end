const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Autor
const Autor = require('../models').Autor;
//Busca Autor (GET)
router.get('/', async (req, res) => {
    const autores = await Autor.findAll();
    res.status(200).json(autores);
});
//Cadastra Autor (POST)
router.post('/', async (req, res) => {
    const { nome } = req.body;
    const newEdit = await Autor.create({ nome })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});
//Busca Por id o Autor (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const autor = await Autor.findByPk(req.params.id);
    res.status(200).json(autor);
});
//Deleta Autor por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Autor.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});
//Altera Autor por ID (PUT)
router.put('/:id', async (req, res) => {
    const { nome } = req.body;
    await Autor.update(
        { nome },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;