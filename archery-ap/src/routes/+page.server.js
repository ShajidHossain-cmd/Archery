import db from "$lib/db.js";

export async function load() {
  const [[{ archerCount }]] = await db.query(
    "SELECT COUNT(*) AS archerCount FROM archer",
  );
  const [[{ competitionCount }]] = await db.query(
    "SELECT COUNT(*) AS competitionCount FROM competition",
  );
  const [[{ roundCount }]] = await db.query(
    "SELECT COUNT(*) AS roundCount FROM round",
  );

  const [recentCompetitions] = await db.query(`
    SELECT competition.Id, competition.Name, competition.Date,
           competition.ClubChampionship, round.Name AS RoundName
    FROM competition
    JOIN round ON competition.RoundId = round.Id
    ORDER BY competition.Date DESC
    LIMIT 5
  `);

  return { archerCount, competitionCount, roundCount, recentCompetitions };
}
