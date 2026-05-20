import db from "$lib/db.js";

export async function load() {
  const [rows] = await db.query("SELECT * FROM archer");
  return { archers: rows };
}
