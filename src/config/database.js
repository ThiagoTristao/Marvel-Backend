hostDB = process.env.HOST
userNameDB = process.env.USER_NAME
passwordDB = process.env.PASSWORD
databaseDB = process.env.DATABASE
module.exports = {
    dialect: 'postgres',
    host: `${hostDB}`,
    username: `${userNameDB}`,
    password: `${passwordDB}`,
    database: `${databaseDB}`,
    define:{
        timestamps: true,
        underscored: true
    }
}