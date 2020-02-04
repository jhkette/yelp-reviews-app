import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        horizontal={true}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
   
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default ResultsList;
