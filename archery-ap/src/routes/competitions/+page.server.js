import db from "$lib/db.js";

export async function load() {
  const [rows] = await db.query(`
    SELECT competition.Id, competition.Name, competition.Date, 
           competition.ClubChampionship, round.Name AS RoundName
    FROM competition
    JOIN round ON competition.RoundId = round.Id
    ORDER BY competition.Date DESC
  `);
  return { competitions: rows };
}
