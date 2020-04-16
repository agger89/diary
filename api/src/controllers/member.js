const mysql = require('../models/mysql');
const { sequelize, table, Op } = require('../schema');
const { member } = table;

class ControllerClass {
    constructor() {
        var err = '';
    }

    // qrcode 함수 시작
    async index(params, res) {
        let result = await mysql.select({table:member, where:{id: 1}, offset:0, limit:1, type:'One'});
        return result;
    }
}
module.exports = new ControllerClass();

