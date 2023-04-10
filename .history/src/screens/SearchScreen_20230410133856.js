import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from  '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const []
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