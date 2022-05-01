import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Project.js";
import "./models/Task.js";

const main = async () => {
  app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
  });
  try {
    await sequelize.sync({ force: false });
    console.log(
      " connection to the database has been established successfully"
    );
  } catch (error) {
    console.log(error);
  }
};

main();
