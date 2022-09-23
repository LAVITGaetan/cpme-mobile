import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import CardAdherent from './components/CardAdherent';

//API RESSOURCES
const api_uri = "https://cpme-rest-api.herokuapp.com/api/adherents";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQzZDFmMTc3MTJhOTQ5ZWZjNWMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjM4NTg1MDQsImV4cCI6MTY2Mzk0NDkwNH0.pyQXj2BB-4ppyNPrHjgwFVlZ4E4e0w04GNZPneX-_F0"

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api_uri, { headers: { 'auth-token': token } })
      .then((response) => response.json())
      .then((json) => { setData(json); })
      .catch((error) => { alert(error) })
      .finally(setLoading(false))
  })
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <CardAdherent entreprise={item.entreprise} section={item.section} logo={item.logo} />
          )
        }}
      />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f4f5',
    padding: 30
  },
});

export default App;