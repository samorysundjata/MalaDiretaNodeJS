module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "sqlite", // Adicione o dialeto aqui
    storage: "./database.sqlite",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "sqlite", // Adicione o dialeto aqui
    storage: "./database.sqlite",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "sqlite", // Adicione o dialeto aqui
    storage: "./database.sqlite",
  },
};
