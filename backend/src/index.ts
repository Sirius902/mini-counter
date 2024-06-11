import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import RoomDatabase from "./db";

type DateCounts = {
  counts: Counts;
};

type Counts = {
  miniCoopers: number;
  cybertrucks: number;
};

const api = new Elysia({ name: "api" })
  .decorate("db", new RoomDatabase())
  .post("/create-room", ({ db }) => ({ roomCode: db.createRoom() }))
  .get("/room/:code", async ({ db }) => db.getRooms())
  .post("/room/:code/add", () => "TODO");

const app = new Elysia()
  .use(swagger())
  .group("/api", (app) => app.use(api))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
