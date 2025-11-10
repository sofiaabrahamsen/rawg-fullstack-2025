import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";
import "dotenv/config";


export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "postgres" | "mysql",
  url: process.env.DATABASE_URL,
  entities: [Game, Genre, ParentPlatform, Store],
  synchronize: false,
  logging: true,
});
