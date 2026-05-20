import db from "$lib/db.js";

export async function load() {
  const [records] = await db.query(`
    SELECT 
      round.Name AS RoundName,
      archer.Name AS ArcherName,
      competition.Name AS CompetitionName,
      competition.Date,
      MAX(score.Score) AS TopScore
    FROM score
    JOIN competition ON score.CompetitionId = competition.Id
    JOIN round ON competition.RoundId = round.Id
    JOIN archer ON score.ArcherId = archer.Id
    WHERE score.Score IS NOT NULL
    GROUP BY round.Id, round.Name
    ORDER BY round.Id
  `);

  return { records };
}
