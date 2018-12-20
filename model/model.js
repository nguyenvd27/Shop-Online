const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'myuser',
        password: '123',
        database: 'mydb'
    }
});

module.exports = db;