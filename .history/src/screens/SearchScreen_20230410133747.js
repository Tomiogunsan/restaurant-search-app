import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import 

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return <View>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => console.log('sub')}
        />
        <Text>Search Screen</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;