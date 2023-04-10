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
        return results.filter(result => {
            return result.price === price;
        })
    };

    return <View >
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi(term)}
        />
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} result</Text>
        <Scrol
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
        <ResultsList  results={filterResultsByPrice('$$')} title='Bit Pricier'/>
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;