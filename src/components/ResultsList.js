import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ResultsList = ({title, results}) => {
    return(
        <View>
            <Text>{title}</Text>
            <Text>{results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default ResultsList;