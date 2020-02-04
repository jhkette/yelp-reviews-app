import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price == price;
    });
  };

  return (
    <View styles={styles.background}>
      <SearchBar
        term={term}
        ontermChange={newTerm => setTerm(newTerm)}
        ontermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text style={styles.results}>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title="Quite expensive"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    marginLeft: 15

  }
});

export default SearchScreen;
