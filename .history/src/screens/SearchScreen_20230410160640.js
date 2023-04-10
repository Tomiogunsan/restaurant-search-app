import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults()
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$ || '$$$'
        return
    };

    return <View>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi(term)}
        />
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} result</Text>
        <ResultsList title='Cost Effective'/>
        <ResultsList  title='Bit Pricier'/>
        <ResultsList title='Big Spender'/>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;