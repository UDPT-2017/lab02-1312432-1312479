var config = {
    database: 'db02',
    user: 'postgres',
    password: '123456',
    port: 5432,
    max: 5, //set pool max size to 20
    min: 3, //set min pool size to 4
    idleTimeoutMillis: 10000,
};

module.exports = config;
