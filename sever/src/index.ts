import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { User } from "./enitity/User";
import userRoutes from "./routes/user.routes";

const main = async () => {
  const app = express();

  await createConnection({
    type: "postgres",
    database: "aj_shop",
    username: "postgres",
    password: "toor",
    logging: true,
    synchronize: true,
    // migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User],
  });

  // await conn.runMigrations();

  app.use(express.json());

  app.use(userRoutes);
  app.listen(4001, () => {
    console.log("http://localhost:4001");
  });
};

main().catch((err) => console.log(err));
