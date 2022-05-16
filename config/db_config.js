let promise = require('bluebird');

let options = {   
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

let dataBaseCredential = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
}
let connectionString = 'postgres://' + dataBaseCredential.user +':' + dataBaseCredential.password
    + '@' + dataBaseCredential.host + ':' + dataBaseCredential.port + '/' + dataBaseCredential.name;

const Moment = require('moment');
const parseDate = function parseDate(val) {
    return val === null ? null : Moment(val).format('YYYY-MM-DD')
};
let types = pgp.pg.types;
const DATATYPE_DATE = 1082;
types.setTypeParser(DATATYPE_DATE, function(val) {
    return val === null ? null : parseDate(val)
});
module.exports = pgp(connectionString);