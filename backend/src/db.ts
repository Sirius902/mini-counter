import { Database } from "bun:sqlite";
import { randomInRange } from "./util";
import initSql from "./sql/init.sql" with { type: "text" };

const codeLength = 5;

const codeDigitMin = "A".charCodeAt(0);
const codeDigitMax = "Z".charCodeAt(0) + 1;

export default class RoomDatabase {
  private db: Database;

  constructor() {
    this.db = new Database("rooms.db");

    this.init();
    console.log("Rooms database initialized");
  }

  // TODO: Recalculate new code if there is a conflict until successful.
  createRoom(): string {
    const code = createCode();
    this.db.run("INSERT INTO room (code) VALUES (?)", [code]);
    return code;
  }

  async getRooms(): Promise<unknown[]> {
    return this.db.query("SELECT * FROM room").all();
  }

  private init() {
    this.db.run(initSql);
  }
}

function createCode(): string {
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    code += String.fromCharCode(randomInRange(codeDigitMin, codeDigitMax));    
  }
  return code;
}
