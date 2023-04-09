import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
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
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    },
    iconStyles:{
        fontSize: 35,
        
    }
})

export default SearchBar;