const serverlogs = async (req, res, next) => {
    const fechaActual = dayjs().format('DD-MM-YYYY HH:mm:ss');
    const linea = `[${fechaActual}] Método: ${req.method} URL: ${req.url}\n`;
    await fs.appendFile('./main.log', linea);
    next()
};

module.exports = { serverlogs };