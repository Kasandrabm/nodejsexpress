const router = require('express').Router();

const { getAll, insert, update, getById, deleteHotel } = require('../../models/hotel.model');

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
router.put('/:idhotel', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.idhotel), req.body);
        const [result_final] = await getById(Number(req.params.idhotel));
        res.json(result_final);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

//DELETE borrar
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteHotel(Number(req.params.id));
        console.log(req.params.id);
        res.json(result);
    } catch (error) {
        res.json ({ 'fatal': error.messaga });
    }
});

module.exports = router;