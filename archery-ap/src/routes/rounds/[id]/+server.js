import db from "$lib/db.js";

export async function GET({ params }) {
  const [schedule] = await db.query(
    "SELECT * FROM schedule WHERE RoundId = ? ORDER BY Num",
    [params.id],
  );
  return new Response(JSON.stringify({ schedule }), {
    headers: { "Content-Type": "application/json" },
  });
}
