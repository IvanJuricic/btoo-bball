import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {sportsDBApiFunctions} from '../api/api';

const placeholderImage = require('../assets/avatar.jpg'); // Import a placeholder image

const PlayerDetailsScreen = ({route}) => {
  const {item} = route.params;
  let playerName = `${item.first_name} ${item.last_name}`;

  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const getPlayerData = async () => {
      await sportsDBApiFunctions.searchPlayer(playerName).then(res => {
        setPlayer(res.player[0]);
        console.log('player set => ', res);
      });
    };
    getPlayerData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {player !== null ? (
        <View style={styles.imageContainer}>
          {player.strThumb ? (
            <Image source={{uri: player.strCutout}} style={styles.image} />
          ) : (
            <Image source={placeholderImage} style={styles.image} />
          )}
          <Text style={styles.playerName}>{player.strPlayer}</Text>
          <Text style={styles.playerPosition}>{player.strPosition}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Team</Text>
              <Text style={styles.statValue}>{player.strTeam}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Nationality</Text>
              <Text style={styles.statValue}>{player.strNationality}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Date of Birth</Text>
              <Text style={styles.statValue}>{player.dateBorn}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Height</Text>
              <Text style={styles.statValue}>{player.strHeight}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Weight</Text>
              <Text style={styles.statValue}>{player.strWeight}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Jersey Number</Text>
              <Text style={styles.statValue}>{player.strNumber}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Kit</Text>
              <Text style={styles.statValue}>{player.strKit}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Birth Location</Text>
              <Text style={styles.statValue}>{player.strBirthLocation}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Status</Text>
              <Text style={styles.statValue}>{player.strStatus}</Text>
            </View>
          </View>
          <Text style={styles.bio}>{player.strDescriptionEN}</Text>
        </View>
      ) : (
        <View>
          <Text>Loading....</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Lighter background color
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333', // Dark text color
  },
  playerPosition: {
    fontSize: 18,
    color: '#ff6600',
  },
  statsContainer: {
    marginTop: 20,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  statValue: {
    color: '#333',
  },
  bio: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});

export default PlayerDetailsScreen;
