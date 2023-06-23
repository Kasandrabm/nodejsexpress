const tableDb = `vacaciones.viaje`;

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb}`)
};

const insert = ({ id, fechaSalida, fechaVuelta, identificadorVueloIda, identificadorVueloVuelta, hotel,cliente}) => {
    return db.query(`INSERT INTO ${tableDb} (id, fechaSalida, fechaVuelta, identificadorVueloIda, identificadorVueloVuelta, hotel, cliente) VALUES (?,?,?,?,?,?,?)`, [id, fechaSalida, fechaVuelta, identificadorVueloIda, identificadorVueloVuelta, hotel, cliente]);
};

const update = (idviaje, { fechaSalida, fechaVuelta, identificadorVueloIda, identificadorVueloVuelta, hotel,cliente }) => {
    return db.query(`UPDATE ${tableDb} SET fechaSalida = ? , fechaVuelta = ? , identificadorVueloIda = ? , identificadorVueloVuelta = ? , hotel = ?, cliente = ? WHERE id = ?;`, [fechaSalida, fechaVuelta, identificadorVueloIda, identificadorVueloVuelta, hotel, cliente, idviaje]);
};

const getById = (idviaje) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [idviaje]);
};

const deleteViaje = (idviaje) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id = ?`, [idviaje]);
};

module.exports = { getAll, insert, update, getById, deleteViaje };