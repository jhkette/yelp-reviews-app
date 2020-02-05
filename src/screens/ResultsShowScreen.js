import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [result, setresult] = useState(null);
  

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setresult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  if(result){
      console.log(result.photos)
  }

  return (
     <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5
    }

});
