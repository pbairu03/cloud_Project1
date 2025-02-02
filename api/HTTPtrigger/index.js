const sql = require('mssql');

module.exports = async function (context, req) {
    const config = {
        user: process.env.bairupa,
        password: process.env.!Pra3012#,
        server: process.env.pbairu-server.database.windows.net,
        database: process.env.studentdata,
        options: { encrypt: true }
    };

    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT Country, COUNT(*) AS StudentCount FROM Students GROUP BY Country');

        context.res = {
            status: 200,
            body: result.recordset
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: err.message
        };
    } finally {
        sql.close();
    }
};
