const { table } = require('../schema');
// const { push_token } = table;
class Mysql {
    constructor() {

    }
    /*
        data = {
            table // 테이블 [object]
            where // 조건 [object]
            limit // limit [int]
            offset // offset [int]
            order // order [String]
            attributes // 뽑을 컬럼 배열 [array]
            type // select type  One = 하나의 row 객체 출력 , All = 배열로 여러 객체 출력
        }
    */
    async select(data) {
        var {table , where, limit, order, offset, attributes, type, raw = true} = data;
        return await table['find' + type]({ attributes, raw: raw, where, order, offset, limit});
    }

    /*
        data = {
            source // foreignKey가 있는 테이블 [object]
            target // 타겟 테이블 [object]
            f_key // foreignKey [int]
            t_key // targetKey [int]
            where // 조건 [object]
            on_where // on 조건 [object]
            attributes // 뽑을 컬럼 배열 [array]
            on_attributes // 타겟 테이블 내에 뽑을 컬럼 배열 [array]
            limit // limit [int]
            offset // offset [int]
            order // order [String]
            type // select type  One = 하나의 row 객체 출력 , All = 배열로 여러 객체 출력
            raw //  false / true 부가 정보를 가져올건지 설정
        }
        join을 위한 select문
    */
    async select_join(data){
        var { source, target, f_key, t_key, on_where, where, on_attributes, attributes, limit, order, offset ,raw, group, required=true, type='All'} = data;
        source.belongsTo(target, { foreignKey: f_key, targetKey: t_key});
        return await source['find'+type]({
            raw: ((raw)? raw : false),
            include: {
                model: target,
                where : on_where,
                attributes : on_attributes,
                required : required
            },
            attributes,
            where,
            group,
            limit,
            order,
            offset
        });
    }

    /*
        data = {
            table // 테이블 [object]
            value // 데이터 [object]
        }
    */
    async insert(data){
        var {table , value} = data;
        return await table.create(value);
    }

    async delete(data) {
        var {table , where,  raw = true} = data;
        return await table.destroy({ where });
    }
    /*
        data = {
            table // 테이블 [object]
            value // 데이터 [object]
            where // 조건 [object]
        }
    */
    async update(data){
        var {table , value, where} = data;
        return await table.update(value, {where: where , returning : true});
    }

    async authUser(data){
        var {authorization, id} = data;
        authorization = (authorization)? authorization.replace('Bearer ', '') : "";

        var result = await this.select({ table: push_token, where: { access_token: authorization  }, attributes:['u_id', 'access_token', 'created_at'], offset: 0, type: 'One' });
        return (result)? result : false;
    }

}
module.exports = new Mysql();

