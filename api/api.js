import axios from 'axios';

const BALL_DONT_LIE_BASE_API = 'https://www.balldontlie.io/api/v1';

// Define API endpoints
const BALL_DONT_LIE_ENDPOINTS = {
  getPlayers: '/players',
  getPlayer: '/players/{playerId}',
  getTeams: '/teams',
  getTeam: '/teams/{teamId}',
};

// Create an instance of Axios with custom settings, e.g., headers, authentication, etc.
const bballApi = axios.create({
  baseURL: BALL_DONT_LIE_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define API functions for fetching data
export const bballApiFunctions = {
  getPlayers: async () => {
    try {
      const response = await bballApi.get(BALL_DONT_LIE_ENDPOINTS.getPlayers);
      return response.data;
    } catch (error) {
      console.log('Error retrieving players: ', error);
      throw error;
    }
  },

  getPlayer: async playerId => {
    try {
      const response = await bballApi.get(
        BALL_DONT_LIE_ENDPOINTS.getPlayer.replace('{playerId}', playerId),
      );
      return response.data;
    } catch (error) {
      console.log('Error retrieving player: ', error);
      throw error;
    }
  },
  getTeams: async () => {
    try {
      const response = await bballApi.get(BALL_DONT_LIE_ENDPOINTS.getTeams);
      return response.data;
    } catch (error) {
      console.log('Error retrieving teams: ', error);
      throw error;
    }
  },

  getTeam: async teamId => {
    try {
      const response = await bballApi.get(
        BALL_DONT_LIE_ENDPOINTS.getTeam.replace('{teamId}', teamId),
      );
      return response.data;
    } catch (error) {
      console.log('Error retrieving team: ', error);
      throw error;
    }
  },
};
