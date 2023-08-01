import { connection } from "./config.js";
import Knex from "knex";

const establishDBConnection = () => {
  Knex(connection);
  console.log("Connection Established");
};
const setKnexForRequest = () => {
  const knex = Knex(connection);
  console.log("Knex created for request");
  return knex;
};
export { establishDBConnection, setKnexForRequest };
