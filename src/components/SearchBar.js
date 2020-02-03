import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons'




const SearchBar = ({term, ontermChange, ontermSubmit}) => {

    return (
        <View style = {styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput style = {styles.inputStyle}
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            value={term}
            onChangeText={ontermChange}
            onEndEditing={ontermSubmit}/>

        </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
    
})

export default SearchBar;