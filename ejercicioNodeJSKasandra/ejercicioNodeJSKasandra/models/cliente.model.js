const tableDb = `vacaciones.cliente`;

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb}`)
};

const insert = ({ nombre, apellidos, direccion, telefono, fechaNacimiento, email, dni, id }) => {
    return db.query(`INSERT INTO ${tableDb} (nombre, apellidos, direccion, telefono, fechaNacimiento, email, dni, id) VALUES (?,?,?,?,?,?,?,?)`, [nombre, apellidos, direccion, telefono, fechaNacimiento, email, dni, id]);
};

const update = (idcliente, { nombre, apellidos, direccion, telefono, fechaNacimiento, email, dni }) => {
    return db.query(`UPDATE ${tableDb} SET nombre = ? , apellidos = ? , direccion = ? , telefono = ? , fechaNacimiento = ? , email = ? , dni = ? WHERE id = ?;`, [nombre, apellidos, direccion, telefono, fechaNacimiento, email, dni, idcliente]);
};

const getById = (idcliente) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [idcliente]);
};

const deleteClient = (idcliente) => {
    return db.query(`DELETE FROM ${tableDb} WHERE id = ?`, [idcliente]);
};

module.exports = { getAll, insert, update, getById, deleteClient };