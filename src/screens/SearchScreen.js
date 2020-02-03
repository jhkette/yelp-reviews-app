import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();
  
  const filterResultsByPrice = (price) => {

    return results.filter((result) => {
        return result.price == price;
    });

  }
  
  return (
    <View styles={styles.background}>
      <SearchBar
        term={term}
        ontermChange={newTerm => setTerm(newTerm)}
        ontermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      
      <ResultsList results ={filterResultsByPrice('$')}  title= 'cost effective' />
      <ResultsList results ={filterResultsByPrice('$$')}title= 'bit pricier' />
      <ResultsList results ={filterResultsByPrice('$$$')} title= 'quite expensive' />
      

      
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
