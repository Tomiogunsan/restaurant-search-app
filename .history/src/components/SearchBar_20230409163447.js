import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const SearchBar = () => {
    return <View style={styles.background}>
        <Text>Search Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50
    }
})

export default SearchBar;