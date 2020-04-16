module.exports = (sequelize, DataTypes) => {
    var { diary } = sequelize;
    return {
        member: diary.define('member', {
            id: { type: DataTypes.INTEGER(11), allowNull: false, primaryKey: true, autoIncrement: true },
            email: {	type: DataTypes.STRING(512),	allowNull: true},
            password: {	type: DataTypes.STRING(512),	allowNull: true},
            name: {	type: DataTypes.STRING(512),	allowNull: true},
            loginAt: { type: DataTypes.DATE, allowNull: true },
            createAt: { type: DataTypes.DATE, allowNull: false, defaultValue: diary.literal('CURRENT_TIMESTAMP') }
        }, {
            timestamps: false,
            freezeTableName: true,
            tableName: 'member'
        })
    }
};
