export function createTournament(client) {
  client.tournaments.create({
    tournament: {
      name: 'new_tournament_name',
      url: 'new_tournament_url',
      tournamentType: 'single elimination',
    },
    callback: (err, data) => {
      console.log(err, data);
    },
  });
  return {};
}
