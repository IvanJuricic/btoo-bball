import axios from 'axios';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  useQuery,
  gql,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {
  BALL_DONT_LIE_BASE_API,
  BALL_DONT_LIE_ENDPOINTS,
  RICK_AND_MORTY_GRAPHQL_BASE_API,
  SPORTS_DB_BASE_API,
  SPORTS_DB_ENDPOINTS,
} from './constants';

const bballApi = axios.create({
  baseURL: BALL_DONT_LIE_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const sportsDBApi = axios.create({
  baseURL: SPORTS_DB_BASE_API,
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

export const sportsDBApiFunctions = {
  searchPlayer: async playerName => {
    try {
      const response = await sportsDBApi.get(
        SPORTS_DB_ENDPOINTS.getPlayerDetails.replace(
          '{playerName}',
          playerName,
        ),
      );
      return response.data;
    } catch (error) {
      console.log('Error retrieving player: ', error);
      throw error;
    }
  },
};

export const rickAndMortyApiFunctions = {
  fetchRickCharacter: async () => {
    try {
      const httpLink = createHttpLink({
        uri: RICK_AND_MORTY_GRAPHQL_BASE_API,
      });

      const authLink = setContext((_, {headers}) => {
        // Add any necessary headers here, if required.
        return {
          headers: {
            ...headers,
            // Add headers as needed...
          },
        };
      });

      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      });

      const {data} = await client.query({
        query: gql`
          query {
            characters(filter: {name: "rick"}) {
              results {
                name
                image
              }
            }
          }
        `,
      });

      return data;
    } catch (error) {
      console.log('Error fetching data from GraphQL:', error);
      throw error;
    }
  },
};
