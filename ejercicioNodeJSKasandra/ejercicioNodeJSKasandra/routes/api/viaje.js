const router = require('express').Router();

const { getAll, insert, update, getById, deleteViaje } = require('../../models/viaje.model');

//localhost:3000/api/hotel
//GET recuperar
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

//POST crear
router.post('/', async (req, res) => {
    try {
        const [result] = await insert(req.body);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

//PUT actualizar
router.put('/:idviaje', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.idviaje), req.body);
        const [result_final] = await getById(Number(req.params.idviaje));
        res.json(result_final);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

//DELETE borrar
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteViaje(Number(req.params.id));
        console.log(req.params.id);
        res.json(result);
    } catch (error) {
        res.json ({ 'fatal': error.messaga });
    }
});

module.exports = router;