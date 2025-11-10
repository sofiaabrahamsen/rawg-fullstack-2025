import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";
import dotenv from "dotenv";

dotenv.config(); // <- This loads your .env file

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "mysql" | "postgres",
  url: process.env.DATABASE_URL,
  entities: [Game, Genre, ParentPlatform, Store], // Registering entities with the data source
  synchronize: false, // Automatically create or modify database schema on every application launch
  logging: true, // Enable query logging for debugging purposes
});
