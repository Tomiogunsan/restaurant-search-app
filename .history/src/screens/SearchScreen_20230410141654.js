import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from  '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async () => {
       try{
        const res = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
           });
           setResults(res.data.businesses)
        } catch (err){
            setError('Something went wrong');
        }
       }
      

    return <View>
        <SearchBar term={term} 
        onTermChange={(newTerm)=> setTerm(newTerm) } 
        onTermSubmit ={() => searchApi()}
        />
        {error <Text>{error}</Text>}
        <Text>We have found {results.length} result</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen;