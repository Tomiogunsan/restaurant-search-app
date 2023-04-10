import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from  '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults()
    

    return <View>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi(term)}
        />
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} result</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;