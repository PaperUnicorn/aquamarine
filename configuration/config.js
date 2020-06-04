var config = module.exports;

var PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
    port : process.env.PORT || 8000,
    ip : '127.0.0.1'
}



config.postgre = {
    port: 5432,
    host: '127.0.0.1',
    database: 'Aquamarine',
    username: 'postgres',
    password: 'postgres'
}

if(PRODUCTION){
    config.express.ip = '0.0.0.0'
}
