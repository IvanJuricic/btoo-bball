export const BALL_DONT_LIE_BASE_API = 'https://www.balldontlie.io/api/v1';
export const SPORTS_DB_BASE_API = 'https://www.thesportsdb.com/api/v1/json/3';

export const BALL_DONT_LIE_ENDPOINTS = {
  getPlayers: '/players',
  getPlayer: '/players/{playerId}',
  searchPlayer: '/players?search={playerName}',
  getTeams: '/teams',
  getTeam: '/teams/{teamId}',
};

export const SPORTS_DB_ENDPOINTS = {
  getPlayerDetails: '/searchplayers.php?p={playerName}',
};
