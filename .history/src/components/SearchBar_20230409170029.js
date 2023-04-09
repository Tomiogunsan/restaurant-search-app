import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange}) => {
    return <View style={styles.background}>
        <Feather name='search' 
        size={30}
        style={styles.iconStyles}
        />
        <TextInput 
        style={styles.inputStyle}
        placeholder='Search'
        
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginTop: 15,
    },
    inputStyle: {
      fontSize: 18,
        flex: 1
    },
    iconStyles:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;