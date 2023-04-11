import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults()
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$ || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };

    return <>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi(term)}
        />
        {error ? <Text>{error}</Text> : null}
        
        <ScrollView>
        <ResultsList 
        results={filterResultsByPrice('$')} 
        title='Cost Effective'
        navigation={navigation}
        />
        <ResultsList  results={filterResultsByPrice('$$')} title='Bit Pricier'/>
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})

export default SearchScreen;