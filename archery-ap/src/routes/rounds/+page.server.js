import db from "$lib/db.js";

export async function load() {
  const [rounds] = await db.query("SELECT * FROM round ORDER BY Id");
  return { rounds };
}
