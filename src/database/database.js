import Sequelize from "sequelize";
// const db = "test";
// const host = "2hz6khaddrtj.aws-sa-east-1-1.psdb.cloud";
// const user = "ai5umoyu5ita";
// const password = "pscale_pw_1h1Ug105yiVQhTvcqSRF_FbNt3qZah7xbLWpK2_0-aQ";

const db = "cursonode";
const host = "localhost";
const user = "user";
const password = "71868322";
export const sequelize = new Sequelize(db, user, password, {
  dialect: "mysql",
  host,
  // dialectOptions: {
  //   ssl: {
  //     rejectUnauthorized: true,
  //   },
  // },
});
