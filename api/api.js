import axios from 'axios';
import {BALL_DONT_LIE_BASE_API, BALL_DONT_LIE_ENDPOINTS} from './constants';

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
      return response.data.data;
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
  searchPlayer: async playerName => {
    try {
      const response = await bballApi.get(
        BALL_DONT_LIE_ENDPOINTS.searchPlayer.replace(
          '{playerName}',
          playerName,
        ),
      );
      console.log('res => ', response.data);
      return response.data.data;
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