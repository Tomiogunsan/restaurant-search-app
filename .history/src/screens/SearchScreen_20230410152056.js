import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from  '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
       try{
        const res = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
           });
           setResults(res.data.businesses)
        } catch (err){
            setError('Something went wrong');
        }
       }
      
       useEffect(()=> {
        searchApi('')
       }, []);

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