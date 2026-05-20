import db from "$lib/db.js";

export async function load({ url }) {
  const [archers] = await db.query("SELECT Id, Name FROM archer ORDER BY Name");

  const archerId = url.searchParams.get("archerId");
  let scores = [];

  if (archerId) {
    [scores] = await db.query(
      `
      SELECT score.Score, score.Division, score.Age,
             competition.Name AS CompetitionName, competition.Date,
             round.Name AS RoundName
      FROM score
      JOIN competition ON score.CompetitionId = competition.Id
      JOIN round ON competition.RoundId = round.Id
      WHERE score.ArcherId = ?
      ORDER BY competition.Date DESC
    `,
      [archerId],
    );
  }

  return { archers, scores, archerId };
}
