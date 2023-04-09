import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <Feather name='search' 
        size={30}
        style={styles.iconStyles}
        />
        <TextInput 
        onEndEditing={() => onTermSubmit()}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText= { onTermChange(newTerm)}
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