import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CatalogScreen = () => {
  // Dados de exemplo para os jogos
  const gamesData = [
    { id: 1, title: 'God of War', genre: 'Ação/Aventura', year: 2005 },
    { id: 2, title: 'Shadow of the Colossus', genre: 'Ação/Aventura', year: 2005 },
    { id: 3, title: 'Final Fantasy X', genre: 'RPG', year: 2001 },
    // Adicione mais jogos conforme necessário
  ];

  // Renderizar cada item da lista de jogos
  const renderGameItem = ({ item }) => (
    <View style={styles.gameItem}>
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameDetails}>Genre: {item.genre}</Text>
      <Text style={styles.gameDetails}>Year: {item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gamesData}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  gameItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameDetails: {
    fontSize: 16,
  },
});

export default CatalogScreen;