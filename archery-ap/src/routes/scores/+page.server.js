import db from "$lib/db.js";

export async function load() {
  const [archers] = await db.query("SELECT Id, Name FROM archer ORDER BY Name");
  return { archers };
}
