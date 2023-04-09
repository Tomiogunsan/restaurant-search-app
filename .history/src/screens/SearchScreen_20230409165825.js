import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] =
    return <View>
        <SearchBar />
        <Text>Search Screen</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;