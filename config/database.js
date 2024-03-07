module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Vishal@123",
    DB: "cropImageDB",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};