const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota / recurso

// métodos HTTP:
// GET: buscar/listar uma informação do backend
// POST: criar uma informação no backend
// PUT: alterar uma informação no backend
// DELETE: deletar uma informação do backend

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação etc)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos
 *
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * Entidades banco:
 *
 * - ONG
 * - Caso (incident)
 *
 * Funcionalidades:
 *
 * - Login de ONG
 * - Logout de ONG
 * - Cadastro de ONG
 * - Cadastrar novos casos
 * - Deletar casos
 * - Listar casos específicos de uma ONG
 * - Listar todos os casos
 * - Entrar em contato com a ONG
 */

app.listen(3333);
