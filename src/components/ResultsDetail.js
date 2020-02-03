import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native'



const ResultsDetail = ({result}) => {
  return (
      <View>
          <Image style={styles.image} source={{uri: result.image_url}}></Image>
    <Text style={styles.name}>{result.name}</Text>
    <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultsDetail;

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',

    },
    rating: {
        
    }
})