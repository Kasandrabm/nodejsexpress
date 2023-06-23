const tableDb = `vacaciones.hotel`;

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb}`)
};

const insert = ({ id, nombre, direccion, ciudad, numeroEstrellas, descripcion, tarifa }) => {
    return db.query(`INSERT INTO ${tableDb} (id, nombre, direccion, ciudad, numeroEstrellas, descripcion, tarifa) VALUES (?,?,?,?,?,?,?)`, [id, nombre, direccion, ciudad, numeroEstrellas, descripcion, tarifa]);
};

const update = (idhotel, { nombre, direccion, ciudad, numeroEstrellas, descripcion, tarifa }) => {
    return db.query(`UPDATE ${tableDb} SET nombre = ? , direccion = ? , ciudad = ? , numeroEstrellas = ? , descripcion = ? , tarifa = ? WHERE id = ?;`, [nombre, direccion, ciudad, numeroEstrellas, descripcion, tarifa, idhotel]);
};

const getById = (idhotel) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [idhotel]);
};

const deleteHotel = (idhotel) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id = ?`, [idhotel]);
};

module.exports = { getAll, insert, update, getById, deleteHotel };